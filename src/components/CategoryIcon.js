import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CategoryIcon() {
  return (
    <>
      <h3>Card Title</h3>

      <Card className="m-3" style={{ width: "6rem" }}>
        <Card.Body>
          <Button variant="primary">+</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CategoryIcon;
