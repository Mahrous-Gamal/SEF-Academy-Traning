import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import { Col, Container, Row } from "react-bootstrap";
import itlogo from "../../../src/Assets/Images/it.jpg";

//style
import MenuCheckBoxs from "../menu-checkboxs/MenuCheckBoxs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./JobApp.css";

const JobApp = () => {
  return (
    <>
      {/* <Header /> */}

      {/* <BackgroundLayer /> */}
      <section className="job-app-screen_1 text-white">
      <div className=" bg-image">
        <div className="bg-layer">
        <Container className="pt-3">
          <Row className="justify-content-md-center">
            <Col className='mb-4'>
              <p className="mt-0 h4 line-after">
                Jobs
              </p>

              {/* <p className="line mb-1 "></p> */}
              <span>
                <small>6th june 2023</small>
              </span>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <h2>Locating For a Job</h2>
              <span>
                Hear ypu can find your beast match between 1000s and updated and
                available positions.
              </span>
            </Col>
            <Col xs={12} md={6}>
              <form class="form-inline my-1 my-lg-0 mt-3 row align-items-center position-relative">
                <input
                  class="form-control mr-sm-2 mainLoginInput search flex-fill"
                  type="search"
                  placeholder="&#xF002; Search "
                  aria-label="Search"
                />
                  <i class="fa-solid fa-magnifying-glass search-icon main-color "></i>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>

                <span className="bar-icon">
                  <FontAwesomeIcon icon={faBars} size="lg" />{" "}
                </span>
              </form>
            </Col>
          </Row>
        </Container>

        <Container className="apply-job justify-content-between mt-3 ">
          <Row>
            <Col md={4}>
              <MenuCheckBoxs />
            </Col>
            <Col md={8} xs={10}>
              <div className="contacts-job">
                <br></br>
                <div className="comp-name d-flex justify-content-between align-items-center  ">
                  <div className="job-company-post d-flex  ">
                    <span className="col-xs-12">
                      <img src={itlogo} alt="company logo" />
                    </span>
                    <div className="col-xs-12 ms-2 ">
                      <p className="job-titel mb-0">Frontend Developer</p>
                      <p className="minmiz-font">
                        <small>Lorem ipsum dolor sit.</small>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="mb-1 my-2">
                      5000 EGP - 8000 EGP per month{" "}
                      <span className="onsite-mob-view mt-0 onsite">
                        <span className="onsite-icon">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        Onsite
                      </span>
                    </div>
                    <p className="onsite-web-view mt-0 onsite  mb-0 ">
                      <span className="onsite-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      Onsite
                    </p>
                  </div>
                </div>
                <br />
                <div className="comp-post my-4">
                  <h4 className="fw-bold">Yousef Ehab Farok</h4>
                  <p>Computer Science, international islamic university</p>
                </div>
                <div className="filed-appliction">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group
                        className=" email-field fields"
                        as={Col}
                        controlId="formGridEmail"
                      >
                        <Form.Label className='fw-bold'>Email</Form.Label>
                        <Form.Control
                          className="input-fields"
                          type="email"
                          placeholder=""
                          controlId="formGridEmail"
                        />
                      </Form.Group>
                      <Form.Group
                        className=" fields"
                        as={Col}
                        controlId="formGridEmail"
                      >
                        <Form.Label className='fw-bold'>Years of Experinse</Form.Label>
                        <Form.Control
                          className="input-field fields"
                          type="number"
                        />
                      </Form.Group>
                    </Row>
                    <Form.Group className=" ">
                      <Form.Label className='fw-bold'>Phone Number</Form.Label>
                      <Form.Control
                        className="input-field"
                        type="number"
                        placeholder=""
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="my-2">
                  <div className="my-2 fw-bold">Upload CV</div>
                  <div className="upload-cv ">
                    <div>
                      <FontAwesomeIcon icon={faCloudArrowUp} size="2xl" />{" "}
                    </div>
                    <div className="text-center">
                      <p className="text-center">
                        Drag & Drop file or{" "}
                        <span className="spcial-style">Browser</span>
                      </p>
                      <p className="small-style-text m-auto">
                        <small className="text-break text-lighjt small-style-text">
                          supported formate : JPEG, PNG, GIF, MP4, PDF, PSD,
                          Al,Word, PPT
                        </small>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="btn-submit-app text-end my-3">
                  <span className="mx-3  ">
                    <Button variant="warning">Submit</Button>
                  </span>
                  <span>
                    <Button variant="secondary">
                      Cancel
                    </Button>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
              </div>
              </div>
      </section>
      {/* <ButtonTop /> */}
      {/* <Footer /> */}
    </>
  );
};

export default JobApp;
