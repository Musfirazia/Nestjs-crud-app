import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';
@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {

    }
    products: Product[] = [];
    async insertProduct(title: string) {
        const newProduct = new this.productModel({ title});
        
        const result = await newProduct.save();
        return result.id as string;

    }
    async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map((product) => ({ id: product.id, title: product.title }))

    }
    async getSingleProduct(productId: string) {

        const product = await this.findProduct(productId);
        return { id: product.id, title: product.title };
    }
    async updateProduct( prodId: string,title: string) {

        const updatedProduct = await this.findProduct(prodId);
        if (title) {
            updatedProduct.title = title;

        }
        await updatedProduct.save();
       
        return updatedProduct;
    }



    private async findProduct(id: string): Promise<Product> {
        // const productIndex = this.products.findIndex((prod) => prod.id === id);
        // const product = this.products[productIndex];
        let product;
        try {
            product = await this.productModel.findById(id);
        }
        catch (error) {
            throw new NotFoundException("could n't find any product");

        }
        if (!product) {
            throw new NotFoundException("could n't find any product");

        }
        return product;
    }


    async deleteProduct(prodId: string) {
        const result = await this.productModel.deleteOne({ _id: prodId }).exec();
        if (result.n === 0) {
            throw new NotFoundException("Couldn't find the product");
        }
    }
}