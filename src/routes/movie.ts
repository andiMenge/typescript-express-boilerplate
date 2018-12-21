import {Request, Response, NextFunction} from "express";
import { MovieController } from "../controllers/movie";

export class Routes { 
  public MovieController: MovieController = new MovieController() 

  public routes(app): void {   
  
    // Middlewares
    const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
      console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
      next()
    }

    const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
      if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
        res.status(401).send('You shall not pass!')
      } else {
        next()
      }
    }

    // Routes
    app.route('/')
    .all(loggerMiddleware)
    .get((req: Request, res: Response) => {            
      res.status(200).send({
        message: '200 OK'
      })
    })

    app.route('/movies')
    .all(loggerMiddleware)
    .get(this.MovieController.getMovies)
    .post((req, res) => this.MovieController.createMovie(req, res));
  }
}