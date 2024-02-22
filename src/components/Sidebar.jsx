import React, { useState } from "react";
import "./Sidebar.css";
import { BsDropbox } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { RiPriceTag2Line } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaSquareDribbble } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
const menuItems = [
  { id: 1, title: "Dashboard", icon: <MdSpaceDashboard />, isActive: false },
  { id: 2, title: "Sales", icon: <FaSquareDribbble />, isActive: true },
  {
    id: 3,
    title: "Costs",
    icon: <PiCurrencyCircleDollarLight />,
    isActive: false,
  },
  { id: 4, title: "Payments", icon: <FaCcPaypal />, isActive: false },
  { id: 5, title: "Finance", icon: <RiPriceTag2Line />, isActive: false },
  { id: 6, title: "Messages", icon: <BiMessageSquareDots />, isActive: false },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [menuLinks, setMenuLinks] = useState([...menuItems]);

  const handleChangeActiveLink = (e) => {
    const updatedMenuLinks = menuLinks.map((menuLink) => ({
      ...menuLink,
      isActive: String(menuLink.id) == e.currentTarget.id,
    }));
    setMenuLinks(updatedMenuLinks);
  };
  return (
    <div className={`sidebar ${isOpen ? "opened" : "closed"}`}>
      <div className="sidebar-top">
        <div className="logo">
          <a href="#">
            <span>
              <BsDropbox />
            </span>
            {isOpen && "Technifly"}
          </a>
        </div>
        <button
          className={`burger-btn ${!isOpen && "closed"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoIosArrowBack />
        </button>
      </div>
      <ul>
        {menuLinks.map((menuItem) => (
          <li key={menuItem.id}>
            <a
              id={menuItem.id}
              href="#"
              className={`${menuItem.isActive && "active"} 
              ${!isOpen && "closed"}`}
              onClick={handleChangeActiveLink}
            >
              <span>{menuItem.icon}</span>
              {isOpen && menuItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
