import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import homeicon from "./home.png";
import { SlHome } from "react-icons/sl";
import { CiDiscount1, CiSettings } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { HiOutlineBell } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";

import "./leftside.scss";

const LeftSide = () => (
  <div className="left-side">
    <ul>
      <li>
        <Link to="/home">
          <img src={homeicon} alt="home-icon" />
        </Link>
      </li>
      <CustomLink to="/home">
        <SlHome />
      </CustomLink>
      <CustomLink to="/discount">
        <CiDiscount1 />
      </CustomLink>
      <CustomLink to="/order">
        <AiOutlinePieChart />
      </CustomLink>
      <CustomLink to="/store">
        <CgShoppingBag />
      </CustomLink>
      <CustomLink to="/notification">
        <HiOutlineBell />
      </CustomLink>
      <CustomLink to="/setting">
        <CiSettings />
      </CustomLink>
      <li>
        <Link to="/">
          <IoLogOutOutline />
        </Link>
      </li>
    </ul>
  </div>
);

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: false });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default LeftSide;
