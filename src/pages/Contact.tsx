import React from "react";
import { Typography, Button, Card, Row, Col } from "antd";
import {
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/simona_jainofficial/", "_blank");
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <Title level={1}>Get in Touch</Title>
        <Paragraph>
          We'd love to hear from you and discuss your makeup and styling needs
        </Paragraph>
      </div>

      <div className="contact-container">
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} md={20} lg={16}>
            <Card className="contact-card">
              <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
                  <div className="contact-info-item">
                    <InstagramOutlined className="icon" />
                    <div className="info-content">
                      <Title level={4}>Instagram</Title>
                      <Button
                        type="primary"
                        icon={<InstagramOutlined />}
                        onClick={handleInstagramClick}
                        className="instagram-button"
                      >
                        Follow & Message
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="contact-info-item">
                    <PhoneOutlined className="icon" />
                    <div className="info-content">
                      <Title level={4}>Phone</Title>
                      <Paragraph>
                        <a href="tel:+916360602378">+91 6360602378</a>
                      </Paragraph>
                    </div>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="contact-info-item">
                    <MailOutlined className="icon" />
                    <div className="info-content">
                      <Title level={4}>Email</Title>
                      <Paragraph>
                        <a href="mailto:simonajainofficial@gmail.com">
                          simonajainofficial@gmail.com
                        </a>
                      </Paragraph>
                    </div>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="contact-info-item">
                    <EnvironmentOutlined className="icon" />
                    <div className="info-content">
                      <Title level={4}>Location</Title>
                      <Paragraph>Bengaluru, Karnataka, India</Paragraph>
                    </div>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="contact-info-item">
                    <GlobalOutlined className="icon" />
                    <div className="info-content">
                      <Title level={4}>Services</Title>
                      <Paragraph>
                        • Bridal Makeup & Styling
                        <br />
                        • Fashion Makeup
                        <br />
                        • Commercial Styling
                        <br />
                        • Personal Style Consulting
                        <br />• Model Management
                      </Paragraph>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
