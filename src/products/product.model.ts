

import * as mongoose from 'mongoose';
export const ProductSchema =new mongoose.Schema({
    title:{type:String, required: true},
  
});
export interface Product extends mongoose.Document{
    _id:string,
     title:string   
}
