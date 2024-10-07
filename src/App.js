import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./ui/user/components/Products";
import AllOffices from "./ui/user/components/AllOffices";
import ProductDetails from "./ui/user/components/ProductDetails";
import CheckOut from "./ui/user/components/CheckOut";
import OrderHistory from "./ui/user/components/OrderHistory";
import HomePage from "./ui/barista/components/HomePage";
import MyOrders from "./ui/user/components/MyOrders";
import PlaceOrder from "./ui/user/components/PlaceOrder";
import UserOrderHistory from "./ui/user/components/UserOrderHistory";
import TakeOrders from "./ui/barista/components/TakeOrders";
import OrderDetails from "./ui/barista/components/OrderDetails";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<AllOffices/>} />
            <Route exact path="/product" element={<Products/>} />
            <Route exact path="/product-details" element={<ProductDetails/>}/>
            {/* <Route exact path="/my-orders" element={<CombinedOrders/>}/> */}
            <Route exact path="/home-page" element={<HomePage/>} />
            <Route path="/check-out" element={<CheckOut/>}/>
            <Route path="/order-history" element={<OrderHistory/>}/>
            <Route path="/place-order" element={<PlaceOrder/>}/>
            <Route path="/my-orders" element={<MyOrders/>}/>
            <Route path="/take-orders" element={<TakeOrders/>}/>
            <Route path="/order-details" element={<OrderDetails />}/>
            <Route path="/user-order-history" element={<UserOrderHistory/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;