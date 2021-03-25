const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobSchema = new Schema(
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

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
