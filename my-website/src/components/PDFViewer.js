function PDFViewer({ url }) {
  return (
    <div>
      <object data={url} type="application/pdf" width="100%" height="900px">
        <p>
          Your web browser doesn't have a PDF plugin. Instead you can{" "}
          <a href={url}>click here to download the PDF file.</a>
        </p>
      </object>
    </div>
  );
}

export default PDFViewer;
