import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import DashboardScreen from "./Screens/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="md">
          <Switch>
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/" component={DashboardScreen} exact />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
