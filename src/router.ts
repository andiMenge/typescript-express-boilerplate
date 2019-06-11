import express from 'express'
const helloWorld = require('./helloWorld/helloWordHandlers') // this registers a routes from the helloWorld Component

const router = express.Router()

// this is a global route
router.get('/health', function(req, res) {
  res.sendStatus(200)
})

router.use('/helloWorld', helloWorld) // use routes from hello world component

export default router
