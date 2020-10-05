import { Body, Controller, Get, Param, Post, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";
@Controller('todos')

export class ProductsController {
    constructor(private readonly productsService: ProductsService) {

    }
    @Post()
    async addProduct(@Body('title') prodTitle: string)
      {
        const generatedId = await this.productsService.insertProduct(prodTitle);
        return { id: generatedId };
    }
    @Get()
    async getAllProducts() {
       const product= await this.productsService.getProducts();
       return product;
    }
    @Get(':id')
    async getProduct(@Param('id') prodId: string) {
         const products=await this.productsService.getSingleProduct(prodId);
         return products;
    }
    @Patch(':id')
    async updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string)
     {
        await this.productsService.updateProduct(prodId, prodTitle);
        return null;
    }
    @Delete(':id')
   async removeProduct(@Param('id') prodId: string) {
       await this.productsService.deleteProduct(prodId);
        return true;
    }

}
