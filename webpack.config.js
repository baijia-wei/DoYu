const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
module.exports = {
    // 入口文件
    
    entry: {
        index: './src/index.tsx'
    },
    // optimization: {
    //     minimizer: [new OptimizeCSSAssetsPlugin({})],//css压缩混稀
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]//js压缩混稀
    // },
    

    devServer: {
        port: "8090",
        open: true,  //自动打开浏览器
    },


    mode: "development",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },

    // 插件
    plugins: [
        // 可使用title和filename进行自动创建，这里使用模板
        new HtmlWebpackPlugin({
            title: "DoYu",
            // favicon: 'favicon.ico', //指定网站图标
            template: "public/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    // 调试处理加载器
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                  ] 
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,             // 这里！
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader', 
                    options: {                      
                      modules: true
                    }
                  },
                ] 
            }
            ,
            {
                test: /\.(png|svg|jpg|gif|webp|jfif)$/, //图片打包
                use: [
                    {
                        loader: "url-loader",  //图片base64化
                        options: {
                            limit: 1024 * 100,  //小于100kb的图片会被base64
                            name: "assets/[name]_[hash:10].[ext]"
                        }
                    }
                ]
            },
            
        ]
    },


    // 代码输出
    output: {
        // 文件名
        filename: 'bundle.js',
        // 输出路径
        path: path.resolve(__dirname, 'dist/lib')
    },
    
}