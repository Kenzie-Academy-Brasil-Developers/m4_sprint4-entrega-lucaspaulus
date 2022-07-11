import database from "../../database"

export default async function  createCategoriesService(data){
    try{
        const res = await database.query(
            "INSERT INTO categories(name) VALUES($1) RETURNING *",
            [data.name]
        )

        const veryNameCategoryAlreadyExists = res.rows.find((field)=> field.name === data.name)
        
        if(veryNameCategoryAlreadyExists === undefined){
            throw new Error("Category Exists")
        }
        
        return {
            message: "The product has been created",
            category: res.rows[0]
        }
        
        
    }catch(err){
        throw new Error(err)
    }

}
 
