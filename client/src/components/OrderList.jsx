import React, { useEffect, useState } from "react";
import "./OrderList.css";
import OrderItem from "./OrderItem";
import { userReq } from "../reqMethods";
import { useSelector } from "react-redux";

const OrderList = () => {
  const user = useSelector((state) => state.user.pizzaUser.currentUser)
  console.log(user);
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const fetchOrders = async () => {
      const newOrders = await userReq.get(`/order/userorders/${user.email}`)
      const finalOrders = newOrders.data
      setOrders(finalOrders)
    }
    fetchOrders()
  }, [])

  return (
    <div className="orderListContainer">
      <div className="orderWrapper">
        <div className="itemHeading">
          <h1>ORDERS</h1>
        </div>
        <div className="orderScroller">
          {orders.map((item) => <OrderItem item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
