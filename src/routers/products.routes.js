import { Router } from "express";
import createProductsController from "../controllers/products/createProducts.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";
import returnOneProductController from "../controllers/products/returnOneProduct.controller";
import listProductFromCategoryIdController from "../controllers/products/listProductFromCategoryId.controller";
import updateProductsController from "../controllers/products/updateProducts.controller";
import deleteProductsController  from "../controllers/products/deleteProducts.controller";




const router = Router()

router.post("/", createProductsController)
router.get("/", listAllProductsController)
router.get("/:id", returnOneProductController)
router.patch("/:id", updateProductsController)
router.delete("/:id", deleteProductsController)
router.get("/category/:category_id", listProductFromCategoryIdController)

export default router
