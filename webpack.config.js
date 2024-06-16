const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', // تغيير الوضع إلى "production"
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // إضافة publicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // مسار ملف HTML المصدر
      filename: 'index.html', // نسخ الملف إلى dist مع بقية الملفات
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // اسم ملف CSS المنتج
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
