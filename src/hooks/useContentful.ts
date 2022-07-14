import React from "react";
import axios from "axios";

const useContentful = (query: any) => {
  const [data, setData] = React.useState<any>({});
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getPageData = async () => {
      setLoading(true);
      const config = {
        url: process.env.REACT_APP_CONTENTFUL_URL,
        method: "post",
        data: JSON.stringify({ query }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          Accept: "application/json",
        },
      };
      try {
        const response = await axios(config);
        console.log(response);
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPageData();
  }, []);

  return {
    data,
    isLoading,
  };
};

export default useContentful;
