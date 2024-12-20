import axios from 'axios'
import { gt } from 'lodash'
import chalk from 'chalk'
import type { AxiosResponse } from 'axios'


export const getNpmInfo = async (npmName: string) => {
    //需要依赖 axios
    const npmUrl = `https://registry.npmjs.org/${npmName}`
    let res = {}
    try {
        res = await axios.get(npmUrl)
    } catch (error) {
        console.error(error)
    }
    return res
}

export const getNpmLastVersion = async (name: string) => {
    const { data } = await getNpmInfo(name) as AxiosResponse
    // console.info('npm info', data)
    //得到远程的最新版本
    return data['dist-tags'].latest
}
export const checkVersion = async (name: string, version: string) => {

    //获取远程版本进行比较
    const lastedVersion = await getNpmLastVersion(name)
    //版本比较
    const needUpdate = gt(lastedVersion, version)//如果远程版本大于本地版本，需要更新

    if (needUpdate) {
        console.warn(`检测到最新版本：${chalk.blueBright(lastedVersion)}, 当前版本：${chalk.blueBright(version)}`)
        console.log(`可使用：${chalk.yellow('npm install rockys-cli@latest -g')}, 或者使用：${chalk.yellow('rockys update')} 更新`)
    }
    return needUpdate
}