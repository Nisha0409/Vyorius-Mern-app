const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  orderName: {
    type: String,
    required: true
  },
  orderQuantity: {
    type: Number,
    required: true
  },
  orderdate: {
    type: Date,
    default: Date.now()
  },
  orderStatus: {
    type: String,
    required: true
  }
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
  order: [OrderSchema]
});

module.exports = User = mongoose.model("user", userSchema);