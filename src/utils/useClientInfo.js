import axios from "axios";

const URL = "http://localhost:8080/clientinfo/";

const useClientInfo = () => {
  const createClientData = (newClient) => {
    axios
      .post(URL, newClient)
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
