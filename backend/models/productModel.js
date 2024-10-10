const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Product Name"],
    trim: true
  },
  description: {
    type: String,
    require: [true, "Please Enter Product Description"]
  },
  price: {
    type: Number,
    require: [true, "Please Enter Prodcut Price"],
    maxLength: [8, "Price cannot exceed 8 digits"]
  },
  rating: {
    type: Number,
    default: 0
  },
  // image: [
  //   public_id: {
  //     type: String,
  //     require: true
  //   },
  //   url: {
  //     type: String,
  //     require: true
  //   }
  // ],

  category: {
    type: String,
    require: [true, "Please Select Category of Product"]
  },
  Stock: {
    type: Number,
    require: [true, "Please Enter Stock of a Product"],
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
        require: true
      },
      rating: {
        type: Number,
        require: true
      },
      comment: {
        type: String,
        require: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }

})

//module.exports = mongoose.model("Product", productSchema)
const Product = mongoose.model('Product', productSchema);
module.exports = Product;