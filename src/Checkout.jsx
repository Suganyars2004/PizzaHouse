import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentData, setPaymentData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (
      paymentData.name &&
      paymentData.cardNumber.length === 16 &&
      paymentData.expiry &&
      paymentData.cvv.length === 3
    ) {
      setPaymentSuccess(true);
      clearCart();
    } else {
      alert("Please enter valid payment details!");
    }
  };

  if (cart.length === 0 && !paymentSuccess) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center text-danger mb-5">💳 Checkout</h1>

      {paymentSuccess ? (
        <div className="alert alert-success text-center">
          <h3>Payment Successful! 🎉</h3>
          <p>Thank you for your order. Your pizza will arrive soon!</p>
        </div>
      ) : (
        <div className="row">
          {/* Order Summary */}
          <div className="col-md-6 mb-4">
            <div className="card p-3 shadow-sm">
              <h4 className="text-danger mb-3">Order Summary</h4>
              {cart.map((item, index) => (
                <div key={index} className="d-flex justify-content-between mb-2">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
              <hr />
              <h5 className="fw-bold text-end">Total: ₹{totalPrice}</h5>
            </div>
          </div>

          {/* Payment Form */}
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="text-danger mb-3">Payment Details</h4>
              <form onSubmit={handlePayment}>
                <div className="mb-3">
                  <label className="form-label">Name on Card</label>
                  <input
                    type="text"
                    name="name"
                    value={paymentData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleChange}
                    className="form-control"
                    maxLength="16"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label className="form-label">Expiry</label>
                    <input
                      type="text"
                      name="expiry"
                      value={paymentData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input
                      type="password"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handleChange}
                      maxLength="3"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Pay ₹{totalPrice}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
