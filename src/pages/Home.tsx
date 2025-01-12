import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/constants";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`${BASE_URL}/contact`);
  };

  return (
    <>
      <SEO
        title="Professional Makeup Artist & Style Consultant"
        description="Transform your look with professional makeup artistry, styling services, and model management. Specializing in bridal, fashion, and commercial styling."
        keywords="makeup artist, stylist, model management, bridal makeup, fashion styling"
      />
      <div className="home">
        <section className="hero">
          <div className="hero-content">
            <h1>Transforming Visions into Reality</h1>
            <p>Professional Makeup Artistry & Styling Services</p>
            <Button
              type="primary"
              size="large"
              onClick={handleContactClick}
              className="cta-button"
            >
              Contact Us
            </Button>
          </div>
        </section>

        {/* ... rest of the home page content ... */}

        <section className="about-preview">
          <div className="about-content">
            <h2>Let's Create Your Perfect Look</h2>
            <p>
              Ready to transform your style? Get in touch to discuss your makeup
              and styling needs.
            </p>
            <Button
              type="default"
              size="large"
              onClick={handleContactClick}
              className="about-cta"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
