const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rentalAgreement = new Schema(
  {
    renter: {type: Schema.Types.ObjectId, ref: 'User'},
    landlord: {type: Schema.Types.ObjectId, ref: 'User'},
    rentAmount: Number,
    teacher: {type: Schema.Types.ObjectId, ref: 'User'},
    classCode: {type: Schema.Types.ObjectId, ref: 'ClassCode'},
    description: String
  },
  {
    timestamps: true,
  }
);

const RentalAgreement = mongoose.model('RentalAgreement', rentalAgreementSchema);
module.exports = RentalAgreement;
