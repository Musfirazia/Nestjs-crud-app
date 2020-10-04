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
        const hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;
        const newProduct = new this.userModel({ name, email, password, lastname, role });

        const result = await newProduct.save();
        return result.id as string;

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

                const isPasswordMatching = await bcrypt.compare(
                    
                    password,
                    user.password,
        
                );
                console.log(password,user.password)

                if (!isPasswordMatching) {
                    throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
                }
    //             const payload = { email:email, sub:password };
    //  const access_token= this.jwtService.sign(payload);

                const token =  jwt.sign(user._id.toLocaleLowerCase(),jwtConstants)
                user.token = token;
                await user.save();
                user.password = undefined;
                return { loginSuccess:true,message:"Successfully login"};
                
            }

        }
        catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
  
    }

}


   
