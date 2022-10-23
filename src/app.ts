import express from 'express'
import fileUpload from 'express-fileupload'
import pdfParse from 'pdf-parse'

const app = express();
app.use('/', express.static("public"))
app.use(fileUpload())

app.post('/read-content', async (req, res) => {
  if (!req.files) {
    res.send('No archivo')
    return 
  }
  const file: any = req.files['pdfFile']

//   pdfParse(file).then( (result: any) => {
//     // console.log(result.numpages)
//     // console.log(result.Title)
//     // console.log(result.info.Creator)
//     // console.log(result.text)
//     res.send(result.text);
// });
  res.send('pdfjs')
});

export default app