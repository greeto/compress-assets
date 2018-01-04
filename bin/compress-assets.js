#!/usr/bin/env node



// Get the path
let path = require("path");
if (path)
  path = path.resolve("./");


// If path not found, exit.
if (!path) {
  console.error("Error: couldn't find current path.");
  return;
}


// Compressing
var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;

INPUT_path_to_your_images = path + '/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
OUTPUT_path = path + '/compressed/';

compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                            {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                            {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                            {svg: {engine: 'svgo', command: '--multipass'}},
                                            {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
});
