const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:'./src/js/index.js',                    //配置输入文件
	output:{
		filename:'main.js',                    //配置输出文件名
		path:path.resolve(__dirname,'dist'),   //输出文件路径
		publicPath:'dist/'                     // 用来指定静态资源发布地，不然后面图片会找不到的
	},
	module:{
		rules:[
		   {
		   	 test:/\.css$/,
		   	 use:[
		   	   {              //拆分css文件
		  	   	loader:MiniCssExtractPlugin.loader,
		  	   	options:{
		  	   		publicPath:''
		  	   	}
		  	   },             
		   	   'css-loader'           //解析css的插件
		   	 ]
		   },
		   {
		   	test:/\.(png|svg|jpg|gif)$/,   //解析图片的插件
		   	use:[
		   	   'file-loader'
		   	]
		   }
		]
	},
	plugins:[
	   new MiniCssExtractPlugin({
	   	 filename:"[name].css",
	   	 chunkFilename:"[id].css"
	   }),
     new htmlWebpackPlugin({
      template: './src/index.html',  //指定要把哪个页面作为模板生成到内存中
      filename:path.resolve(__dirname,'index.html')
     })
	]
}
