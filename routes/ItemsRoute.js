import express from "express";
import { getListTodo, 
    getListTodoByID, 
    createTodoList,
    updateTodoList,
    deleteTodoList
} from "../controllers/ItemsController.js";

const router = express.Router();

router.get('/', getListTodo);
router.get('/list-todo', getListTodo);
router.get('/list-todo/:id', getListTodoByID);
router.post('/list-todo', createTodoList);
router.patch('/list-todo/:id', updateTodoList);
router.delete('/list-todo/:id', deleteTodoList);

// router.get('/list-todo/:id', getListTodoByID)

export default router;