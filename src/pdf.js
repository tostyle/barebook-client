import axios from 'axios'
import pdfjsLib from 'pdfjs-dist'
// require('pdfjs-dist')
// var fs = require('fs');
// var data = new Uint8Array(fs.readFileSync('helloworld.pdf'));
// PDFJS.getDocument(data).then(function (pdfDocument) {
//   console.log('Number of pages: ' + pdfDocument.numPages);
// });

// atob() is used to convert base64 encoded PDF to binary-like data.
// (See also https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/
// Base64_encoding_and_decoding.)
const { PDFJS } = pdfjsLib
var pdfData0 = atob(
  'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G'
)

PDFJS.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js'
function conver(str) {
  var length = str.length
  var bytes = new Uint8Array(length)
  for (var n = 0; n < length; ++n) bytes[n] = str.charCodeAt(n) & 0xff
  return bytes
}

const url = 'http://localhost:4040/The-Metamorphosis.pdf'
axios
  .post('/api/pdf', {
    responseType: 'arraybuffer',
  })
  .then(res => {
    // console.log(JSON.stringify(res, null, 2))
    // var pdfData = atob(res.data)
    let data = new Blob([res.data], { type: 'application/pdf' })
    const url = URL.createObjectURL(data)
    // console.log(data)
    // var data = new Uint8Array(res.data)
    const bufferData = new Buffer(res.data, 'binary').toString('base64')
    const atobData = atob(bufferData)
    console.log(pdfData0)
    console.log('=========')
    console.log(atobData)
    const pdfUrl = 'http://localhost:4040/api/pdf'
    // console.log(bufferData)
    var loadingTask = PDFJS.getDocument(pdfUrl)
    // var loadingTask = PDFJS.getDocument(data);
    loadingTask.promise.then(
      function(pdf) {
        console.log('PDF loaded')

        // Fetch the first page
        var pageNumber = 1
        pdf.getPage(pageNumber).then(function(page) {
          console.log('Page loaded')

          var scale = 1.5
          var viewport = page.getViewport(scale)

          // Prepare canvas using PDF page dimensions
          var canvas = document.getElementById('the-canvas')
          var context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport,
          }
          var renderTask = page.render(renderContext)
          renderTask.then(function() {
            console.log('Page rendered')
          })
        })
      },
      function(reason) {
        // PDF loading error
        console.error(reason)
      }
    )
    // console.log(res)
  })
// Disable workers to avoid yet another cross-origin issue (workers need
// the URL of the script to be loaded, and dynamically loading a cross-origin
// script does not work).
// PDFJS.disableWorker = true;

// The workerSrc property shall be specified.

// Using DocumentInitParameters object to load binary data.
