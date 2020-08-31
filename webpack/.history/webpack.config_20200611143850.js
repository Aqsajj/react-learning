const path = require('path')
const autoPrefixer = require('autoprefixer')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader', options: {
                            importsLoaders: 1,
                            modules: {
                                localIndentName: ' [name__[local__[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader', options: {
                            ident: 'postcss',
                            plugins: () => [

                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }

}