import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://bloximages.chicago2.vip.townnews.com/journaltimes.com/content/tncms/assets/v3/classifieds/5/4d/54d97033-a0bc-5c34-b950-f7ca5d0bc0a3/5f36ee2015fd5.preview.jpg?resize=1200%2C364"
          alt=""
        />
        <h2 className="checkout_title">Your shopping basket</h2>
        {basket.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
