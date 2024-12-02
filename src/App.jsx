import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import Success from "./components/Success";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/orderpizza" component={OrderPizza} />
        <Route path="/success" component={Success} />
      </Switch>
    </>
  );
}

export default App;
