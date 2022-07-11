import database from "../../database"

export default async function updateProductsService(id, data){
    try{
        const findProduct = await database.query(
            "SELECT * FROM products WHERE id = $1",
            [id]
        )

        if(!findProduct.rowCount){
            throw new Error("products does not exist")
        }

        let query = "UPDATE products SET "
        const keys = Object.keys(data)
        const values = Object.values(data)

        keys.forEach((key, index)=>{
            query += `${key} = \$${index+=1}, `
        })

        query = query.slice(0,-2)
        query += ` WHERE id = \$${keys.length+=1} RETURNING *;`
        console.log(query)
    
        const res = await database.query(query,
            [...values, id])
        
        return {
            message: "Product updated",
            product: res.rows[0]
        }

    }catch (err){
        throw new Error(err)
    }



}