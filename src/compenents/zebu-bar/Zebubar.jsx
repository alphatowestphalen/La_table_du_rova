import React from "react";
import "./zebubar.css";
import { Container, Row, Col } from "reactstrap";
import appImg from "../../assets/images/app.png";

const Zebubar = () => {
  return (
    <section>
      <Container className="app__container">
        <Row>
          <Col lg="6" md="6">
            <div className="app__img">
              <img src={appImg} alt="" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="app__content">
              <h5>Decouvrire aussi Zebubar Ambalavao</h5>
              <h2 className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                hic nihil voluptas modi corporis? Neque accusantium a, quas eos
                nam aliquid, inventore labore doloremque voluptatem blanditiis
                deleniti culpa error odio.
              </p>
              <div className="app__btns d-flex align-item-center gap-5 mt-4">
                <button className="btn__apple d-flex align-item-center gap-3">
                  <i class="ri-apple-line"></i>
                  <a href="zebubar.com">Decouvrire</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Zebubar;
