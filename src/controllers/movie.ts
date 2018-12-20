import * as mongoose from 'mongoose';
import { MovieSchema } from '../models/movie';
import { Request, Response } from 'express';

const Movie = mongoose.model('Movie', MovieSchema);

export class ContactController{

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

    // public getContactWithID (req: Request, res: Response) {           
    //     Contact.findById(req.params.contactId, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public updateContact (req: Request, res: Response) {           
    //     Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public deleteContact (req: Request, res: Response) {           
    //     Contact.remove({ _id: req.params.contactId }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({ message: 'Successfully deleted contact!'});
    //     });
    // }
    
}