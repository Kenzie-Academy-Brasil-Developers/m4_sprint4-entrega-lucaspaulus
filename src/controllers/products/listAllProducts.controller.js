import listAllProductsService from "../../services/products/listAllProducts.service";


export default async function  listAllProductsController(req, res){
    
    try{
        
        const allProducts = await listAllProductsService()
        return res.status(200).json(allProducts)
      
    }catch(err){
        return res.status(400).json({message: err.message})
    }


}