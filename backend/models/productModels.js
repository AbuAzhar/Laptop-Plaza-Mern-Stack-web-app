const mongooose = require("mongoose");

const productSchema = new mongooose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Discription"],
  },
  price: {
    type: Number,
    require: [true, "Please Enter Product Price"],
    maxLength: [8, "Price can not exceed 8 character"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "Please Enter Product category"],
  },

  stock: {
    type: String,
    require: [true, "Please Enter Product stock"],
    default: 1,
    maxLength: [4, "Stock can not exceed 4 characters"],
  },

  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongooose.model("Products", productSchema);
