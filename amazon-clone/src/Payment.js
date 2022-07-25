import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [ClientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        // stripe requires currencies sub-units
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      // axios to make a post or get req

      setClientSecret(response.data.ClientSecret);
    };
    getClientSecret();
  }, [basket]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(ClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate("/orders");
      });
  };
  const HandleChange = async (e) => {
    const { value } = e.target;
    setDisabled(!value);
    setError(value ? "" : "Please Enter Correct Value");
  };

  return (
    <div className="payment">
      <div className='"payment_container'>
        <h1 className="payment_heading">
          Checkout (<a href="/checkout">{basket?.length} items</a>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3> Delivery Address</h3>
          </div>
          <div className="delivery_address">
            <p>{user?.email}</p>
            <p>1026 Oakmound Road</p>
            <p>Chicago, Illinois 60605 </p>
            <p>USA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={HandleSubmit}>
              <CardElement onChange={HandleChange} />
              <div className="payment_price">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3> Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p> Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
