import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const [menuData, setMenuData] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) setMenuData(data.categories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center text-danger mb-5 display-4">
        🍕 Our Menu
      </h1>

      {menuData && menuData.length > 0 ? (
        menuData.map((category, index) => (
          <div key={index} className="mb-5">
            <h2 className="text-secondary mb-4">{category.name}</h2>
            <div className="row">
              {category.items.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted">{item.description}</p>
                      <p className="fw-bold text-danger">₹{item.price}</p>
                      <button
                        className="btn btn-danger mt-auto"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-muted">Loading menu...</p>
      )}
    </div>
  );
}

export default Menu;
