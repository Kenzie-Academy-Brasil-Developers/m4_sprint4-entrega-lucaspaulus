import database from "../../database"

export default async function  createProductsService(data){
    try{
        const res = await database.query(
            "INSERT INTO products(name, price, category_id) VALUES($1, $2, $3) RETURNING *",
            [data.name, data.price, data.category_id]
        )

        return {
            message: "The product has been created",
            product: res.rows[0]
        }
        
    }catch(err){
        throw new Error(err)
    }

}
 