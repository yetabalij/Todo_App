const Todo = require("./../models/todo");

//getalltodos
exports.getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({ todo });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
//getsingletodo
exports.getSingleTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    res.status(200).json({ todo });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
//posttodo
exports.postTodo = async (req, res) => {
  const todo = req.body;
  try {
    await Todo.create(todo);
    res.status(200).json({ todo });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
//updatetodo
exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const todo = req.body;
  try {
    await Todo.findByIdAndUpdate(id, todo, { useFindAndModify: false });
    res.status(200).json("Record updated succcessfully.");
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
//deletetodo
exports.deleteTodo = async(req,res)=>{
    const id = req.params.id
    try{
        await Todo.findByIdAndDelete(id)
        res.status(200).json("Record deleted successfully.")
    }catch(err){
        res.status(400).json({
            message:err
        })
    }
}
