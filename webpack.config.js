 module.exports = {
     entry: './src/app.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015','react','stage-0']
             }
         }]
     },
	 devServer: {
  		historyApiFallback: true
	 }
 }
