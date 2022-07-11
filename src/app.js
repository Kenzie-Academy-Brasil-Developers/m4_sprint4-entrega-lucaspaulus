import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";

import productsRoutes from "./routers/products.routes"
import categoriesRoutes from "./routers/categories.routes"

const app = express();

app.use(express.json());

app.use("/products", productsRoutes)
app.use("/categories", categoriesRoutes)

const port = process.env.NODE_ENV === "test" ? 8181 : 8080
export default app.listen(port, () => {
    startDatabase()
    console.log(`Server running on ${port}`);
});
