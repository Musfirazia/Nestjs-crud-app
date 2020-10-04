import { Body, Controller, Get, Param, Post, Patch, Delete } from "@nestjs/common";

import { UserService } from "./user.service";
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }
    @Post('signup')
    async addUser(@Body('name') userName: string,
        @Body('email') userEmail: string,
        @Body('password') password: string,
        @Body('lastname') lastname: string,
        @Body('role') role: number) {
        const generatedId = await this.userService.insertUser(userName,userEmail,password,lastname,role);
        return { id: generatedId };
    }
    @Post('login')
    async login(@Body('email') userEmail:string,@Body('password') password:string)
    {
        const status=await this.userService.login(userEmail,password)
        return{status:status.loginSuccess}
    }

}