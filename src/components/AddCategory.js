import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CategoryIcon from "./CategoryIcon";

export default function AddCategory() {
  return (
    <Form>
      <h2>Add / Edit Category</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Category Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>Products No.</Form.Label>
          <Form.Control type="text" placeholder="Products" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Meta Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Meta title" />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>Meta Keywords</Form.Label>
          <Form.Control type="text" placeholder="Meta Keywords" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Status</Form.Label>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              toggle
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Active{" "}
            </label>
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Col className="d-flex">
            <Col>
              <Form.Label>Page URL</Form.Label>
            </Col>
            <Col>
              <a href="www.google.com">www.google.com</a>
            </Col>
            <Col>
              <Button
                variant="primary"
                type="submit"
                className="d-flex justify-content-end"
              >
                Edit
              </Button>
            </Col>
          </Col>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Category Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Row>
        <CategoryIcon></CategoryIcon>
      </Row>
      <Row>
        <Col className="d-flex  justify-content-end">
          <Button variant="primary" type="submit">
            Publish
          </Button>
        </Col>
        <Col className="">
          <Button variant="secondary" type="cancel">
            Delete
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
