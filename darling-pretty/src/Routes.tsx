import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DarlingPrettyHome from "./App";
import PictureDescription from "./screens/PictureDescription";

const DarlingPrettyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DarlingPrettyHome />} />
        <Route path="/photo/:id" element={<PictureDescription />} />
      </Routes>
    </Router>
  );
};

export default DarlingPrettyRouter;
