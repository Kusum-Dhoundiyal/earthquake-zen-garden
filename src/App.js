import Header from "./components/Header";
import Routes from "./components/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
