"use strict";var e=require("tslib"),r=require("commander"),i=require("@inquirer/prompts"),o=require("simple-git"),t=require("progress-estimator"),n=require("chalk"),c=require("node:path"),s=require("fs-extra");const l=t({spinner:{interval:100,frames:["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"].map((e=>n.green(e)))}}),a={baseDir:process.cwd(),binary:"git",maxConcurrentProcesses:6,trimmed:!1},u=new Map([["vite-vue3-typescript-template",{name:"vite-vue3-typescript-template",downloadUrl:"git@gitee.com:sun-kelin/vue-infrastructure.git",description:"Vue3 技术栈开发模版",branch:"master"}],["vite-template",{name:"vite-react-typescript-template",downloadUrl:"git@gitee.com:sun-kelin/vue-infrastructure.git",description:"Vue 技术栈开发模版",branch:"dev-rocky"}]]);function d(r){return e.__awaiter(this,void 0,void 0,(function*(){const t=Array.from(u).map((e=>{const[r,i]=e;return{name:r,value:r,description:i.description}}));r||(r=yield i.input({message:"请输入项目名称"}));const d=c.resolve(process.cwd(),r);if(s.existsSync(d)){const o=yield(r=>e.__awaiter(void 0,void 0,void 0,(function*(){return console.warn(`${r} 文件夹已存在`),i.select({message:"是否覆盖",choices:[{name:"覆盖",value:!0},{name:"取消",value:!1}]})})))(r);if(!o)return;s.remove(d)}const g=yield i.select({message:"请选择模版",choices:t}),m=u.get(g);m&&(yield((r,i,t)=>e.__awaiter(void 0,void 0,void 0,(function*(){const e=o(a);try{yield l(e.clone(r,i,t),"代码下载中...",{estimate:7e3}),console.log(""),console.log(n.blueBright("============================")),console.log(n.blueBright("= 欢迎使用 rocky-cli脚手架 =")),console.log(n.blueBright("============================")),console.log(""),console.log(n.blackBright("项目创建成功"),n.blueBright(i)),console.log(n.blackBright("请按照以下步骤进行操作:")),console.log(n.blackBright("cd ",n.blueBright(i))),console.log(n.yellowBright("pnpm ",n.blackBright("install"))),console.log(n.yellowBright("pnpm ",n.blackBright("run dev")))}catch(e){console.error(n.red("下载失败")),console.log(e)}})))(m.downloadUrl,r,["-b",m.branch]))}))}const g=new r.Command;g.name("rocky").description("自定义脚手架").version("1.0.0","-v, --version"),g.command("create").description("创建新项目").argument("[name]","项目名称").action((function(r){return e.__awaiter(this,void 0,void 0,(function*(){d(r)}))})),g.parse();
