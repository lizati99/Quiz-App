const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: path.resolve(__dirname,'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname,'src'),
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  optimization: {
    minimize: true, // تفعيل الضغط
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // إزالة جميع التعليقات
          },
          compress: {
            drop_console: true, // إزالة جميع console.log
          },
        },
        extractComments: false, // لا استخراج التعليقات إلى ملف منفصل
      }),
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // مسار الملفات الثابتة
    },
    compress: true,
    port: 8080, // تحديد المنفذ
  }
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   mode: "development", // تغيير الوضع إلى "production"
//   entry: './src/index.ts',
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         include: path.resolve(__dirname, 'src'),
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './index.html', // مسار ملف HTML المصدر
//       filename: 'index.html', // نسخ الملف إلى dist مع بقية الملفات
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'styles.css', // اسم ملف CSS المنتج
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     },
//     compress: true,
//     port: 9000,
//   },
// };
