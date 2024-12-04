import { useHistory } from "react-router-dom";
import "./Home.css";
import HomeTwo from "../components/HomeTwo";
import HomeFooter from "../components/HomeFooter";

export default function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/orderpizza");
  }

  const menuItems = [
    { img: "Assets/Iteration-2-aseets/icons/1.svg", label: "YENİ! Kore" },
    { img: "Assets/Iteration-2-aseets/icons/2.svg", label: "Pizza" },
    { img: "Assets/Iteration-2-aseets/icons/3.svg", label: "Burger" },
    { img: "Assets/Iteration-2-aseets/icons/4.svg", label: "Kızartmalar" },
    { img: "Assets/Iteration-2-aseets/icons/5.svg", label: "Fast food" },
    { img: "Assets/Iteration-2-aseets/icons/6.svg", label: "Gazlı İçecek" },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner">
          <div className="text-contain">
            <img
              className="logo"
              src="Assets/Iteration-1-assets/logo.svg"
              alt="Logo"
            />
            <h2 className="firsat">Fırsatı Kaçırma</h2>
            <h1 className="slogan">
              KOD ACIKTIRIR <br />
              Pizza, DOYURUR
            </h1>
            <a href="#" className="btn-aciktim" onClick={handleClick}>
              <span className="btn-text">AÇIKTIM</span>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={`Icon ${index + 1}`} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>
      <HomeTwo></HomeTwo>
      <HomeFooter></HomeFooter>
    </>
  );
}
