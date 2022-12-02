import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constant/colors";
import Button from "../atoms/Button";
import { style } from "./style";

const Navbar = () => {
  
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-transparent"
      style={{ padding: 20 }}
    >
      <div className="container-fluid">
        <Link to="/" className="cursor navbar-brand">
          <h6 style={style.navbarText}>E-learning</h6>
        </Link>

        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{margin: "0px 25px"}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="mx-2 nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#0"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#0">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="mx-2 nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#0"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#0">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="mx-2 nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#0"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learning Pathway
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#0">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#0">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="mx-2 nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#0"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partnership
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#0">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#0">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <div>
              <button className="btn btn-outline-dark fw-bold" style={style.navButton}>
                login
              </button>
            </div>
            <div className="mx-2">
              <Button text={"sign up"} color={colors.mint} />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
