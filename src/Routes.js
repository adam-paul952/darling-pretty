import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import DarlingPrettyHome from "./screens/DarlingPrettyHome";
import PawparazziPhotoHome from "./screens/PawparazziPhotoHome";
import Calendar from "./Calendar";
import Contact from "./screens/Contact";
import Checkout from "./screens/Checkout";
import PictureDescription from "./screens/PictureDescription";
import RegisterUser from "./screens/Register";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/darling_pretty_photo" component={DarlingPrettyHome} />
        <Route path="/pawparazzi_photo" component={PawparazziPhotoHome} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/contact" component={Contact} />
        <Route path="/order/checkout" component={Checkout} />
        <Route
          path="/darling_pretty_photodesc"
          component={PictureDescription}
        />
        <Route path="/register" component={RegisterUser} />
      </Switch>
    </Router>
  );
};

export default Routes;
