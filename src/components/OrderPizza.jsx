import { useHistory } from "react-router-dom";
import {
  Form,
  Label,
  Button,
  Card,
  CardBody,
  Input,
  CardText,
  FormGroup,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import "./OrderPizza.css";
import axios from "axios";
import Success from "./Success";

export default function OrderPizza({ onSubmit }) {
  const history = useHistory();

  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [extrasError, setExtrasError] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(85.5);
  const [orderData, setOrderData] = useState(null); // orderData'yı state olarak tanımladık

  const extraOptions = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
  ];

  useEffect(() => {
    const extrasTotal = extras.length * 5;
    setTotal(85.5 + extrasTotal);
  }, [extras, quantity]);

  const handleExtraChange = (extra) => {
    if (extras.includes(extra)) {
      setExtras(extras.filter((item) => item !== extra));
    } else if (extras.length < 10) {
      setExtras([...extras, extra]);
    }
    setExtrasError("");
  };

  const validateExtras = () => {
    if (extras.length < 4) {
      setExtrasError("En az 4 adet malzeme seçmelisiniz.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validasyonu
    if (size && dough && validateExtras()) {
      // Sipariş verilerini oluştur
      const newOrderData = {
        size,
        dough,
        extras,
        note,
        quantity,
        total: (total * quantity).toFixed(2),
      };
      setOrderData(newOrderData); // orderData'yı güncelledik
      onSubmit(newOrderData);

      try {
        // API'ye POST isteği gönder
        const response = await axios.post(
          "https://reqres.in/api/pizza",
          newOrderData
        );

        // Gelen yanıtı console'a yazdır
        console.log("Sipariş Özeti: ", response.data);

        // Sipariş başarılı olduğunda success sayfasına yönlendir
        history.push("/success");
      } catch (error) {
        console.error("Sipariş gönderilirken bir hata oluştu: ", error);
      }
    } else {
      alert("Lütfen gerekli alanları doldurunuz.");
    }
  };

  return (
    <>
      <div className="order-page">
        <div className="app-header">
          <img src="../Assets/Iteration-1-assets/logo.svg" alt="Logo" />
          <p className="anasayfa">
            Anasayfa - <span>Sipariş Oluştur</span>
          </p>
        </div>

        <div className="order-content">
          <Card className="order-card">
            <CardBody>
              <h2>Position Absolute Acı Pizza</h2>
              <div className="d-flex justify-content-between align-items-center mb3">
                <h3 className="mb-0">85.50₺</h3>
                <span>4.9 (200)</span>
              </div>
              <CardText className="text">
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
                acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir
                pizzaya bazen pizzetta denir.
              </CardText>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="secim">
                  <div className="size-options">
                    <Label className="boyut" for="size">
                      Boyut Seç *
                    </Label>
                    <div className="d-flex flex-column">
                      {["Küçük", "Orta", "Büyük"].map((boyut, index) => (
                        <FormGroup check inline key={index}>
                          <Label check>
                            <Input
                              type="radio"
                              name="size"
                              value={boyut}
                              onChange={(e) => setSize(e.target.value)}
                              required={index === 0}
                            />{" "}
                            {boyut}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </div>

                  <div className="custom-select">
                    <Label className="hamur" for="dough-select">
                      Hamur Seç*
                    </Label>
                    <Input
                      type="select"
                      id="dough-select"
                      value={dough}
                      onChange={(e) => setDough(e.target.value)}
                      required
                    >
                      <option value="">Hamur Kalınlığı</option>
                      <option value="Kalın">Kalın</option>
                      <option value="İnce">İnce</option>
                    </Input>
                  </div>
                </FormGroup>

                <FormGroup>
                  <Label className="ekMalzeme">Ek Malzemeler</Label>
                  <p className="small">
                    En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺
                  </p>
                  <div className="extra-options">
                    {extraOptions.map((extra, index) => (
                      <FormGroup check inline key={index}>
                        <Label check>
                          <Input
                            type="checkbox"
                            id={`extra-${index}`}
                            value={extra}
                            checked={extras.includes(extra)}
                            onChange={() => handleExtraChange(extra)}
                            disabled={
                              extras.length >= 10 && !extras.includes(extra)
                            }
                          />{" "}
                          {extra}
                        </Label>
                      </FormGroup>
                    ))}
                  </div>
                  {extrasError && (
                    <p className="text-danger small">{extrasError}</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <div className="hidden-input">
                    <Label for="name">İsim:</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      minLength="3"
                      placeholder="En az 3 karakter girin"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className="siparis" for="order-note">
                    Sipariş Notu
                  </Label>
                  <Input
                    type="textarea"
                    id="order-note"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="quantity-selector">
                    <Button
                      color="warning"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity}</span>
                    <Button
                      color="warning"
                      onClick={() => setQuantity(Math.max(1, quantity + 1))}
                    >
                      +
                    </Button>
                  </div>
                  <div className="order-summary">
                    <p className="mb-0">Sipariş Toplamı</p>
                    <p className="mb-1">
                      Seçimler: {(total - 85.5).toFixed(2)}₺
                    </p>
                    <p className="mb-2">
                      Toplam: {(total * quantity).toFixed(2)}₺
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <Button type="submit" className="btn-success" size="lg">
                    Siparişi Ver
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>

      {orderData && <Success orderData={orderData} />}
    </>
  );
}
