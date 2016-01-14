/**
 * Created by Administrator on 2016/1/14.
 */
/**
 * Created by Administrator on 2016/1/13.
 */

//var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //plugins: [commonsPlugin],
    entry: {
        buypage:"./js/buypage.js",
        goodsdetail:"./js/goodsdetail.js",
        goodsintro:"./js/goodsintro.js",
        goodslist:"./js/goodslist.js",
        index: './js/index.js',
        shopcar:"./js/shopcar.js"
    },
    output: {

        path:'./build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            {test:/\.scss$/, loader:"style!css!sass"},
            { test: /\.(png|jpg)$/, loader: "url?limit=8192"}
        ]
    },

};