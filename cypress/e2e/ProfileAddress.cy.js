import navbar from "../pageObject/navbar/navbar";
import login from "../pageObject/login/loginPage";
import address from "../pageObject/profile/address";

describe("profile address test", () => {
  beforeEach(() => {
    cy.visit("https://www.godtowathailand.com/");
    navbar.element.navbarFunc().click();
    navbar.element.login().click();
    login.login("62050194@kmitl.ac.th", "123456789Kmitl");
    address.element.addressBtn().click();
  });

  it("ไม่กรอกชื่อ", () => {
    address.element.addAddressBtn().click();
    address.element.fullNameInput().clear();
    address.element.phoneInput().type("0123456789");
    address.element.addressInput().type("test");
    address.element.postalInput().type("12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_textMemberName").should("contain", "กรุณากรอกชื่อ");
  });

  it("ไม่กรอกหมายเลขโทรศัพท์", () => {
    address.element.addAddressBtn().click();
    address.element.fullNameInput().type("test");
    address.element.phoneInput().clear();
    address.element.addressInput().type("test");
    address.element.postalInput().type("12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_textPhoneNumber").should(
      "contain",
      "รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง"
    );
  });

  it("กรอกหมายเลขโทรศัพท์ไม่ครบ", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "012345678", "test", "12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_textPhoneNumber").should(
      "contain",
      "รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง"
    );
  });

  it("กรอกหมายเลขโทรศัพท์เป็นภาษาไทย", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "ทดสอบ", "test", "12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_textPhoneNumber").should(
      "contain",
      "รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง"
    );
  });

  it("กรอกหมายเลขโทรศัพท์เป็นภาษาอังกฤษ", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "test", "test", "12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_textPhoneNumber").should(
      "contain",
      "รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง"
    );
  });

  it("ไม่กรอกที่อยู่", () => {
    address.element.addAddressBtn().click();
    address.element.fullNameInput().type("test");
    address.element.phoneInput().type("0123456789");
    address.element.addressInput().clear();
    address.element.postalInput().type("12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_textEditAddress").should("contain", "กรุณากรอกที่อยู่");
  });

  it("ไม่กรอกรหัสไปรษณีย์", () => {
    address.element.addAddressBtn().click();
    address.element.fullNameInput().type("test");
    address.element.phoneInput().type("0123456789");
    address.element.addressInput().type("test");
    address.element.postalInput().clear();
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_customerPostal").should(
      "contain",
      "รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง"
    );
  });

  it("กรอกรหัสไปรษณีย์ไม่ครบ", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "0123456789", "test", "1234");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_customerPostal").should(
      "contain",
      "รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง"
    );
  });

  it("กรอกรหัสไปรษณีย์เป็นภาษาไทย", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "0123456789", "test", "ทดสอบ");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_customerPostal").should(
      "contain",
      "รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง"
    );
  });

  it("กรอกรหัสไปรษณีย์เป็นภาษาอังกฤษ", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "0123456789", "test", "test");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_customerPostal").should(
      "contain",
      "รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง"
    );
  });

  it("ไม่เลือกจังหวัด", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "0123456789", "test", "12345");
    address.element.countryDropdown().select("Thailand");
    address.element.saveAddressBtn().click();
    cy.get("#divError_customerRegionsID").should("contain", "กรุณากรอกจังหวัด");
  });

  it("ไม่เลือกเขต/อำเภอ", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "0123456789", "test", "12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.saveAddressBtn().click();
    cy.get("#divError_customerDistrictID").should(
      "contain",
      "กรุณากรอกเขต/อำเภอ"
    );
  });

  it("ไม่เลือกแขวง/ตำบล", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "0123456789", "test", "12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
    cy.get("#divError_customerSubDistrictID").should(
      "contain",
      "กรุณากรอกแขวง/ตำบล"
    );
  });

  it("เพิ่มที่อยู่ในการจัดส่ง", () => {
    address.element.addAddressBtn().click();
    address.addAddress("test", "0123456789", "test", "12345");
    address.element.countryDropdown().select("Thailand");
    address.element.regionsDropdown().select("กรุงเทพมหานคร");
    address.element.districtDropdown().select("ลาดกระบัง");
    address.element.subDistrictDropdown().select("ลาดกระบัง");
    address.element.saveAddressBtn().click();
  });

  it("แก้ไขที่อยู่ในการจัดส่ง", () => {
    cy.get(
      ":nth-child(2) > :nth-child(4) > .editMemAdrrShipping > .svg-inline--fa > path"
    ).click();
    cy.get("h1").should("contain", "แก้ไขที่อยู่ในการจัดส่ง");
    address.addAddress("test", "0123456789", "test", "12345");
    address.element.saveAddressBtn().click();
  });

  it("ลบที่อยู่ในการจัดส่ง", () => {
    cy.get(
      ":nth-child(2) > :nth-child(5) > .delMemAdrrShipping > .svg-inline--fa"
    ).click();
    cy.get('[data-bb-handler="confirm"]').click();
  });
});
