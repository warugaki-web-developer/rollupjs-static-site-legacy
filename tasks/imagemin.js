const keepfolder = require('imagemin-keep-folder')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')
const gifsicle = require('imagemin-gifsicle')
const svgo = require('imagemin-svgo')

keepfolder(['src/images/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    mozjpeg({
      quality: 75
    }),
    pngquant({
      quality: [0.7, 0.8]
    }),
    gifsicle(),
    svgo()
  ],
  replaceOutputDir: (output) => {
    return output.replace(/images\//, '../dist/images/')
  }
})
