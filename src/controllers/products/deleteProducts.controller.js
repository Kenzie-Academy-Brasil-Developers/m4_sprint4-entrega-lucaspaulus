import deleteProductsService from "../../services/products/deleteProducts.service";

export default async function deleteProductsController(req, res){
    const {id} = req.params

    try{
        await deleteProductsService(id)
        return res.status(204).send()
    }catch(err){
        return res.status(400).json({message: err.message})
    }
     
}