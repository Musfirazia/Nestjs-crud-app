import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';
import { Model } from 'mongoose';
import { User } from './user.model';
// import {JwtService} from '@nestjs/jwt';
import { jwtConstants } from './constants';


const jwt = require('jsonwebtoken');

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
        //  jwtService: JwtService

    }


    async insertUser(name: string, email: string, password: string, lastname: string, role: number) {
    
        const bcrypt = require('bcrypt');
        console.log('password -->',password)
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashed password -->",hashedPassword)
        password = hashedPassword;
        const newProduct = new this.userModel({ name, email, password, lastname, role });

        const result = await newProduct.save();
        return{success:true}
        

    }
    async login(email: string, password: string) {

        const bcrypt = require('bcrypt');
        try {
            const user = await this.userModel.findOne({ email: email })

            if (!user)
                return {
                    loginSuccess: false,
                    message: "Auth failed, email not found"
                }
            else {
                console.log('password -->',password)
                const isPasswordMatching = await bcrypt.compare(
                    password,
                    user.password, 
                );
                console.log(password,user.password)
                
                if (!isPasswordMatching) {
                    throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
                }

                    const userdata = {...user}
                const token =  jwt.sign(userdata,jwtConstants.secret)
                user.token = token;
                console.log(token);
                await user.save();
                user.password = undefined;
                
                return {user:user, success:true};
                
            }

        }
        catch (error) {
            console.log(error)
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
  
    }
    async logout(id:string){
   
       await  this.userModel.findOneAndUpdate({ _id: id }, { token: ""})
          

}
}


   
