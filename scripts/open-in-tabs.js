const fs = require('fs')
const open = require('open')
const d3 = require('d3-dsv')

const inputDir = '../data'
const pagesFile = 'linkedin-research.csv'
const pageLinksFilePath = `${__dirname}/${inputDir}/${pagesFile}`

console.log('reading list of links from')
console.log(pageLinksFilePath)
const pageLinks = d3.csvParse(fs.readFileSync(pageLinksFilePath, 'utf-8'))

pageLinks.slice(140, pageLinks.length).forEach(page => {
  // local mode
  const uri = page.linkedInProfileUri
  open(uri, err => {
    if (err) throw err
  })
})
