import { Router } from 'express'
import { helloWorld } from './helloWorld'

const router = Router()

// path is /helloWorld/hello
router.get('/hello', (req, res) => {
  const greeting: string = helloWorld()
  res.send({ msg: greeting })
})

module.exports = router
