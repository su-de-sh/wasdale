import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <span className="menu">
          <Icon icon="ant-design:menu-outlined" width="26px" />
          <span>Menu</span>
        </span>
        <span className="title">
          <h5>The</h5>
          <h1>Wasdale</h1>
          <h5>Head Inn</h5>
        </span>
        <ul className="interactions">
          <li>
            <a href="#" >
             Home
            </a>
          </li>
          <li>
            <a href="#" >
             About
            </a>
          </li>
          <li>
            <a href="#" >
             Menu
            </a>
          </li>
          <li>
            <a href="#" >
             Gallery
            </a>
          </li>
          <li>
            <a href="#" >
             Rooms
            </a>
          </li>

          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon icon="ri:instagram-fill" />
            </a>
          </li>

          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon icon="ant-design:twitter-square-filled" />
            </a>
          </li>
          <button className="book" onClick={() => console.log("Book now")}>
            Book now !!
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
