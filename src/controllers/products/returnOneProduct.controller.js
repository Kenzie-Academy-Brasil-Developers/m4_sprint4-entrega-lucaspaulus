import returnOneProductService from "../../services/products/returnOneProduct.service"

export default async function  returnOneProductController(req, res){
    const {id} = req.params

    try{
        const oneProduct = await returnOneProductService(id)
        return res.status(200).json(oneProduct)
        
        
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}