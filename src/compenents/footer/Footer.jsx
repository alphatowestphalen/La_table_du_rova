import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Return & Refund",
    url: "#",
  },
  {
    display: "Payment Mehod",
    url: "#",
  },
];

const footerLinks = [
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Membres",
    url: "#",
  },
  {
    display: "A Propos",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className="d-flex align-items-center gap-1 mb-4">
                  <span>
                    <i class="ri-restaurant-2-line"></i>
                  </span>{" "}
                  LA TABLE DU ROVA
                </h2>
                <p>
                  Lorem upsom is a toogle footer in the caniva where I need. but
                  she is an another way to get a success in the develope
                </p>
              </div>
            </Col>
            <Col mb="4" lg="2" sm="6">
              <h5 className="footer__link-title">Quick links</h5>

              <ListGroup>
                {footerQuickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col mb="4" lg="3" sm="6">
              <h5 className="footer__link-title">Info links</h5>

              <ListGroup>
                {footerLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Contact</h5>
              <ListGroup>
                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-map-pin-line"></i> Rova Fianarantsoa
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-mail-line"></i> latabledurova@gmail.com
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-phone-line"></i> +261 34 56 775 69
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer__bottom">
        <Container>
            <Row>
            <Col lg='12'>
                <p>copyright Mai 2023, developed by Tech_Treka. All rights reserved</p>
            </Col>
            </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
