import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const AllPages = props => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = (numPages) => {
    setNumPages(numPages);
  }

  let urll=props.items.chapterLink;

  return (
    <Document
      file={urll}
      options={{ workerSrc: `${process.env.REACT_APP_ASSET_URL}` }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}

export default AllPages;