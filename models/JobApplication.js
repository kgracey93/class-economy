const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobApplicationSchema = new Schema(
  {
    applicant: {type: Schema.Types.ObjectId, ref: 'User'},
    jobAppChoice1: {
      name1: {type: Schema.Types.ObjectId, ref:'Job'},
      reason1: String,
    },
    jobAppChoice2: {
      name2: {type: Schema.Types.ObjectId, ref:'Job'},
      reason2: String,
    }
  },
  {
    timestamps: true,
  }
);

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);
module.exports = JobApplication;
