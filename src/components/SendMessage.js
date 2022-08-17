import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CategoryIcon from "./CategoryIcon";

export default function SendMessage() {
  return (
    <Form>
      <h2>Customer</h2>
      <Card classname="">
        <Row className="mb-3 p-2">
          <h4> Send Message</h4>
          <Form.Group as={Col} controlId="">
            {/* <Form.Label>To</Form.Label> */}
            <Form.Control type="text" placeholder="To:" />
          </Form.Group>
        </Row>
        <Row className="mb-3 p-2">
          <Form.Group as={Col} controlId="">
            {/* <Form.Label>Products No.</Form.Label> */}
            <Form.Control type="text" placeholder="Subject:" />
          </Form.Group>
        </Row>
        <Row className="mb-3 p-2">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Row>
        <Row>
          <Col className="d-flex  justify-content-end m-auto p-3">
            <Button variant="primary" type="submit">
              Publish
            </Button>
            <Button variant="secondary" type="cancel">
              Delete
            </Button>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
