import { Router } from "express";
import createCategoriesController from "../controllers/categories/createCategories.controller";
import listAllCategoriesController from "../controllers/categories/listAllCategories.controller";
import returnOneCategoryController from "../controllers/categories/returnOneCategory.controller";
import updateCategoriesController from "../controllers/categories/updateCategories.controller";
import deleteCategoriesController from "../controllers/categories/deleteCategories.controller";


const router = Router()

router.post("", createCategoriesController)
router.get("", listAllCategoriesController)
router.get("/:id", returnOneCategoryController)
router.patch("/:id", updateCategoriesController)
router.delete("/:id", deleteCategoriesController)

export default router