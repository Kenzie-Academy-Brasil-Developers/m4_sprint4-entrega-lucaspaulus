import database from "../../database";

export default async function deleteProductsService(id){
    try{
        const res = await database.query("DELETE FROM products WHERE id = $1 RETURNING *",
        [id]
        )

        if(!res.rowCount){
            throw new Error("Product does not exist")
        }
    }catch(err){
        throw new Error(err)
    }



} 