import express from "express";
import { getListTodo } from "../controllers/ItemsController";

const router = express.Router();

router.get('/list-todo', getListTodo)

export default router;