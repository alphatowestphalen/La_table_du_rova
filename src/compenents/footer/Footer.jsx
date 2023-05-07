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
                  Nous sommes une jeune équipe et vos avis et suggestions nous seront très utiles. <br />
                  Vous pouvez nous les communiquer sur notre adresse e-mail : latabledurova@gmail.com
                </p>
              </div>
            </Col>
            <Col mb="4" lg="2" sm="6">
              <h5 className="footer__link-title">Ouverture</h5>

              <ListGroup>
                
                  <ListGroupItem className="link__item">
                    <p>Jour d' ouverture: 7j/7j</p>
                  </ListGroupItem>

                  <ListGroupItem className="link__item">
                    <p>Heure d'ouverture: 09h-21h</p>
                  </ListGroupItem>
              </ListGroup>
            </Col>

            <Col mb="4" lg="3" sm="6">
              <h5 className="footer__link-title">Info</h5>

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
                  <i class="ri-map-pin-line"></i> <a href="https://www.google.fr/maps/place/La+Table+du+Rova/@-21.4598125,47.0742322,17z/data=!3m1!4b1!4m6!3m5!1s0x21e7bf383e6d3761:0x861be45d60ba5ccb!8m2!3d-21.4598125!4d47.0768125!16s%2Fg%2F11txq42gx5">Rova Fianarantsoa</a> 
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-facebook-line"></i> <a href="https://www.facebook.com/profile.php?id=100089913078909"> facebook </a>
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-mail-line"></i> latabledurova@gmail.com
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-whatsapp-line"></i> <a href="https://www.facebook.com/profile.php?id=100089913078909"> +261 34 72 545 75 <br /> +261 34 50 165 45 </a>
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-phone-line"></i> +261 34 72 545 75 <br /> +261 34 50 165 45 
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
                <p>Cette site web est entraint de developement</p>
            </Col>
            </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
