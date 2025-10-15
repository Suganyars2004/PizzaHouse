import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 

function About() {
  return (
    <div className="about-page container py-5">
      <div className="text-center mb-5">
        <img
          src="banner1.jpg"
          alt="Banner"
          className="img-fluid rounded shadow-sm"
        />
      </div>
      <h1 className="text-center text-danger mb-4 display-5 fw-bold">
        Every Slice Tells a Story!
      </h1>
      <div className="mb-5">
        <p>
          Welcome to <strong>CheezyBite Pizza</strong>, your one-stop destination for
          handcrafted pizzas made with love, fresh ingredients, and loads of cheese! 🍕
        </p>
        <p>
          We started our journey with a simple idea — to serve happiness in every slice.
          From our signature Margherita to our fiery Peri-Peri Chicken Pizza, every pizza
          is freshly baked and topped with 100% real mozzarella.
        </p>
        <p>
          Our chefs use hand-picked vegetables, farm-fresh toppings, and homemade sauces
          to bring you the best taste experience. Whether it’s a quick lunch, a family
          dinner, or a celebration with friends, CheezyBite makes every moment delicious!
        </p>
      </div>
      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <h2 className="text-danger">Our Vision</h2>
          <p>To become everyone’s favorite pizza place by combining flavor, freshness, and fun.</p>
        </div>
        <div className="col-md-6 mb-3">
          <h2 className="text-danger">Our Mission</h2>
          <p>Deliver joy and taste through innovation, hygiene, and unbeatable quality.</p>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="text-danger mb-3">Why Choose Us</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">🍅 Freshly baked pizzas</li>
          <li className="list-group-item">🧀 100% natural ingredients</li>
          <li className="list-group-item">🚚 Fast delivery</li>
          <li className="list-group-item">😊 Friendly service</li>
        </ul>
      </div>
      <blockquote className="blockquote text-center text-danger display-6 fw-semibold">
        “Pizza isn’t just food — it’s an emotion we share with you!”
      </blockquote>
    </div>
  );
}

export default About;
