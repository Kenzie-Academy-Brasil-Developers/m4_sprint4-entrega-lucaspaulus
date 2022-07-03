import { Router } from "express";
import createProductsController from "../controllers/products/createProducts.controller";


const router = Router()

router.post("", createProductsController)
router.get("")
router.get("/:id")
router.patch("/:id")
router.delete("/:id")
router.get("/category/:category_id")

export default router
