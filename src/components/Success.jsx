import React, { useEffect } from "react";
import "./Success.css";
import HomeFooter from "../components/HomeFooter.jsx";
import img1 from "../../Assets/Iteration-1-assets/logo.svg";

export default function Success({ orderData }) {
  useEffect(() => {
    document.documentElement.scrollTop = 0; // veya
    document.body.scrollTop = 0; // Sayfayı üst kısımdan başlat
  }, []);

  return (
    <>
      <div className="success-page">
        <div className="success-header">
          <img src={img1} alt="Logo" />
        </div>
        <div className="success-content">
          <p className="lezzet">lezzetin yolda</p>
          <p className="text-lezzet">SİPARİŞ ALINDI!</p>
          <div className="siparis-ozet">
            <p className="position">Position Absolute Acı Pizza</p>
            <p>
              Boyut: <span className="highlight">{orderData.size}</span>
            </p>
            <p>
              Hamur: <span className="highlight">{orderData.dough}</span>
            </p>
            <p>
              Ek Malzemeler:{" "}
              <span className="highlight">{orderData.extras.join(", ")}</span>
            </p>
          </div>
          <div className="sonuc">
            <h3>Sipariş Toplamı</h3>
            <p>Seçimler: {(orderData.total - 85.5).toFixed(2)}₺</p>
            <p>Toplam: {orderData.total}₺</p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}
