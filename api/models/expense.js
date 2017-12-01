const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  budget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget'
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
