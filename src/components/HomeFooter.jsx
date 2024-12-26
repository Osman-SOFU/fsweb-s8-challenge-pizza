import "./HomeFooter.css";
import img1 from "../../Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import img2 from "../../Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import img3 from "../../Assets/Iteration-2-aseets/footer/icons/icon-3.png";
import img4 from "../../Assets/Iteration-2-aseets/footer/icons/Twitter-İmage.png";
import img5 from "../../Assets/Iteration-2-aseets/footer/insta/li-0.png";
import img6 from "../../Assets/Iteration-2-aseets/footer/insta/li-1.png";
import img7 from "../../Assets/Iteration-2-aseets/footer/insta/li-2.png";
import img8 from "../../Assets/Iteration-2-aseets/footer/insta/li-3.png";
import img9 from "../../Assets/Iteration-2-aseets/footer/insta/li-4.png";
import img10 from "../../Assets/Iteration-2-aseets/footer/insta/li-5.png";

export default function HomeFooter() {
  return (
    <footer>
      <section className="footer">
        <div className="footer-left">
          <h1>
            Teknolojik <br /> Yemekler
          </h1>
          <p>
            <img src={img1} className="footer-icon" />
            341 Londonderry Road,
            <br />
            Istanbul Türkiye
          </p>
          <p>
            <img src={img2} className="footer-icon" />
            aciktim@teknolojikyemekler.com
          </p>
          <p>
            <img src={img3} className="footer-icon" />
            +90 216 123 45 67
          </p>
        </div>

        <div className="footer-middle">
          <h3>Hot Menu</h3>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>

        <div className="footer-right">
          <h3>Instagram</h3>
          <div className="instagram-photos">
            {[img5, img6, img7, img8, img9, img10].map((num) => (
              <img key={num} src={`${num}`} alt={`Instagram post ${num + 1}`} />
            ))}
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>&copy; 2023 Teknolojik Yemekler.</p>
        <img src={img4} alt="twitter" />
      </div>
    </footer>
  );
}
