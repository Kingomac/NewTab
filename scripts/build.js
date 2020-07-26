import {exec} from 'child_process'
import fs from 'fs/promises'
import {minifyCss} from '../modules/uglifycss'

console.log("******** Building ********")

exec("npx webpack -p", (err) => {
  if(err) console.log('Error building the Webpack bundle', err)
  else {
    console.log(" + Webpack bundle --> OK")
    fs.copyFile('./public/bundle.js', './dist/bundle.js').catch(e => {
      console.log('Error copying the Webpack bundle', e)
    }).then(() => console.log(" + Webpack bundle copied to dist -> OK"))
  }
})

const htmlminifier = require('html-minifier')
const uglifycss = require('uglifycss')

fs.readFile("./public/index.html").then((htmlfile) => {
  const html = htmlminifier.minify(htmlfile.toString('utf-8'), {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    html5: true,
    ignoreCustomComments: false,
    keepClosingSlash: true,
    preserveLineBreaks: false,
    removeComments: true,
    removeAttributeQuotes: true,
    removeTagWhitespace: true,
    sortAttributes: true
  });
  fs.writeFile('./dist/index.html', html).then(() => console.log(' + HTML template --> OK'));
})
fs.readFile("./public/styles.css").then((cssfile) => {
  const css =  minifyCss(cssfile.toString('utf-8'))
  fs.writeFile('./dist/styles.css', css).then(() => console.log(" + CSS file --> OK"));
});