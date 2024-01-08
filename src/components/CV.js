import React from "react";
import { Document, Page } from "react-pdf";
const CV = () => {
  const pdfURL = "src/Resume.pdf";
  return (
    <div>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
export default CV;
