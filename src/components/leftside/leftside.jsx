import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import homeicon from "./home.png";
import { SlHome } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { HiOutlineBell } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { TbDiscount2 } from "react-icons/tb";

import "./leftside.scss";

const LeftSide = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  const leftMenu = [
    { id: 1, path: "/", name: "home", icon: <SlHome /> },
    { id: 2, path: "/discount", name: "discount", icon: <TbDiscount2 /> },
    { id: 3, path: "/order", name: "order", icon: <AiOutlinePieChart /> },
    { id: 4, path: "/store", name: "store", icon: <CgShoppingBag /> },
    {
      id: 5,
      path: "/notification",
      name: "notification",
      icon: <HiOutlineBell />,
    },
    { id: 6, path: "/setting", name: "setting", icon: <CiSettings /> },
  ];

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="left-side">
      <ul>
        <li onClick={() => setActive("home")}>
          <Link to="/">
            <img src={homeicon} alt="home-icon" />
          </Link>
        </li>
        {leftMenu.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`${active === menuItem.name ? "active" : ""}`}
            onClick={() => setActive(menuItem.name)}
          >
            <Link to={menuItem.path}>{menuItem.icon}</Link>
          </li>
        ))}
        <li>
          <Link to="/">
            <IoLogOutOutline />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSide;
