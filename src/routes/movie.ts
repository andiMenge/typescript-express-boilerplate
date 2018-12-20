import {Request, Response, NextFunction} from "express";
import { ContactController } from "../controllers/movie";

export class Routes { 
    
    public contactController: ContactController = new ContactController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Movie 
        app.route('/movies')
        .get((req: Request, res: Response, next: NextFunction) => {
          // middleware
          console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
          // if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
          //   res.status(401).send('You shall not pass!');
          // } else {
          //   next();
          // }
          next();
        }, this.contactController.getMovies)        

        // POST endpoint
        .post(this.contactController.createMovie);

        // // Contact detail
        // app.route('/contact/:contactId')
        // // get specific contact
        // .get(this.contactController.getContactWithID)
        // .put(this.contactController.updateContact)
        // .delete(this.contactController.deleteContact)
    }
}