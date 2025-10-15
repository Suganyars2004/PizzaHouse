import React, { useContext } from "react"; 
import { CartContext } from "./CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h1 className="text-center text-danger mb-5 display-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-muted">Your cart is empty!</p>
          <Link to="/Menu" className="btn btn-danger mt-3">Go to Menu</Link>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8 mb-4">
            {cart.map((item, index) => (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt={item.name}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted">{item.description}</p>
                      <p className="fw-bold text-danger">₹{item.price}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                        <span className="text-muted">Qty: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="col-lg-4">
            <div className="card p-4 shadow-sm">
              <h4 className="card-title mb-3 text-danger">Cart Summary</h4>
              <p className="fw-bold">Items: {cart.length}</p>
              <p className="fw-bold">Total: ₹{totalPrice}</p>
              <button className="btn btn-danger w-100 mb-2" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/Checkout" className="btn btn-success w-100">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
