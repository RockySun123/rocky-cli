import { select } from '@inquirer/prompts'
export const isOverwrite = async (projectName: string) => {
    console.warn(`${projectName} 文件夹已存在`)
    return select({
        message: '是否覆盖',
        choices: [{
            name: '覆盖',
            value: true
        }, {
            name: '取消',
            value: false
        }]
    })
}