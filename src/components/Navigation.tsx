import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

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
      key: "/",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "portfolio",
      label: "Portfolio",
      children: [
        {
          key: "/portfolio/bridal",
          label: <Link to="/portfolio/bridal">Bridal</Link>,
        },
        {
          key: "/portfolio/fashion",
          label: <Link to="/portfolio/fashion">Fashion</Link>,
        },
        {
          key: "/portfolio/commercial",
          label: <Link to="/portfolio/commercial">Commercial</Link>,
        },
        {
          key: "/portfolio/personal-styling",
          label: <Link to="/portfolio/personal-styling">Personal Styling</Link>,
        },
      ],
    },
    {
      key: "contact",
      label: <Link to="/contact">Contact</Link>,
    },
  ];

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Simona Jain</Link>
        </div>

        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
          />
        </div>

        <div className="mobile-menu">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setMobileMenuOpen(false)}
            open={mobileMenuOpen}
          >
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              items={menuItems}
              onClick={() => setMobileMenuOpen(false)}
            />
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
