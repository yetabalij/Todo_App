const express = require("express");
const { getAllTodo } = require("./../controllers/todo");

const route = express.Router();

route.get("/getalltodo", getAllTodo);

module.exports = route;
