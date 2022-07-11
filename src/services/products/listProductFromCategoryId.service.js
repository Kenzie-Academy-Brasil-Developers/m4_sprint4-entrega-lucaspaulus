import database from "../../database";

export default async function listProductFromCategoryIdService(id){
    try {
        const res = await database.query(
            `SELECT 
                prod.name, 
                prod.price, 
                cat.name category 
            FROM 
                products prod 
            JOIN categories cat ON prod.category_id = cat.id 
            WHERE cat.id = $1
            `,
            [id]
        )

        return res.rows
        
    } catch (err) {
        throw new Error(err)
    }
}