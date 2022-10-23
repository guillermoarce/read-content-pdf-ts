import * as pdfjs from 'pdfjs-dist'

const readContent = async () => {
  const doc: any = await pdfjs.getDocument("sample.pdf").promise
  const page = await doc.getPage(1)
  const content = await page.getTextContent()
  console.log('FIN')
}

readContent()