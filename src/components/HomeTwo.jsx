import "./HomeTwo.css";
import img1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import img2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import img3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import img4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import img5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import img6 from "../../Assets/Iteration-2-aseets/icons/6.svg";
import img7 from "../../Assets/Iteration-2-aseets/pictures/food-1.png";
import img8 from "../../Assets/Iteration-2-aseets/pictures/food-2.png";
import img9 from "../../Assets/Iteration-2-aseets/pictures/food-3.png";

export default function HomeTwo() {
  const menuItems = [
    { img: img1, label: "Ramen" },
    { img: img2, label: "Pizza" },
    { img: img3, label: "Burger" },
    { img: img4, label: "French fries" },
    { img: img5, label: "Fast food" },
    { img: img6, label: "Soft drinks" },
  ];
  return (
    <>
      <div className="container">
        {/* div 1 */}
        <div className="div-1">
          {/* Özel Lezzetus */}
          <div className="text-special">
            <div className="special-lezzetus">Özel Lezzetus</div>

            {/* Acı Burger */}
            <div className="spicy-burger">Position:Absolute Acı Burger</div>

            {/* Sipariş Ver Button */}
            <a href="#" className="order-button">
              <span className="order-text">SİPARİŞ VER</span>
            </a>
          </div>
        </div>
        <div className="right-side">
          <div className="div-2">
            <div className="text-hack">
              {/* Hackathlon Burger Menü */}
              <div className="burger-menu">Hackathlon Burger Menü</div>

              {/* Sipariş Ver Button */}
              <a href="#" className="burger-button">
                <span className="burger-text">SİPARİŞ VER</span>
              </a>
            </div>
          </div>

          <div className="div-3">
            <div className="text-cok">
              {/* Çoooook hızlı npm gibi kurye */}
              <div className="fast-delivery">
                <p>
                  Çoooook <span>hızlı npm gibi kurye</span>
                </p>
              </div>

              {/* Sipariş Ver Button */}
              <a href="#" className="siparis-button">
                <span className="siparis-text">SİPARİŞ VER</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="alt-text">
        <p className="text-en">en çopk paketlenen menüler</p>
        <p className="text-acik">Acıktıran Kodlara Doyuran Lezzetler</p>
      </div>
      <div className="section">
        <ul id="pills-tab">
          {/* Ramen Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-ramen-tab">
                <img src={img1} alt="Ramen" />
                <span>Ramen</span>
              </button>
            </a>
          </li>

          {/* Pizza Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-pizza-tab">
                <img src={img2} alt="Pizza" />
                <span>Pizza</span>
              </button>
            </a>
          </li>

          {/* Burger Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-burger-tab">
                <img src={img3} alt="Burger" />
                <span>Burger</span>
              </button>
            </a>
          </li>

          {/* French Fries Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-french-fry-tab">
                <img src={img4} alt="French Fries" />
                <span>French Fries</span>
              </button>
            </a>
          </li>

          {/* Fast Food Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-fast-food-tab">
                <img src={img5} alt="Fast Food" />
                <span>Fast Food</span>
              </button>
            </a>
          </li>

          {/* Soft Drinks Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-drinks-tab">
                <img src={img6} alt="Soft Drinks" />
                <span>Soft Drinks</span>
              </button>
            </a>
          </li>
        </ul>
      </div>

      <section className="menu-card">
        <div className="menu-container">
          <div className="pizza-container">
            {/* Resim Alanı */}
            <div className="image-container">
              <img src={img7} alt="Terminal Pizza" />
            </div>

            {/* Başlık ve Alt Bilgiler */}
            <div className="text-container">
              {/* Başlık */}
              <h2 className="title">Terminal Pizza</h2>

              {/* Puan ve Fiyat */}
              <div className="rating-price-container">
                <span className="rating">4.9</span>
                <span className="users">(200)</span>
                <span className="price">₺50.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-container">
          <div className="aci-container">
            {/* Resim Alanı */}
            <div className="image-container">
              <img src={img8} alt="Position Absolute Acı Pizza" />
            </div>

            {/* Başlık ve Alt Bilgiler */}
            <div className="text-container">
              {/* Başlık */}
              <h2 className="title">Position Absolute Acı Pizza</h2>

              {/* Puan ve Fiyat */}
              <div className="rating-price-container">
                <span className="rating">4.9</span>
                <span className="users">(200)</span>
                <span className="price">₺60.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-container">
          <div className="tavuk-container">
            {/* Resim Alanı */}
            <div className="image-container">
              <img src={img9} alt="useEffect Tavuklu Burger" />
            </div>

            {/* Başlık ve Alt Bilgiler */}
            <div className="text-container">
              {/* Başlık */}
              <h2 className="title">useEffect Tavuklu Burger</h2>

              {/* Puan ve Fiyat */}
              <div className="rating-price-container">
                <span className="rating">4.9</span>
                <span className="users">(200)</span>
                <span className="price">₺60.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
