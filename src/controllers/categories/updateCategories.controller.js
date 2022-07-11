import updateCategoriesService from "../../services/categories/updateCategories.service";

export default async function updateCategoriesController(req,res){
    const {id} = req.params
    const data = req.body

    try {
        const categoryUpdated = await updateCategoriesService(id, data)
        return res.status(200).json(categoryUpdated)

    } catch (err) {
        return res.status(400).json({message: err.message})
    }
}