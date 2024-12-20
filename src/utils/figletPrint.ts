import figlet from "figlet";
import chalk from "chalk";
export const figletPrint = async () => {
    const data = await figlet('rockys-cli')
    console.log(chalk.rgb(40, 156, 193).visible(data))
}