const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'myBundle'
    },
    watch: true,
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
        historyApiFallback: true
    }
};