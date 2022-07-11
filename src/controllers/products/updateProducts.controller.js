import updateProductsService from "../../services/products/updateProducts.service";

export default async function updateProductsController(req, res){
    const {id} = req.params
    const data = req.body

    try {
        const productUpdated = await updateProductsService(id, data)
        return res.status(200).json(productUpdated)

    } catch (err) {
        return res.status(400).json({message: err.message})
    }

}