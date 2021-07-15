import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import JobsToTableCloner from "./pages/jobs-to-table-cloner-page/jobs-to-table-cloner-page.component";
import TrafficUpdater from "./pages/traffic-updater/traffic-updater.component";
import SlaTracker from "./pages/homepage/sla-tracker/sla-tracker.component";
import CheckPoints from "./pages/checkpoints/checkpoints.component";
import LiveTracker from "./pages/live-tracker/live-tracker.component";

import Zoom from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Zoom>
        <Header />
      </Zoom>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/JobsToTableCloner" component={JobsToTableCloner} />
        <Route path="/TrafficUpdater" component={TrafficUpdater} />
        <Route path="/SlaTracker" component={SlaTracker} />
        <Route path="/checkpoints" component={CheckPoints} />
        <Route path="/live_tracker" component={LiveTracker} />
      </Switch>
    </div>
  );
}

export default App;
