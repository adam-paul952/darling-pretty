import { ClientInfoProps } from "../hooks/useSessionInfo";

const clients: ClientInfoProps[] = [
  {
    name: { firstName: "Adam", lastName: "" },
    contact: { email: "adam@email.com", phoneNumber: "(555)555-5555" },
    billing: {
      address1: "1 Test St",
      address2: "",
      city: "New Test",
      province: "NL",
      postalCode: "A1A1A1",
      country: "Canada",
    },
    bookingDetails: "Sat Feb 12 2022 08:40:00",
  },
  {
    name: { firstName: "Raelene", lastName: "" },
    contact: { email: "rae@email.com", phoneNumber: "(666)666-6666" },
    billing: {
      address1: "1 New Rd",
      address2: "",
      city: "Old Town",
      province: "NL",
      postalCode: "S1S1S1",
      country: "Canada",
    },
    bookingDetails: "Sat Feb 12 2022 09:00:00",
  },
  {
    name: { firstName: "Ted", lastName: "" },
    contact: { email: "", phoneNumber: "" },
    billing: {
      address1: "",
      address2: "",
      city: "",
      province: "NL",
      postalCode: "",
      country: "Canada",
    },
    bookingDetails: "2022-02-13T11:00:00",
  },
];

export default clients;
