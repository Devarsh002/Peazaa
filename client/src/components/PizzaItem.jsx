import React from 'react'
import './PizzaItem.css'

const PizzaItem = ({ orderItem }) => {
  return (
    <div className="pizzaItemContainer">
      <h4>{orderItem.pizzaName}</h4>
      <h4> QTY : {orderItem.quantity}</h4>
      <h4>₹{orderItem.price}</h4>
    </div>
  )
}

export default PizzaItem