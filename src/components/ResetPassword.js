import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function ResetPassword() {
  return (
    <Form>
      <h2 >Customers</h2>
      <Card className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Card.Img
            variant="top"
            src="./image1.png"
            style={{ width: "30%", height: "60%" }}
            class="card-img-top p-2 bd-highlight"
          />
          <Row className="d-flex justify-content-center">
            <Form.Group>
              <Form.Label className="d-flex justify-content-center">
                Reset Password
              </Form.Label>
              <Form.Control type="text" placeholder="Enter New Password" />
            </Form.Group>
            <Col className="d-flex  justify-content-center p-2">
              <Button variant="primary" type="submit">
                Confirm
              </Button>
            </Col>
            <Row>
              <Form.Label className="d-flex  justify-content-center p-2">
                Reset code
              </Form.Label>
            </Row>
          </Row>
        </Row>
      </Card>
    </Form>
  );
}
