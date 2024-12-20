import simpleGit from 'simple-git'
import type { SimpleGitOptions } from 'simple-git'
import createLogger from 'progress-estimator'
import chalk from 'chalk'
// import { execSync } from 'child_process';
import log from './log'
import { figletPrint } from './figletPrint'


//初始化进度条
const logger = createLogger({
    spinner: {
        interval: 100,//动画变换时间间隔 100ms
        frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'].map((item) => {
            // console.info()
            return chalk.green(item)
        }),//动画帧
    }
})

const gitOptions: Partial<SimpleGitOptions> = {
    baseDir: process.cwd(),// 当前目录
    binary: 'git', // 选用 git 命令
    maxConcurrentProcesses: 6, // 最大并发数
    trimmed: false, // 是否删除尾随空格
}
export const clone = async (url: string, projectName: string, options: string[]) => {
    const git = simpleGit(gitOptions)
    try {

        // 添加 Gitee 主机指纹到 known_hosts
        // execSync('ssh-keyscan -H gitee.com >> ~/.ssh/known_hosts');
        await logger(git.clone(url, projectName, options), '代码下载中...', {
            //展示预计下载时间
            estimate: 7000
        })

        await figletPrint()

        console.log('')
        console.log(chalk.blueBright('============================'))
        console.log(chalk.blueBright('= 欢迎使用 rocky-cli脚手架 ='))
        console.log(chalk.blueBright('============================'))
        console.log('')
        log.success(chalk.blackBright('项目创建成功') + ' ' + chalk.blueBright(projectName))
        log.success(chalk.blackBright('请按照以下步骤进行操作:'))
        log.info(chalk.blackBright('cd ', chalk.blueBright(projectName)))
        log.info(chalk.yellow('pnpm ', chalk.blackBright('install')))
        log.info(chalk.yellow('pnpm ', chalk.blackBright('run dev')))

    } catch (error) {
        log.error(chalk.red('下载失败'))
        console.log(error)
    }
}