import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import axios from "axios";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;



        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("error uploud file")
        } else {

            const { originalname, filename: banner } = req.file;

            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.json(product)
        }





        axios
    }
}

export { CreateProductController }