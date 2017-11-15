import React from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'

const PreviewPdf = ({
  onDocumentLoad,
  numPages,
  pageNumber,
  nextPage,
  previousPage,
  checkedPage,
  onChangeColorPage,
  colorPages,
  bookPath,
}) => {
  return (
    <div>
      <Document file={bookPath} onLoadSuccess={onDocumentLoad}>
        <Page pageNumber={pageNumber} scale={1.0} />
        <Page pageNumber={pageNumber + 1} scale={1.0} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={previousPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
      <input
        type="checkbox"
        onChange={onChangeColorPage}
        checked={colorPages.includes(pageNumber)}
      />
      {!!colorPages.includes(pageNumber)}
    </div>
  )
}
export default PreviewPdf
