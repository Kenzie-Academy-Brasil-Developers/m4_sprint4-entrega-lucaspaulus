import database from "../../database";

export default async function deleteCategoriesService(id){
    try{
        const res = await database.query("DELETE FROM categories WHERE id = $1 RETURNING *",
        [id]
        )

        if(!res.rowCount){
            throw new Error("Category does not exist")
        }

    }catch(err){
        throw new Error(err)
    }



} 