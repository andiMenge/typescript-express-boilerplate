import {Request, Response, NextFunction} from "express";
import { ContactController } from "../controllers/movie";

export class Routes { 
  public contactController: ContactController = new ContactController() 
  
  public routes(app): void {   
  
    // Middlewares
    const logger = (req: Request, res: Response, next: NextFunction) => {
      console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
      next()
    }

    const authentication = (req: Request, res: Response, next: NextFunction) => {
      if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
        res.status(401).send('You shall not pass!')
      } else {
        next()
      }
    }

    // Routes
    app.route('/')
    .all(logger)
    .get((req: Request, res: Response) => {            
      res.status(200).send({
        message: '200 OK'
      })
    })

    app.route('/movies')
    .all(logger)
    .get(this.contactController.getMovies)
    .post(this.contactController.createMovie);
  }
}