import database from "../../database"


export default async function  listAllCategoriesService(){
    
    try{
        const res = await database.query(
            "SELECT * FROM categories"
             
        )
 
        return res.rows

    }catch(err){
        throw new Error(err)
    }


}