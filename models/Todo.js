const mongoose = require("mongoose")


const TodoSchema = new mongoose.Schema({

    task: { task: String, require: false },
    desc: { task: String, require: false },
    complete: { task: String, require: false },

})
module.exports = mongoose.model("Todo", TodoSchema)

