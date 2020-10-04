import * as mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);
export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})
// UserSchema.pre('save', function( next ) {
//     var user = this;
//     const bcrypt = require('bcrypt');
//     const saltRounds = 10;
//     if(user.isModified('password')){    

//         bcrypt.genSalt(saltRounds, function(err, salt){
//             if(err) return next(err);
    
//             bcrypt.hash(UserSchema.password, salt, function(err, hash){
//                 if(err) return next(err);
//                 this.password = hash 
//                 next()
//             })
//         })
//     } else {
//         next()
//     }
// });

// bcrypt.compare(plainPassword, this.password, function(err, isMatch){

//     if (err) return cb(err);
//     cb(null, isMatch)
// })

export interface User extends mongoose.Document{
    _id:string,
    name:string,
     email:string,
     password:string,
     lastname:string,
     role:number,
     token:string,
     tokenExp:number,

    
}


