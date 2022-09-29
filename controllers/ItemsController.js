import { response } from "express";
import ListTodo from "../models/ItemsModel.js";

export const getListTodo = async(req, res) => {
    try {
        const response = await ListTodo.findAll();
        res.status(200).json(response);
        console.log("succes akses ke tabel")
    } catch (error) {
        console.log(error.message);
    }
}

export const getListTodoByID = async(req, res) => {
    try {
        const response = await ListTodo.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response)
        console.log("succes dapatkan id")
    } catch (error) {
        console.log(error.message)
    }
}

export const createTodoList = async(req, res) => {
    try {
        await ListTodo.create(req.body);
        res.status(201).json({message:"menambahkan Item"});
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTodoList = async(req, res) => {
    try {
        await ListTodo.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({message:" Item updated"});
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteTodoList = async(req, res) => {
    try {
        await ListTodo.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({message:" Item deleted"});
    } catch (error) {
        console.log(error.message)
    }
}

