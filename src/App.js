import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddPatient from "./screens/AddPatient";
import Patients from "./screens/Patients";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterStaffScreen from "./screens/RegisterStaffScreen";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/patients" component={Patients} />
          <Route path="/addpatient" component={AddPatient} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterStaffScreen} />
        </Switch>
      </Container>
    </main>
  );
}

export default App;
