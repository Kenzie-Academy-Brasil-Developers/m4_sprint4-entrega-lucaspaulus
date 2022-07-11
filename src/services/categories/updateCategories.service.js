import database from "../../database";

export default async function updateCategoriesService(id, data){
    try {
        const res = await database.query(
            "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
            [data.name, id]
        )

        if(!res.rowCount){
            throw new Error("Category does not exist")
        }

        return {
            message: "Category updated",
            category: res.rows[0]
        }
    } catch (err) {
        throw new Error(err)
    }
}