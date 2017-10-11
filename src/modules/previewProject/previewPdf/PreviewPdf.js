import React from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'

const PreviewPdf = ({
  onDocumentLoad,
  numPages,
  pageNumber,
  nextPage,
  previousPage,
}) =>
  <div>
    <Document
      file="http://localhost:4040/api/pdf"
      onLoadSuccess={onDocumentLoad}
    >
      <Page pageNumber={pageNumber} scale={1.0} />
      <Page pageNumber={pageNumber + 1} scale={1.0} />
    </Document>
    <p>
      Page {pageNumber} of {numPages}
    </p>
    <button onClick={previousPage}>Prev</button>
    <button onClick={nextPage}>Net</button>
  </div>
export default PreviewPdf
