import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Image, Card, Spin } from "antd";
import type { RadioChangeEvent } from "antd";

interface ImageInfo {
  id: string;
  title: string;
  url: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const { category = "all" } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        // Define all possible image globs statically
        const allImagesContext = import.meta.glob(
          "../assets/*/*.{png,jpg,jpeg,gif}"
        );
        const architectureImagesContext = import.meta.glob(
          "../assets/architecture/*.{png,jpg,jpeg,gif}"
        );
        const natureImagesContext = import.meta.glob(
          "../assets/nature/*.{png,jpg,jpeg,gif}"
        );
        const urbanImagesContext = import.meta.glob(
          "../assets/urban/*.{png,jpg,jpeg,gif}"
        );

        // Choose the appropriate context based on category
        let imageContext;
        switch (category) {
          case "architecture":
            imageContext = architectureImagesContext;
            break;
          case "nature":
            imageContext = natureImagesContext;
            break;
          case "urban":
            imageContext = urbanImagesContext;
            break;
          default:
            imageContext = allImagesContext;
        }

        const imageFiles = await Promise.all(
          Object.entries(imageContext).map(async ([path, importFunc]) => {
            const imported: any = await importFunc();
            const pathParts = path.split("/");
            const fileName = pathParts[pathParts.length - 1];
            const imageCategory = pathParts[pathParts.length - 2];

            return {
              id: path,
              title: fileName.split(".")[0],
              url: imported.default,
              category: imageCategory,
            };
          })
        );

        // Filter images based on category if not "all"
        const filteredImages =
          category === "all"
            ? imageFiles
            : imageFiles.filter((img) => img.category === category);

        setImages(filteredImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
      setLoading(false);
    };

    loadImages();
  }, [category]);

  const handleCategoryChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    navigate(value === "all" ? "/portfolio" : `/portfolio/${value}`);
  };

  return (
    <div className="portfolio">
      <Spin spinning={loading}>
        <div className="image-grid">
          {images.map((image) => (
            <Card
              key={image.id}
              hoverable
              className="image-card"
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
              <Card.Meta title={image.title} />
            </Card>
          ))}
        </div>
      </Spin>
    </div>
  );
};

export default Portfolio;
