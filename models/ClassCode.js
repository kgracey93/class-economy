const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const classCodes = new Schema(
  {
    name: String,
    salary: Number,
    employer: {type: Schema.Types.ObjectId, ref: 'User'},
    employee: {type: Schema.Types.ObjectId, ref: 'User'},
    img: String,
  },
  {
    timestamps: true,
  }
);

const ClassCode = mongoose.model('ClassCode', classCode);
module.exports = ClassCode;
