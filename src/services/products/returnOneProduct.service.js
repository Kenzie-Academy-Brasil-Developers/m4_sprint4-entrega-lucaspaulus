import database from "../../database";

export default async function  returnOneProductService(id){
    try{
        const res = await database.query(
            "SELECT * FROM products WHERE id = $1",
            [id]
        )
        
        if(!res.rowCount){
            throw new Error("Product does not exist")
        }
        
        return res.rows[0]
        
        
    }catch(err){
        throw new Error(err)
    }


}
 
