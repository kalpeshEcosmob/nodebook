const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // imageUrl: {
    //     type: String,
    //     required: true
    // },
    price: {
      type: String,
      required: true,
    },
    // productId: {
    //     type: String,
    //     required: true
    // },
    // priceId: {
    //     type: String,
    //     required: true
    // }
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
