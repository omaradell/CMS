import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export default function AddNavigation() {
  return (
    <Container fluid>
      <Row>
        <p style={{ fontSize: "30px" }} className="m-3">
          Add / Edit Navigation Tab
        </p>{" "}
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Form>
                <Row className="m-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label class="p-1 fw-bold">Page Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Page Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label class="p-1 fw-bold">Tab Name</Form.Label>
                    <Form.Control type="password" placeholder="Tab Name" />
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label class="p-1 fw-bold">URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter URL " />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label class="p-1 fw-bold">SEO Link Title</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="SEO Link Title"
                    />
                  </Form.Group>
                </Row>
                <Row className="m-3 " md={2}>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label class="p-1 fw-bold">Status</Form.Label>
                    <div className="m-3 my-3 form-check form-switch d-inline-flex justify-content-center align-items-center">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        toggle
                      />
                      <label
                        class="m-2 form-check-label fw-bold"
                        for="flexSwitchCheckChecked"
                      >
                        Active{" "}
                      </label>
                    </div>
                    <Row>
                      <Col>
                        <Button
                          style={{ backgroundColor: "#ebf3fc" }}
                          variant="info"
                          type=""
                          className="m-1 rounded-pill"
                        >
                          Products×
                        </Button>{" "}
                      </Col>
                      <Col md={4}>
                        <Button
                          style={{ backgroundColor: "#ebf3fc" }}
                          variant="info"
                          type=""
                          className="m-1 rounded-pill"
                        >
                          Materials ×
                        </Button>{" "}
                      </Col>
                      <Col md={5}>
                        <Button
                          variant="primary"
                          type=""
                          size="sm"
                          className=" m-1 rounded-circle btn-circle"
                        >
                          +
                        </Button>
                        <p className="d-inline-flex justify-content-center">
                          Add Sub Menu tabs
                        </p>{" "}
                      </Col>
                    </Row>
                  </Form.Group>
                  {/* <Row className="d-flex justify-contet-end align-items-center"> */}
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Col className="d-flex justify-contet-start">
                      <Form.Label class="p-1 fw-bold">Appearance</Form.Label>

                      <div class="form-check ">
                        <input
                          class="m-1 form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          class=" form-check-label"
                          for="flexRadioDefault1"
                        >
                          Open in same window
                        </label>
                      </div>

                      <div class="form-check ">
                        <input
                          class="m-1 form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Open in New Window{" "}
                        </label>
                      </div>
                    </Col>
                  </Form.Group>
                </Row>
                {/* </Row> */}

                <Row className="m-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label class="p-1 fw-bold">Sub Page Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Page Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label class="p-1 fw-bold">Sub Tab Name</Form.Label>
                    <Form.Control type="password" placeholder="Sub Tab Name" />
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label class="p-1 fw-bold">URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter URL" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label class="p-1 fw-bold">SEO Link Title</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="SEO Link Title"
                    />
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label class="p-1 fw-bold">Status</Form.Label>
                    <div className="m-3 my-3 form-check form-switch d-inline-flex justify-content-center align-items-center">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        toggle
                      />
                      <label
                        class="m-2 form-check-label fw-bold"
                        for="flexSwitchCheckChecked"
                      >
                        Active{" "}
                      </label>
                    </div>
                  </Form.Group>

                  {/* <Row className="d-flex justify-contet-end align-items-center"> */}
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Col className=" d-flex justify-contet-end align-items-center">
                      <Form.Label class="p-1 fw-bold">Appearance</Form.Label>

                      <div class="form-check ">
                        <input
                          class="m-1 form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          class=" m-1 form-check-label"
                          for="flexRadioDefault1"
                        >
                          Open in same window
                        </label>
                      </div>

                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Open in New Window{" "}
                        </label>
                      </div>
                    </Col>
                  </Form.Group>
                  {/* </Row> */}
                </Row>

                <Row>
                  <Col className="d-flex  justify-content-end">
                    <Button variant="primary" size="lg" type="submit">
                      Publish
                    </Button>
                  </Col>
                  <Col className="">
                    <Button variant="secondary" size="lg" type="cancel">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>{" "}
        </Col>
      </Row>
    </Container>
  );
}
