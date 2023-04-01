import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="menu">
            <Icon icon="ant-design:menu-outlined" width="26px" />
            <span>Menu</span>
          </li>
          <li className="title">
            <h5>The</h5>
            <h1>Wasdale</h1>
            <h5>Head Inn</h5>
          </li>
          <li className="interactions">
            <Icon icon="ri:facebook-box-fill" />

            <Icon icon="ri:instagram-fill" />

            <Icon icon="ant-design:twitter-square-filled" />

            <span className="book">Book now !!</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
