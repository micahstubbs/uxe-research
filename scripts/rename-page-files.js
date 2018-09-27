const fs = require('fs')

const inputDir = `${__dirname}/../data/pages`

const filenames = fs.readdirSync(inputDir)

let newFilename
let oldPath
let newPath
filenames.forEach(filename => {
  // console.log(fn)
  newFilename = filename
    .replace(/\(1\)/, '')
    .replace(/[\(\)_]/g, '')
    .replace(/\.(?!html)/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()

  console.log(newFilename)

  oldPath = `${inputDir}/${filename}`
  newPath = `${inputDir}/${newFilename}`
  fs.renameSync(oldPath, newPath)
})
