import deleteCategoriesService from "../../services/categories/deleteCategories.service";

export default async function deleteCategoriesController(req, res){
    const {id} = req.params

    try{
        await deleteCategoriesService(id)
        return res.status(204).send()
    }catch(err){
        return res.status(400).json({message: err.message})
    }
     
}