import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";

import productsRoutes from "./routers/products.routes"
import categoriesRoutes from "./routers/categories.routes"

const app = express();

app.use(express.json());

app.use("/products", productsRoutes)
app.use("/categories", categoriesRoutes)

export default app.listen(8080, () => {
    startDatabase()
    console.log("Server running on 8080");
});
