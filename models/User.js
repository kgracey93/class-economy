const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    profileImage: String,
    role: {
      type: String,
      enum: ['student', 'teacher', 'parent', 'school-leader'],
    },
    classCodes: [{ type: Schema.Types.ObjectId, ref: 'ClassCode' }],
    landlord: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    toDos: [{ type: Schema.Types.ObjectId, ref: 'ToDo' }],
    transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
    savings: [{ type: Schema.Types.ObjectId, ref: 'Savings' }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
