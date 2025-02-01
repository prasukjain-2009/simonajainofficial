import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import logo from "../assets/logo.jpeg";
import { BASE_URL } from "../config/constants";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems: MenuProps["items"] = [
    {
      key: `${BASE_URL}/`,
      label: <Link to={`${BASE_URL}/`}>Home</Link>,
    },
    {
      key: "portfolio",
      label: "Portfolio",
      children: [
        {
          key: `${BASE_URL}/portfolio/beauty`,
          label: <Link to={`${BASE_URL}/portfolio/beauty`}>Beauty</Link>,
        },
        {
          key: `${BASE_URL}/portfolio/brand`,
          label: <Link to={`${BASE_URL}/portfolio/brand`}>Brand Shoots</Link>,
        },
        {
          key: `${BASE_URL}/portfolio/ethnic`,
          label: <Link to={`${BASE_URL}/portfolio/ethnic`}>Ethnic</Link>,
        },
        {
          key: `${BASE_URL}/portfolio/fashion`,
          label: (
            <Link to={`${BASE_URL}/portfolio/fashion`}>
              Fashion - E-Commerce
            </Link>
          ),
        },
        // {
        //   key: `${BASE_URL}/portfolio/commercial`,
        //   label: (
        //     <Link to={`${BASE_URL}/portfolio/commercial`}>Commercial</Link>
        //   ),
        // },
        // {
        //   key: `${BASE_URL}/portfolio/personal-styling`,
        //   label: (
        //     <Link to={`${BASE_URL}/portfolio/personal-styling`}>
        //       Personal Styling
        //     </Link>
        //   ),
        // },
      ],
    },
    {
      key: `${BASE_URL}/contact`,
      label: <Link to={`${BASE_URL}/contact`}>Contact</Link>,
    },
    {
      key: `${BASE_URL}/about`,
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to={`${BASE_URL}/`}>
            <img src={logo} alt="Logo" className="nav-logo " />
          </Link>
        </div>

        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            theme="light"
            className="nav-menu"
          />
        </div>

        <div className="mobile-menu">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          <Drawer
            title="Menu"
            placement="right"
            width={200}
            onClose={() => setMobileMenuOpen(false)}
            open={mobileMenuOpen}
          >
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              items={menuItems}
              onClick={() => setMobileMenuOpen(false)}
              className="nav-menu"
            />
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
