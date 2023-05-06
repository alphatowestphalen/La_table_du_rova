import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./chose-us.css";

const ChoseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="3" className="text-center mb-4">
            <div className="choose__content">
              <h4>CARTE ET MENU DU JOUR</h4>
              <h2>
                Tous les midi et soirs, la Cheffe Nanah ainsi que sa brigade
                tous issus de l'ECOLE HOTELIERE DE LA RIZIERE a FIANARANTSOA
                vous proposent:
              </h2>
            </div>

            <div className="features mt-4">
              <div className="feature1 test">
                <div className="single__feature gauche">
                  <span>
                    <i class="ri-truck-line"></i>
                  </span>
                  <h6>LE MENU DU JOUR avec un choix</h6>
                  <p>2 entrees,</p>
                  <p>2 plats et</p>
                  <p>2 deserts,</p>
                  <p>
                    Retrouver notre menu du jour <a href="facebook.com">ici</a>
                  </p>
                </div>

                <div className="single__feature droit">
                  <span className="feature__icon-two">
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6>FAIT MAISON- PRODUITS FRAIS</h6>
                  <p>Tout est fait-maison a base de produits frais et de</p>
                  <p>saison.Nous selectionnons rigoureusement tous nos</p>
                  <p>
                    fournisseurs parce que nous sommes tres attaches a la
                    qualite de nos produite et a leur provenance
                  </p>
                  <p>
                    <i class="ri-heart-line"></i>
                  </p>
                </div>
              </div>

              <div className="feature1 mt-3 d-flex align-items-center gap-5">
                <div className="single__feature gauche">
                  <span className="feature__icon-3">
                    <i class="ri-secure-payment-line"></i>
                  </span>
                  <h6>Payement securiser</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="single__feature droit">
                  <span className="feature__icon-4">
                    <i class="ri-24-hours-line"></i>
                  </span>
                  <h6>Service Rapide et efficace</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChoseUs;
