const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'portfolio.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: []
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {from: './src/index.html', to: 'index.html', flatten: true},
            {from: './src/images/skills/*', to: 'images', flatten: true},
            {from: './src/images/projects/*', to: 'images', flatten: true},
            {from: './src/portfolio.css', to: 'styles', flatten: true}
          ]),        
    ]
};