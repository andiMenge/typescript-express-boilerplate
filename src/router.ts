import express from 'express'
const helloWorld = require('./helloWorld/helloWordHandlers')

const router = express.Router()

router.get('/health', function(req, res) {
  res.sendStatus(200)
})

router.use('/helloWorld', helloWorld)

export default router
