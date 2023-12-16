// Main.jsx
"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "@nextui-org/badge";
import { CartIcon } from "./CartIcon";

export default function Main() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Your logic for updating the badge or sending the cart items to the server
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="flex items-center gap-4 transition-all ease-in-out cursor-pointer text-white relative">
      <div className="flex items-center px-2 py-2" onClick={toggleSidebar}>
        <Badge color="warning" content={cartItems.length} shape="circle" radius="lg">
          <CartIcon size={100} />
        </Badge>
      </div>

      {isSidebarVisible && (
        <div className="fixed pt-16 px-5 top-0 bottom-0 right-0 z-50 transition-all ease-in-out w-[30%] h-[100vh] bg-[#2d2d2d] shadow-2xl transform">
          <button
            className="absolute text-[40px] top-2 right-2 text-white cursor-pointer"
            onClick={closeSidebar}
          >
            &#10006;
          </button>

          <div>
            <p className="text-3xl">Sidebar Content</p>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
