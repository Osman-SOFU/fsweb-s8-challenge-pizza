import "./HomeTwo.css";

export default function HomeTwo() {
  const menuItems = [
    { img: "Assets/Iteration-2-aseets/icons/1.svg", label: "Ramen" },
    { img: "Assets/Iteration-2-aseets/icons/2.svg", label: "Pizza" },
    { img: "Assets/Iteration-2-aseets/icons/3.svg", label: "Burger" },
    { img: "Assets/Iteration-2-aseets/icons/4.svg", label: "French fries" },
    { img: "Assets/Iteration-2-aseets/icons/5.svg", label: "Fast food" },
    { img: "Assets/Iteration-2-aseets/icons/6.svg", label: "Soft drinks" },
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
                <img src="Assets/Iteration-2-aseets/icons/1.svg" alt="Ramen" />
                <span>Ramen</span>
              </button>
            </a>
          </li>

          {/* Pizza Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-pizza-tab">
                <img src="Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza" />
                <span>Pizza</span>
              </button>
            </a>
          </li>

          {/* Burger Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-burger-tab">
                <img src="Assets/Iteration-2-aseets/icons/3.svg" alt="Burger" />
                <span>Burger</span>
              </button>
            </a>
          </li>

          {/* French Fries Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-french-fry-tab">
                <img
                  src="Assets/Iteration-2-aseets/icons/4.svg"
                  alt="French Fries"
                />
                <span>French Fries</span>
              </button>
            </a>
          </li>

          {/* Fast Food Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-fast-food-tab">
                <img
                  src="Assets/Iteration-2-aseets/icons/5.svg"
                  alt="Fast Food"
                />
                <span>Fast Food</span>
              </button>
            </a>
          </li>

          {/* Soft Drinks Butonu */}
          <li>
            <a href="http://localhost:5173/orderpizza#">
              <button id="pills-drinks-tab">
                <img
                  src="Assets/Iteration-2-aseets/icons/6.svg"
                  alt="Soft Drinks"
                />
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
              <img
                src="Assets/Iteration-2-aseets/pictures/food-1.png"
                alt="Terminal Pizza"
              />
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
              <img
                src="Assets/Iteration-2-aseets/pictures/food-2.png"
                alt="Position Absolute Acı Pizza"
              />
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
              <img
                src="Assets/Iteration-2-aseets/pictures/food-3.png"
                alt="useEffect Tavuklu Burger"
              />
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
