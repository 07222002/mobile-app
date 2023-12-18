// navbar.jsx
"use client";
import React,{useState} from "react";
import Image from "next/image"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import StoreIcon from './StoreIcon/Main'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterChange = (key) => {
    setSelectedCategory(key);
  };


  return (
    <Navbar isMenuDefaultOpen motionProps isBordered shouldShowOnScroll className="w-[100%] h-[100px] text-[30px] text-sky-800 border-b border-gray-300">
      <NavbarBrand className="">
        <h1 className="text-3xl">SHOPPING STORE</h1>
      </NavbarBrand>
      <NavbarContent justify="end" className=" flex justify-end">
         <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
      <DropdownTrigger className="">
        <Button 
          variant="bordered" 
        >
          Categories
        </Button>
      </DropdownTrigger>
      <DropdownMenu
      aria-label="Action event example"
      onAction={(key) => handleFilterChange(key)}
      className="bg-black text-white rounded-md"
    >
      <DropdownItem key="all">ALL</DropdownItem>
      <DropdownItem key="laptops">LAPTOPS</DropdownItem>
      <DropdownItem key="smartphones">SMARTPHONES</DropdownItem>
    </DropdownMenu>
    </Dropdown>
        </NavbarItem>
      </NavbarContent>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <StoreIcon />
      </NavbarContent>
    </Navbar>
  );
}

