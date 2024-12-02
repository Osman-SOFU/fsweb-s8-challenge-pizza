describe("OrderPizza Component", () => {
  it("should allow typing in the order note input", () => {
    cy.visit("http://localhost:5173/orderpizza"); // Sayfayı ziyaret et

    const orderNote = "Lütfen acılı olsun!"; // Giriş yapılacak metin

    // Sipariş notu inputuna yaz
    cy.get("#order-note").type(orderNote).should("have.value", orderNote); // Girilen metni doğrula
  });
});
describe("OrderPizza Component", () => {
  it("should allow user to select multiple extras and update the total price", () => {
    cy.visit("http://localhost:5173/orderpizza"); // Sipariş sayfasına git

    // İlk 4 malzemeyi seç
    cy.get("#extra-0").check().should("be.checked"); // Pepperoni
    cy.get("#extra-1").check().should("be.checked"); // Tavuk Izgara
    cy.get("#extra-2").check().should("be.checked"); // Mısır
    cy.get("#extra-3").check().should("be.checked"); // Mısır

    // Seçilen ekstra malzemeleri doğrula
    cy.get(".extra-options input:checked").should("have.length", 4); // 4 malzeme seçildiğini doğrula

    // Fiyatın güncellenmiş olduğunu doğrula
    cy.get(".order-summary p.mb-2")
      .should("contain", "Toplam:")
      .and("not.contain", "85.50₺"); // Toplam fiyatın değiştiğini doğrula

    // Ekstra malzemelerle birlikte toplamın doğru şekilde hesaplanıp hesaplanmadığını kontrol et
    cy.get(".order-summary p.mb-1")
      .should("contain", "Seçimler:") // Ekstra malzeme fiyatının doğru şekilde yansıtıldığını kontrol et
      .and("contain", "20.00₺"); // 4 malzeme seçildiğinde 20₺ eklenmesi beklenir (4 x 5₺)
  });
});
describe("OrderPizza Component", () => {
  it("should submit the form and redirect to success page", () => {
    cy.visit("http://localhost:5173/orderpizza"); // Sipariş sayfasına git

    // Boyut ve hamur seçimi yap
    cy.get('input[type="radio"][value="Büyük"]').check(); // Boyut: Büyük
    cy.get("#dough-select").select("İnce"); // Hamur: İnce

    // 4 malzeme seç
    cy.get("#extra-0").check(); // Pepperoni
    cy.get("#extra-1").check(); // Tavuk Izgara
    cy.get("#extra-2").check(); // Mısır
    cy.get("#extra-3").check(); // Sarımsak

    // Sipariş notu ekle
    cy.get("#order-note").type("Lütfen acı olsun!"); // Sipariş notu

    // Sipariş sayısını artır
    cy.get(".quantity-selector button").contains("+").click(); // Sipariş miktarını 2 yap

    // Formu gönder
    cy.get('button[type="submit"]').click();

    // Başarı sayfasına yönlendirilip yönlendirilmediğini doğrula
    cy.url().should("include", "/success"); // URL'nin success sayfasına yönlendirdiğini kontrol et
  });
});
