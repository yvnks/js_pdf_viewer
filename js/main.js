const URL = "../docs/pdf.pdf";

let pdf_doc = null,
  page_num = 1,
  page_is_rendering = false,
  page_num_is_pending;

const scale = 1.5,
  canvas = document.querySelector("#pdf-render"),
  context = canvas.getContext("2d");

/**
 * render the page.
 */
const renderpage = (num) => {};

/**
 * get the doc
 */
pdfJsLib.getDocument(url).promise.then((pdfDoc_) => {
  pdf_doc = pdfDoc_;

  document.querySelector("#page-count").textContent = pdfDoc_.numpages;
});
