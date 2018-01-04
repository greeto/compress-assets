#!/usr/bin/env node

console.log("Compress Assets!");

//
// var CURRENT_PWD;
//
// process.argv.forEach(function (val, index, array) {
//   if (val.includes('path')) {
//      val = val.replace('path=','');
//      CURRENT_PWD = val;
//   }
// });
//
//
// var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;
//
// INPUT_path_to_your_images = CURRENT_PWD + '/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
// OUTPUT_path = CURRENT_PWD + '/compressed/';
//
// compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
//                                             {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
//                                             {png: {engine: 'pngquant', command: ['--quality=20-50']}},
//                                             {svg: {engine: 'svgo', command: '--multipass'}},
//                                             {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
// });
