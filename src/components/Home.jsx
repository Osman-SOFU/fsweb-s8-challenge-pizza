import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/orderpizza");
  }

  return (
    <div className="home-container">
      <div className="content">
        <img src="../Assets/Iteration-1-assets/logo.svg" alt="Logo" />{" "}
        <p>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </p>
        <button onClick={handleClick} className="order-button">
          ACIKTIM
        </button>
      </div>
    </div>
  );
}
