#说明
本项目可以帮你快速搭建一个基于Vue的单页面富应用,所有的目录结构和webpack配置都可以根据自己需要修改
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

#安装
```
npm install
```

#运行
###开发环境
```
npm run dev
```

###生产环境(打包)
```
npm run build
```

###访问
在浏览器地址栏输入http://127.0.0.1:8080