import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import DashboardScreen from "./Screens/Dashboard";

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Switch>
          <Route path="/" component={DashboardScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
