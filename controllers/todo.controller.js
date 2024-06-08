
exports.getAllTodos = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo fetch success", result })
}

exports.addTodo = async (req, res) => {
    create = await Todo.find()
    res.json({ message: "todo fetch success" })
}

exports.updateTodo = async (req, res) => {
    await findByIdAndUpdate(req.param.id, req.body)
    res.json({ message: "todo update success" })
}
exports.deleteTodo = async (req, res) => {
    await findByIdAndDelete(req.param.id)
    res.json({ message: "todo update success" })
}
