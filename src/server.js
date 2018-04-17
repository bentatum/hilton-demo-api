require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { Reservation } from './models'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

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

app.use(
  '/graphql',
  graphqlExpress(req => ({
    schema: require('./graphql').default
  }))
)

app.get(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/api/v1/graphql' })
)

/* Start */
app.listen(process.env.PORT, () =>
  console.log(`Listening to port ${process.env.PORT}`)
)
