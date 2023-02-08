import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home-body.scss";
import { FiSearch, FiChevronDown } from "react-icons/fi";

import { dishes_data } from "./dishes.data";
import { addFood } from "../../redux/food/foodSlice";

const HomeBody = () => {
  const dispatch = useDispatch();
  const { foodItems } = useSelector((state) => state.food);

  let [search, setSearch] = useState("");
  let [show, setShow] = useState(false);
  const [active, setActive] = useState("hot");
  const menu = [
    { id: 1, name: "Hot Dishes", type: "hot" },
    { id: 2, name: "Cold Dishes", type: "cold" },
    { id: 3, name: "Soup", type: "soup" },
    { id: 4, name: "Grill", type: "grill" },
    { id: 5, name: "Appetizer", type: "appetizer" },
    { id: 6, name: "Dessert", type: "dessert" },
  ];

  let filteredData = dishes_data.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  const addFoodItem = (food) => {
    const isExist = foodItems.find((item) => item.id === food.id);

    if (isExist) {
      return foodItems.map((item) =>
        item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    return [...foodItems, { ...food, quantity: 1 }];
  };

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
            {menu.map((el) => (
              <li
                key={el.id}
                className={`item-menu ${active === el.type ? "active" : ""}`}
                onClick={() => setActive(el.type)}
              >
                {el.name}
              </li>
            ))}
          </ul>
          <hr />
        </div>
        <div className="dishes-body">
          <div className="dishes-top">
            <h3>Choose Dishes</h3>
            <div onClick={() => setShow(!show)}>
              <FiChevronDown className={`${show ? "rotate" : ""}`} />
              <span className="active-select">Dine in</span>
              <div className={`order-type ${show ? "show" : ""}`}>
                <span>To Go</span>
                <span>Delivery</span>
              </div>
            </div>
          </div>
          <div className="dishes-items">
            {filteredData
              .filter((dishes) => dishes[active])
              .map((dish) => (
                <div
                  className="dishes-item"
                  onClick={() => dispatch(addFood(addFoodItem(dish)))}
                  key={dish.id}
                >
                  <div className="image-container">
                    <img src={dish.imgUrl} alt="dish1" />
                  </div>
                  <div className="dish-information">
                    <h5>{dish.name}</h5>
                    <p>$ {dish.cost}</p>
                    <span>{dish.number} Bowls available</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
