import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import DarlingPrettyHome from "./screens/DarlingPrettyHome";
import PawparazziPhotoHome from "./screens/PawparazziPhotoHome";
import Contact from "./screens/Contact";
import Checkout from "./screens/Checkout";
import PictureDescription from "./screens/PictureDescription";
import RegisterUser from "./screens/register/Register";
import Profile from "./screens/Profile";
import AdminDashboard from "./admin/AdminDashBoard";
import SessionCalendar from "./admin/SessionCalendar";

import ProtectedRoute from "./auth/ProtectedRoute";
import { sessionInfo } from "./sessionInfo/sessionInfo";
import EditSessionInfo from "./admin/EditSession";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/darling_pretty_photo">
        <DarlingPrettyHome sessionInfo={sessionInfo} />
      </Route>
      <Route path="/pawparazzi_photo" component={PawparazziPhotoHome} />
      <Route path="/contact" component={Contact} />
      <Route path="/order/checkout" component={Checkout} />
      <Route path="/photoDescription/:id">
        <PictureDescription sessionInfo={sessionInfo} />
      </Route>
      <Route path="/register" component={RegisterUser} />
      <ProtectedRoute path="/profile" component={Profile} />
      <Route exact path="/admin" component={AdminDashboard} />
      <Route path="/admin/calendar" component={SessionCalendar} />
      <Route path="/admin/editsession" component={EditSessionInfo} />
    </Switch>
  );
};

export default Routes;
