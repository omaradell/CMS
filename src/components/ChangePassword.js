import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function ChangePassword() {
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
          <div className="d-flex justify-content-center"> 
            <p> Change Password</p>
          </div>
          <Row className="d-flex justify-content-center" >
            <Form.Group>
              <Form.Label className="d-flex justify-content-start">
                New Password
              </Form.Label>
              <Form.Control type="text" placeholder="Enter New Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="d-flex justify-content-start">
                Confirm Password
              </Form.Label>
              <Form.Control type="text" placeholder="Enter New Password" />
            </Form.Group>
            <Col className="d-flex  justify-content-center p-2">
              <Button variant="primary" type="submit" className="m-2">
                Save Password
              </Button>
              <Button variant="primary" type="cancel" className="m-2">
                Discard
              </Button>
            </Col>
            
          </Row>
        </Row>
      </Card>
    </Form>
  );
}
