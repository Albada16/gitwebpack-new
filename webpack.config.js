let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPulgin = require('html-webpack-plugin');

module.exports = {
  entry: './assets/js/script.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.[chunkhash].js',
    publicPath: './'
  },
  module: {
      rules: [
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
             }
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 40000,
                        outputPath: './images'
                    }
                },
                'image-webpack-loader'
            ]
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                },{
                    loader: 'postcss-loader'
                }]
            }),
            
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'css/fonts',
                    name: '[name].[ext]',
                },
            }
        }
    ]
  },
  plugins: [
      new ExtractTextPlugin('./css/style.[hash].css'),
      new HtmlWebpackPulgin({
          template: "assets/index.html",
      })
  ]
};