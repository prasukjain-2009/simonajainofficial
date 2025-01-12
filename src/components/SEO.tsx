import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Simona Jain | Professional Makeup Artist & Style Consultant",
  description = "Professional makeup artistry, styling services, and model management. Specializing in bridal, fashion, commercial, and personal styling.",
  keywords = "makeup artist, stylist, model management, bridal makeup, fashion styling, personal styling, commercial makeup",
  image = "/images/og-image.jpg", // Default social sharing image
  url = "https://yourwebsite.com",
  type = "website",
}) => {
  const siteTitle =
    title === "Simona Jain | Professional Makeup Artist & Style Consultant"
      ? title
      : `${title} | Simona Jain`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Simona Jain Makeup & Styling" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Simona Jain" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Simona Jain Makeup & Styling",
          image: image,
          description: description,
          url: url,
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Fashion Street",
            addressLocality: "City",
            addressRegion: "State",
            postalCode: "12345",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "YOUR_LATITUDE",
            longitude: "YOUR_LONGITUDE",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          telephone: "+1-234-567-8900",
          priceRange: "$$",
          sameAs: [
            "https://www.instagram.com/simona_jainofficial/",
            // Add other social media URLs
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
