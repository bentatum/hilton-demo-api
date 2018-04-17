require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { Reservation } from './models'

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_DB_PATH)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

/* Initialize Express and apply middleware */
const app = express()
  /* Support JSON-encoded bodies */
  .use(bodyParser.json())
  /* Support Url-encoded bodies */
  .use(bodyParser.urlencoded({ extended: true }))

/* Establish routes */
app.get('/reservation/:id', async (req, res) => {
  try {
    const data = await Reservation.findById(req.params.id)
    res.json(data)
  } catch (err) {
    res.json(err)
  }
})

app.post('/reservation', async (req, res) => {
  try {
    const data = await Reservation.create(req.body)
    res.json(data)
  } catch (err) {
    res.json(err)
  }
})

app.get('/reservations', async (req, res) => {
  try {
    const data = await Reservation.find(req.query)
    res.json(data)
  } catch (err) {
    res.json(err)
  }
})

/* Start */
app.listen(process.env.PORT, () =>
  console.log(`Listening to port ${process.env.PORT}`)
)
