import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import "./home-body.scss";
import { FiSearch, FiChevronDown } from "react-icons/fi";

import { dishes_data } from "./dishes.data";

const HomeBody = ({ addItem }) => {
  let [search, setSearch] = useState("");
  let [dishType, setDishType] = useState("hot");

  let filteredData = dishes_data.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  let itemMenu = document.getElementsByClassName("item-menu");
  let len = itemMenu.length;

  function setActive(item) {
    for (let i = 0; i < len; i++) {
      if (parseInt(item.id) === i + 1) {
        itemMenu[i].classList.add("active");
      } else {
        if (itemMenu[i].classList.contains("active"))
          itemMenu[i].classList.remove("active");
      }
    }
  }

  return (
    <div className="home-body">
      <div className="home-top">
        <div className="top-left">
          <h2>Jaegar Resto</h2>
          <span>Tuesday, 2 Feb 2021</span>
        </div>
        <div className="top-right">
          <FiSearch />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      </div>
      <div className="dishes">
        <div className="dishes-menu">
          <ul>
            <li
              id="1"
              className="item-menu active"
              onClick={(e) => {
                setDishType("hot");
                setActive(e.target);
              }}
            >
              Hot Dishes
            </li>
            <li
              id="2"
              className="item-menu"
              onClick={(e) => {
                setDishType("cold");
                setActive(e.target);
              }}
            >
              Cold Dishes
            </li>
            <li
              id="3"
              className="item-menu"
              onClick={(e) => {
                setDishType("soup");
                setActive(e.target);
              }}
            >
              Soup
            </li>
            <li
              id="4"
              className="item-menu"
              onClick={(e) => {
                setDishType("grill");
                setActive(e.target);
              }}
            >
              Grill
            </li>
            <li
              id="5"
              className="item-menu"
              onClick={(e) => {
                setDishType("appetizer");
                setActive(e.target);
              }}
            >
              Appetizer
            </li>
            <li
              id="6"
              className="item-menu"
              onClick={(e) => {
                setDishType("dessert");
                setActive(e.target);
              }}
            >
              Dessert
            </li>
          </ul>
          <hr />
        </div>
        <div className="dishes-body">
          <div className="dishes-top">
            <h3>Choose Dishes</h3>
            <div>
              <FiChevronDown />
              <span>Dine in</span>
            </div>
          </div>
          <div className="dishes-items">
            {filteredData
              .filter((dishes) => dishes[dishType])
              .map((dishes) => (
                <div
                  className="dishes-item"
                  onClick={() => addItem(dishes)}
                  key={dishes.id}
                >
                  <div className="image-container">
                    <img src={dishes.imgUrl} alt="dish1" />
                  </div>
                  <div className="dish-information">
                    <h5>{dishes.name}</h5>
                    <p>$ {dishes.cost}</p>
                    <span>{dishes.number} Bowls available</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(HomeBody);
