import database from "../../database";

export default async function returnOneCategoryService(id){
    try {
        const res = await database.query(
            "SELECT * FROM categories WHERE id = $1",
            [id]
        )
        if(!res.rowCount){
            throw new Error("Category does not exists")
        }

        return res.rows[0]

    } 
    
    catch (err) {
        throw new Error(err)
    }

}