const router = require("express").Router()

const TodoRoutes = require("../controllers/todo.controller")

router
    .get("/", TodoRoutes.getAllTodos)
    .add("/", TodoRoutes.addTodo)
    .put("/", TodoRoutes.updateTodo)
    .delete("/", TodoRoutes.deleteTodo)

module.exports.router