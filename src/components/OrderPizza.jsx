import { useHistory } from "react-router-dom";

export default function OrderPizza() {
  const history = useHistory();

  function handleClick() {
    history.push("/success");
  }

  return (
    <div className="order-container">
      <p>Sipariş Formu</p>
      <button type="button" onClick={handleClick}>
        SİPARİŞ VER
      </button>
    </div>
  );
}
