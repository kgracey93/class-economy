const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobSchema = new Schema(
  {
    title: String,
    salary: String,
    employer: {type: Schema.Types.ObjectId, ref: 'User'},
    employee: {type: Schema.Types.ObjectId, ref: 'User'},
    img: String,
    description: String, 
    qualifications: String, 
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    suggestedNumberPerClass: String,
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
