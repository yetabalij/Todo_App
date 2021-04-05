const express = require("express");
const {
  getAllTodo,
  postTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("./../controllers/todo");

const route = express.Router();

route.get("/getalltodo", getAllTodo);
route.post("/posttodo", postTodo);
route.get("/getsingletodo/:id", getSingleTodo);
route.put("/updatetodo/:id", updateTodo);
route.delete("/deletetodo/:id", deleteTodo);

module.exports = route;
