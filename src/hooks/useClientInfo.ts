import { API, graphqlOperation } from "aws-amplify";
import { createClients } from "../graphql/mutations";
import { listClients } from "../graphql/queries";

export interface IClientInfo {
  id?: string | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  addressOne: string;
  addressTwo?: string | null;
  city: string;
  postalCode: string;
  province: string;
  country: string;
  sessionBooked?: string;
}

const useClientInfo = () => {
  const createNewClient = async (newClient: IClientInfo) => {
    try {
      const client: any = await API.graphql(
        graphqlOperation(createClients, { input: newClient })
      );

      return client.data.createClients;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllClients = async () => {
    try {
      const clients: any = await API.graphql(graphqlOperation(listClients));

      return clients.data.listClients.items;
    } catch (error) {
      console.log(error);
    }
  };

  return { createNewClient, getAllClients };
};

export default useClientInfo;
