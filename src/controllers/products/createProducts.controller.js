import createProductsService from "../../services/products/createProducts.service"

export default async function  createProductsController(req, res){
    const body = req.body

    try{
        const createProduct = await createProductsService(body)
        return res.status(201).json(createProduct)
        
    }catch(err){
        return res.status(400).json({message: err.message})
    }


}
 