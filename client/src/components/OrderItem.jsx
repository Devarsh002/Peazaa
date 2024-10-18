import React from "react";
import "./OrderItem.css";
import PizzaItem from "./PizzaItem";

const OrderItem = ({ item }) => {
  console.log(item);
  return (
    <div className="orderItemContainer">
      <div className="IDhead">
        <h2>Order ID: {item._id}</h2>
      </div>
      <div className="orderItemss">
        {item.orderItems.map((orderItem) => <PizzaItem orderItem={orderItem} />)}
      </div>
      <div className="orderTotal">
        <h2>{item.status}</h2>
        <h2>₹{item.totalPrice}</h2>
      </div>
    </div>
  );
};

export default OrderItem;
