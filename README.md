# mpvue-quckily-start
基于mpvue 初始脚手架进行的再封装
# dasai


## Build Setup

``` bash
# 初始化项目

cd WangLuoMingXingDaSai

# 安装依赖
yarn add/ npm i / cnpm i 

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录介绍

```
├─build    
├─config
├─dist    //打包生成的微信小程序
│  └─wx
│      ├─common
│      ├─components
│      ├─pages
│      │  ├─counter
│      │  ├─index
│      │  └─logs
│      └─static
│          ├─images
│          └─tabs
│                └─camelcase
├─src         //源代码
│  ├─components //组件目录
│  ├─pages      //页面目录
│  │  ├─counter
│  │  ├─index
│  │  └─logs
│  ├─store    //vuex 
│  │  ├─index 
│  │  ├─actions
│  │  ├─mutations   
│  │  ├─state       
│  │  └─mutation-type   
│  ├─fetch           //全局请求封装
│  │  ├─api         //模块化请求方法 
│  │  ├─prevAxios   //请求配置文件
│  │  ├─requestURL  //模块化url
│  │
│  └─utils   //自定义方法
└─static     //静态文件
    ├─images
    └─tabs

```