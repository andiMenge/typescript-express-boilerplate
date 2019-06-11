import { Router } from 'express'
import { helloWorld } from './helloWorld'

const router = Router()

router.get('/', (req, res) => {
  const greeting: string = helloWorld()
  res.send({ msg: greeting })
})

module.exports = router
