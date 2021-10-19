import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import DarlingPrettyHome from "./screens/DarlingPrettyHome";
import PawparazziPhotoHome from "./screens/PawparazziPhotoHome";
import Calendar from "./Calendar";
import Cart from "./screens/Cart";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/darling_pretty_photo" component={DarlingPrettyHome} />
        <Route path="/pawparazzi_photo" component={PawparazziPhotoHome} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/order/checkout" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
