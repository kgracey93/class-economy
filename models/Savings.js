const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const savingsSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    goal: Number,
    frequency: {
      type: String,
      enum: ['one time', 'weekly', 'monthly', 'other']
    },
    duration: String

  },
  {
    timestamps: true,
  }
);

const StoreItem = mongoose.model('StoreItem', storeItemSchema);
module.exports = StoreItem;
