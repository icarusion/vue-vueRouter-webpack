#vue-vueRouter-webpack
> 本项目可以帮你快速搭建一个基于Vue的单页面富应用,但这并不意味着是最佳实践,所有的目录结构和webpack配置都可以根据自己需要修改

##目录结构
<pre>
│  .gitignore          # 忽略文件,比如 node_modules
│  package.json        # 项目配置
│  README.md           # 项目说明
│  index.html          # 首页
│
├─ webpack.base.config.js         # webpack 基础配置
├─ webpack.dev.config.js          # webpack 开发配置
├─ webpack.prod.config.js         # webpack 生产配置
│
│
├─node_modules
│
├─dist                 # 打包完的文件会自动放在这里
│
└─src
    ├─ main.js         # 启动配置
    │
    ├─components       # 组件
    │       │
    │       └─ app.vue # 入口组件,内含路由和公共部分
    │
    ├─routers          # 路由
    │
    ├─directives       # 自定义指令
    │
    ├─filters          # 自定义过滤器
    │
    ├─config           # 放置一些配置文件
    │
    ├─libs             # 放置一些工具函数
    │
    ├─images           # 放置图片
    │
    ├─styles           # 放置css
    │    │
    │    ├─ common.css # 通用css
    │    │
    │    └─ reset.css  # 页面初始化css
    │
    └─fonts            # 放置iconfont字体
</pre>


##说明
目前已将css(使用@import的和.vue内style的)样式都独立抽离为main.css文件,如果想按需加载,可以将webpack.base.js内的如下代码注释
```javascript
vue: {
    loaders: {
        css: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader?sourceMap",
            {
                publicPath: "../dist/"
            }
        )
    }
}

new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),
```

##安装
```
// 注意,需要提前在全局安装webpack和webpack-dev-server,如果已安装请忽略
npm install webpack -g
npm install webpack-dev-server -g

// 安装成功后,再安装依赖
npm install
```

##运行
####开发环境
```
npm run dev
```

####生产环境(打包)
```
npm run build
```

####访问
在浏览器地址栏输入http://127.0.0.1:8080