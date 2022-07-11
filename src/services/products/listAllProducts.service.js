import database from "../../database"

export default async function  listAllProductsService(){
    try{
        const res = await database.query(
            "SELECT * FROM products"
        )
        return res.rows   
      
        
    }catch(err){
        throw new Error(err)
    }


}
 