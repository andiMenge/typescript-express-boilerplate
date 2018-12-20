import * as mongoose from 'mongoose';
import { MovieSchema } from '../models/movie';
import { Request, Response } from 'express';

const Movie = mongoose.model('Movie', MovieSchema);

export class MovieController{

  public createMovie (req: Request, res: Response) {                
    let newMovie = new Movie(req.body);

    newMovie.save((err, movie) => {
      if(err){
          res.send(err);
      }    
      res.json(movie);
    });
  }

  public getMovies (req: Request, res: Response) {           
    Movie.find({}, (err, contact) => {
      if(err){
          res.send(err);
      }
      res.json(contact);
    });
  }
    
}