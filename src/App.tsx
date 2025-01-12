import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import AppRoutes from "./routes";
import "./styles/main.less";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000000",
            colorSecondary: "#d4af37",
          },
        }}
      >
        <Router>
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
