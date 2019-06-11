import express from 'express'
import * as bodyParser from 'body-parser'
import morgan from 'morgan'
import router from './router'

export const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use('/', router)
// Error handler goes last
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({ error: err.message })
})
