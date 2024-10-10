const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"]
  },
  price: {
    type: Number,
    required: [true, "Please Enter Prodcut Price"],
    maxLength: [8, "Price cannot exceed 8 digits"]
  },
  rating: {
    type: Number,
    default: 0
  },
  // image: [
  //   public_id: {
  //     type: String,
  //     required: true
  //   },
  //   url: {
  //     type: String,
  //     required: true
  //   }
  // ],

  category: {
    type: String,
    required: [true, "Please Select Category of Product"]
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter Stock of a Product"],
    maxLength: [4, "Stock cannot exceed 4 digit"],
    default: 1
  },
  numofRev: {
    type: Number,
    default: 0
  },
  review: [
    {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Product", productSchema)