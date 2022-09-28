import ListTodo from "../models/ItemsModel";

export const getListTodo = async(req, res) => {
    mesa
    try {
        const res = await ListTodo.findAll();
        res.status(200).json(res)
        console.log("succes akses ke tabel")
    } catch (error) {
        console.log(error.message)
    }
}