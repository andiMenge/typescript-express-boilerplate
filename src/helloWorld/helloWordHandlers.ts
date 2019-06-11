import { Router } from 'express'
import { helloWorld } from './helloWorld'

const routes = Router()

routes.get('/helloWorld', (req, res) => {
  const greeting: string = helloWorld()
  res.send({ msg: greeting })
})

export default routes
