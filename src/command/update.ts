import progress from 'child_process'//nodejs的子进程
import chalk from "chalk"
import ora from 'ora' //加载动画

const spinner = ora({
    text: 'rockys-cli 正在更新中...',
    spinner: {
        interval: 100,//动画变换时间间隔 100ms
        frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'].map((item) => {
            // console.info()
            return chalk.green(item)
        }),//动画帧
    }
})
export const update = async () => {
    spinner.start()
    //执行 shell 命令
    return progress.exec('npm install rockys-cli@latest -g', (error, stdout) => {
        spinner.stop()
        if (!error) {
            console.log(chalk.green('更新成功'))
        } else {
            console.log(chalk.red('更新失败'))
            console.log(error)
        }
    })
}