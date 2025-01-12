import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import AppRoutes from "./routes";
import { BASE_URL } from "./config/constants";
import "./styles/main.less";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000000",
            colorBgBase: "#ffffff",
            colorTextBase: "#000000",
            colorTextSecondary: "#d4af37",
            borderRadius: 4,
            colorBorder: "#d9d9d9",
            colorBgContainer: "#ffffff",
          },
        }}
      >
        <Router basename={BASE_URL}>
          <div className="app">
            <Navigation />
            <main>
              <AppRoutes />
            </main>
          </div>
        </Router>
      </ConfigProvider>
    </HelmetProvider>
  );
};

export default App;
