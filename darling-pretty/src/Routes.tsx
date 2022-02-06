import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DarlingPrettyHome from "./App";
import PictureDescription from "./screens/PictureDescription";
import Register from "./screens/Register";
import ContactForm from "./screens/Contact";
import Checkout from "./screens/Checkout";
import SessionCalendar from "./admin/SessionCalendar";

const DarlingPrettyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DarlingPrettyHome />} />
        <Route path="/photo/:id" element={<PictureDescription />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/calendar" element={<SessionCalendar />} />
      </Routes>
    </Router>
  );
};

export default DarlingPrettyRouter;
