import createCategoriesService from "../../services/categories/createCategories.service"

export default async function  createCategoriesController(req, res){
    const data = req.body
    try{
        const createCategory = await createCategoriesService(data)
        return res.status(201).json(createCategory)
        
    }catch(err){
        return res.status(400).json({message: err.message})
    }


}

