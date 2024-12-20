import chalk from "chalk"
export const exitListerner = () => {
    process.on('SIGINT', () => {
        console.log(`强制退出 ${chalk.blue('rockys-cli')}`)
        process.exit(0)
    })
    process.on('uncaughtException', (err) => {
        if (err.name === 'ExitPromptError') {
            // console.log('程序被中断，安全退出')
            console.log(`退出 ${chalk.blue('rockys-cli')}`)
            process.exit(0)
        } else {
            console.log(chalk.red('rockys-cli 发生未处理的错误:'), err)
            process.exit(1)
        }
    })
}