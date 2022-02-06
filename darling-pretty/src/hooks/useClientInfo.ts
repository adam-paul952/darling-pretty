import axios from "axios";

import { ClientInfoProps } from "./useSessionInfo";

const URL = "http://localhost:8080/clientinfo/";

const useClientInfo = () => {
  const createClientData = async (clientData: ClientInfoProps) => {
    axios
      .post(URL, clientData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findAllClientData = async () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findClientById = (id: number) => {
    axios
      .get(URL + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteClientData = () => {
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
    findClientById,
    deleteClientData,
  };
};

export default useClientInfo;
