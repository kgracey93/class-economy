
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionSchema = new Schema(
  {
    payor: {type: Schema.Types.ObjectId, ref: 'User'},
    payee: {type: Schema.Types.ObjectId, ref: 'User'},
    amount: {
      type: Number,
      required: true
    },
    operation: {
      type: String,
      enum: ['withdraw', 'deposit'],
    },
    category: {
      type: String,
      enum: ['rent', 'paycheck', 'fine', 'bonus', 'other']
    },
    description : String,
    status: {
      type: String,
      enum: ['pending', 'complete']
    }
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
