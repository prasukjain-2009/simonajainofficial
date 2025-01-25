import React from "react";
import "../styles/about-proprietor.less";
import { Row, Col, Tooltip } from "antd";

const AboutProprietor: React.FC = () => {
  const celebrityImages = [
    {
      src: "/images/celeb-1.jpg",
      alt: "With Sushmita Sen",
      caption: "Backstage with Sushmita Sen at Times Fashion Week",
    },
    {
      src: "/images/celeb-2.jpg",
      alt: "With Dia Mirza",
      caption: "Styling session with Dia Mirza",
    },
    {
      src: "/images/celeb-3.jpg",
      alt: "With Malaika Arora",
      caption: "Fashion Week with Malaika Arora Khan",
    },
    {
      src: "/images/celeb-4.jpg",
      alt: "With Karisma Kapoor",
      caption: "Behind the scenes with Karisma Kapoor",
    },
  ];

  return (
    <div className="about-proprietor">
      <div className="about-content">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className="proprietor-image">
              <img
                src="/images/proprietor.jpg"
                alt="Simona Jain"
                className="main-image"
              />
            </div>
          </Col>

          <Col xs={24} md={12}>
            <h1>About the Proprietor</h1>
            <p>
              Welcome to <em>Simonajainofficial</em> – where creativity meets
              professionalism.
            </p>
            <p>
              My journey began with a deep-rooted passion for fashion and
              design...
            </p>
          </Col>
        </Row>

        <h2 className="gallery-title">Career Highlights</h2>
        <Row className="image-collage" gutter={[16, 16]}>
          {celebrityImages.map((image, index) => (
            <Col xs={12} sm={8} md={6} key={index}>
              <div className="image-container">
                <Tooltip title={image.caption}>
                  <img src={image.src} alt={image.alt} />
                </Tooltip>
                <div className="image-caption">{image.alt}</div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="about-text">
          <p>
            Starting my career as an Assistant Manager in Fashion and Styling...
          </p>
          <p>Expanding my expertise further...</p>
          <p>With a vision to channel my fashion and styling expertise...</p>
          <p>
            At <em>Simonajainofficial</em>, we are committed to transforming
            ideas into reality...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProprietor;
