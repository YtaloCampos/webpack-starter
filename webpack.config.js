module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            { 
                test: /\.(png|jpg)$/,
                loader: 'file-loader' 
             }
        ],
    },
};