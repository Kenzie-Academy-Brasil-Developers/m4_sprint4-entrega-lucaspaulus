import listAllCategoriesService from "../../services/categories/listAllCategories.service"

export default async function  listAllCategoriesController(req, res){
    
    try{
        
        const allCategories = await listAllCategoriesService()
        return res.status(200).json(allCategories)
      
    }catch(err){
        return res.status(400).json({message: err.message})
    }


}