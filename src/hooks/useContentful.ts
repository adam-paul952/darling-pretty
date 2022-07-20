import React from "react";

import axios from "axios";

const useContentful = (query: string) => {
  const [data, setData] = React.useState<any>({});
  const [error, setError] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

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
  const getPageData = async () => {
    setLoading(true);
    try {
      const response = await axios(config);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return { data, error, loading };
};

export default useContentful;
