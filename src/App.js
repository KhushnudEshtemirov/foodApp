import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";
import LeftSide from "./components/leftside/leftside";
import Discount from "./pages/discount/discount";
import Order from "./pages/orderpage/orderpage";
import Store from "./pages/storepage/storepage";
import Notification from "./pages/notification/notification";
import Setting from "./pages/setting/setting";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftSide />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/order" element={<Order />} />
        <Route path="/store" element={<Store />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
