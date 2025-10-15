import pizza from "./assets/pizza.jpg";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"; // for SPA routing
import "./Home.css";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Pizza House</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="card text-white border-0" style={{height:"100vh", width:"100vw"}}>
        <img
          src={pizza}
          alt="pizza"
          className="card-img img-fluid"
          style={{height:"100%", width:"100%", objectFit:"cover"}}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
          <h1 className="display-3 fw-bold">Pizza House</h1>
          <h3 className="mt-3">Happiness is just a slice away!</h3>
          <Link
  to="/Menu"
  className="btn btn-danger mt-3"
  style={{ width: "200px" }} // set fixed width
>
  Pizza Time!!!
</Link>

        </div>
      </div>
    </div>
  );
}

export default Home;
