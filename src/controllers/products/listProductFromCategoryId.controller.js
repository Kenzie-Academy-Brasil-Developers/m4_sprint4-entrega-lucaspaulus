import listProductFromCategoryIdService from "../../services/products/listProductFromCategoryId.service";

export default async function listProductFromCategoryIdController(req, res){
    const {category_id:id} = req.params

    try {
        const product = await listProductFromCategoryIdService(id)
        return res.status(200).json(product)
    } catch (err) {
        return res.status(400).json({message: err.message})
    }
}