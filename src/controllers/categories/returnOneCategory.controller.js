import returnOneCategoryService  from "../../services/categories/returnOneCategory.service";

export default async function returnOneCategoryController(req, res){
    const {id} = req.params

    try {
        const oneCategory = await returnOneCategoryService(id)
        return res.status(200).json(oneCategory)
    } catch (err) {
        return res.status(400).json({message: err.message})
    }
}