import express from 'express'
import routes  from './helloWorld/helloWordHandlers'

const router = express.Router()

router.get('/health', function(req, res) {
  res.sendStatus(200)
})

router.use(routes)

export default router
