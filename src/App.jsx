import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import Success from "./components/Success";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [orderData, setOrderData] = useState(null); // Sipariş verilerini burada tutuyoruz.
  const history = useHistory();

  const handleOrderSubmit = (data) => {
    setOrderData(data); // Sipariş verilerini state'e kaydediyoruz.
    history.push("/success"); // Sipariş başarılıysa success sayfasına yönlendiriyoruz.
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/orderpizza"
          render={(props) => (
            <OrderPizza {...props} onSubmit={handleOrderSubmit} />
          )}
        />
        <Route
          path="/success"
          render={(props) => <Success {...props} orderData={orderData} />}
        />
      </Switch>
    </>
  );
}

export default App;
