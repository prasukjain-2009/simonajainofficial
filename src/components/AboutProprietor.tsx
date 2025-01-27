import React from "react";
import "../styles/about-proprietor.less";
import { Row, Col, Tooltip, Image } from "antd";

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
            <Image
              src="/images/proprietor.jpg"
              alt="Simona Jain"
              className="main-image"
              preview={false}
            />
          </Col>

          <Col xs={24} md={12}>
            <h1>About the Proprietor</h1>
            <p>
              Welcome to <em>Simonajainofficial</em> – where creativity meets
              professionalism.
            </p>
            <p>
              My journey began with a deep-rooted passion for fashion and
              design. I graduated as a Fashion Designer from SNDT University,
              earning the prestigious "Best Designer of the Batch" award in 2018
              under the mentorship of celebrated designers Vikram Phadnis and
              Ken Ferns.
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
            Starting my career as an Assistant Manager in Fashion and Styling, I
            soon transitioned into the dynamic role of a Model Manager in Delhi.
            Over the years, I've had the privilege of contributing backstage to
            esteemed events like Times Fashion Week and Couture Fashion Week.
            I've also worked alongside iconic designers such as Tarun Tahiliani,
            Raghuvendra Rathore, Nevedita Saboo, Kalki, Ritu Beri, Narendra
            Kumar, Neeta Lulla, and many more. Additionally, I've managed
            celebrated personalities like Sushmita Sen, Dia Mirza, Kalki
            Koechlin, Chitrangda Singh, Karisma Kapoor, Sunny Leone, Malaika
            Arora Khan, Priyank Sharma, Hina Khan, and Srishty Rode, among
            others.
          </p>
          <p>
            Expanding my expertise further, I ventured into the advertising
            industry, managing projects for catalogs, e-commerce, website
            shoots, and brand campaigns. This evolution allowed me to
            collaborate with industry-leading brands like Samsung, Gillette
            Razor, Tata Cliq, Demench, Sonata, and Nykaa. These experiences
            helped refine my skills in project management, time efficiency, and
            delivering impactful outcomes.
          </p>
          <p>
            With a vision to channel my fashion and styling expertise while
            fostering new talent, I am proud to introduce *Simonajainofficial*.
            This platform seamlessly integrates my roles as a Makeup Artist,
            Stylist, Model Manager, and Designer, offering a comprehensive
            approach to creative excellence.
          </p>
          <p>
            At <em>Simonajainofficial</em>, we are committed to transforming
            ideas into reality through innovation, professionalism, and
            unmatched dedication. Let's collaborate and create something
            extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProprietor;
