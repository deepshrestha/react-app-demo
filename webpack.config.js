const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'myBundle'
    },
    module: {
		rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
                exclude: "/node_modules/",
                /* options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                } */
            },
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        port: 8081,
        historyApiFallback: true,
        compress: true,
    },
    devtool: 'inline-source-map',
};