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

import ProtectedRoute from "./auth/ProtectedRoute";
import { sessionInfo } from "./sessionInfo/sessionInfo";

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
      <Route path="/darling_pretty_photodesc/:id">
        <PictureDescription sessionInfo={sessionInfo} />
      </Route>
      <Route path="/register" component={RegisterUser} />
      <ProtectedRoute path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
