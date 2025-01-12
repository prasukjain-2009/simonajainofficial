import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Radio, Image, Card, Spin } from "antd";
import type { RadioChangeEvent } from "antd";
import { ImageData, Category } from "../types";
import { sampleImages } from "../data/images";

const Portfolio: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    navigate(value === "all" ? "/portfolio" : `/portfolio/${value}`);
  };

  const filteredImages = category
    ? sampleImages.filter((img) => img.category === category)
    : sampleImages;

  return (
    <div className="portfolio">
      <Spin spinning={loading}>
        <div className="image-grid">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              hoverable
              cover={
                <Image
                  alt={image.title}
                  src={image.url}
                  preview={{
                    mask: image.title,
                  }}
                />
              }
            >
              <Card.Meta title={image.title} description={image.category} />
            </Card>
          ))}
        </div>
      </Spin>
    </div>
  );
};

export default Portfolio;
