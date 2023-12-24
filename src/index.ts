import express from 'express'
import diaryRoter from './routes/diaries'

const app = express()
app.use(express.json()) // Middleware para parsear la req.body a un Json
const PORT = 3001

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api/diaries', diaryRoter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
