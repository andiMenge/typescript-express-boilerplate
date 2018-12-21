import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
  original_name: {
    type: String,
  },
  imdb_id: {
    type: String,
    required: ''
  },
  release_date: {
    type: String            
  },
  is_highlight: {
    type: Boolean           
  },
  image_url: {
    type: String           
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});