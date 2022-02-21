import React, { Component } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    };
  }

  render() {
    return (
      <div className="sticky top-0 z-20 ">
        <nav className=" bg-white flex flex-wrap items-center justify-between px-2 py-3  mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                href="#pablo"
              >
                Bramha Ayurvedic Clinic
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                type="button"
                onClick={() =>
                  this.setState({ navbarOpen: !this.state.navbarOpen })
                }
              >
                <FiLogIn />
              </button>
            </div>
            <div
              className={
                "md:flex flex-grow items-center" +
                (this.state.navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              {window.location.href.includes("doctor") ? (
                <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                  <Link to="/doctor/newpaper">
                    <li className="nav-item">
                      <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                        <i className="fab fa-facebook-square text-md leading-md text-black opacity-75"></i>
                        <span className="ml-2">Patients</span>
                      </p>
                    </li>
                  </Link>
                  <Link to="/reception/inventory">
                    <li className="nav-item">
                      <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                        <i className="fab fa-twitter text-md leading-md text-black opacity-75"></i>
                        <span className="ml-2">Inventory</span>
                      </p>
                    </li>
                  </Link>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-md leading-md text-black opacity-75"></i>
                      <span className="ml-2">Billing</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-md leading-md text-black opacity-75"></i>
                      <span className="ml-2">Certificates</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link to="/login">
                      <button
                        href="/login"
                        class="px-3 py-2  text-xs uppercase font-bold leading-snug text-black bg-white transition duration-150 ease-in-out  hover:bg-gray-200 rounded  "
                      >
                        LogOut
                      </button>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-facebook-square text-md leading-md text-black opacity-75"></i>
                      <span className="ml-2">Share</span>
                    </a>
                  </li>
                  <Link to="/reception/inventory">
                    <li className="nav-item">
                      <a
                        href="#pablo"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      >
                        <i className="fab fa-twitter text-md leading-md text-black opacity-75"></i>
                        <span className="ml-2">Inventory</span>
                      </a>
                    </li>
                  </Link>
                  <li className="nav-item">
                    <Link to="/login">
                      <button
                        href="/login"
                        class="px-3 py-2  text-xs uppercase font-bold leading-snug text-black bg-white transition duration-150 ease-in-out  hover:bg-gray-200 rounded  "
                      >
                        LogOut
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
