const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
      // add data validators
      type: String,
      required:[true, 'must provide name'],
      trim: true, 
      maxlength:[100, 'name cannot be more than 100 characters']
  },
  completed: {
      // add validators
      type:Boolean,
      default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema);
