import { Command } from 'commander'
import { version } from '../package.json'
import { create } from './command/create.js'
const program = new Command()

program.name('rocky') //注册脚手架名称
    .description('自定义脚手架')
    .version(version, '-v, --version') // 配置版本

//新建create 命令，并对此命令创建描述，和命令参数，以及执行函数
program.command('create')
    .description('创建新项目')
    .argument('[name]', '项目名称')
    .action(async function (dirName) { //dirName 创建目录
        //创建项目
        create(dirName)
    })

program.parse() // 解析