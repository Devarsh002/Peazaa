const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    orderItems: [
      {
        pizzaName: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
        price: { type: Number, required: true },
        customItems : {
          base: { type: String, required:true},
          veggies:{ type: String},
          cheese:{ type: String, required:true},
          sauce:{ type: String, required:true}
        }
      }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "Completed" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
