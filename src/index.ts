import app from './app'

const PORT = 3000

app.listen (PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
  })
  
// import express from 'express';
// const app = express()
// app.get('/', (req, res) => {
//   res.send('Hola')
// })
// app.listen (PORT, () => {
//     console.log(`Servidor iniciado en puerto ${PORT}`)
//   })