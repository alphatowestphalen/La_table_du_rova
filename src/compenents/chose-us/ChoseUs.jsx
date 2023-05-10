import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./chose-us.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChoseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // durée de l'animation en millisecondes
      offset: 100, // décalage (en pixels) de l'élément avant l'animation
      easing: 'ease-in-out', // type de transition de l'animation
      delay: 200, // délai (en millisecondes) avant que l'animation ne démarre
    });
  }, []);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="3" className="text-center mb-4">
            <div className="choose__content">
              <h2>
                Tous les midi et soirs, la Cheffe Nanah ainsi que sa brigade
                tous issus de l'ECOLE HOTELIERE DE LA RIZIERE
                vous proposent:
              </h2>
            </div>

            <div className="features mt-4">
              <div data-aos="zoom-in-right" className="feature1 test">
                <div className="single__feature gauche">
                  <h6>LE MENU DU JOUR</h6>
                  <p>2 entrees au choix,</p>
                  <p>2 plats au choix</p>
                  <p>2 deserts au choix,</p>
                  <p>
                    Retrouver notre menu du jour <a href="https://www.facebook.com/profile.php?id=100089913078909">ici</a>
                  </p>
                </div>

                <div className="single__feature droit">
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChoseUs;
