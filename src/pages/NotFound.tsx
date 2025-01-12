import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
      />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </>
  );
};

export default NotFound;
