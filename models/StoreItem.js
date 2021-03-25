const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const storeItemSchema = new Schema(
  {
    name: String,
    price: Number,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    img: String,
  },
  {
    timestamps: true,
  }
);

const StoreItem = mongoose.model('StoreItem', storeItemSchema);
module.exports = StoreItem;
