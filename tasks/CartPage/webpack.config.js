const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const isProduction = process.env.mode === 'production';
// mode: process.env.mode,
module.exports = {
    
    mode: 'development',
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        static: {
            directory: path.join(__dirname ),
        }
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'build' )
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}