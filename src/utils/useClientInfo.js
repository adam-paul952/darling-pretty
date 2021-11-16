import axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";

const URL = "http://localhost:8080/clientinfo/";

const useClientInfo = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createClientData = async (newClient) => {
    let token = await getAccessTokenSilently();
    axios
      .post(URL, newClient, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findAllClientData = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findClientDataById = (id) => {
    axios
      .get(URL + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCLientData = () => {
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    createClientData,
    findAllClientData,
    findClientDataById,
    deleteCLientData,
  };
};

export default useClientInfo;
