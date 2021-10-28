import "./sidebar.css";
import { Card, ListGroup } from "react-bootstrap";
export default function SideBar() {
  return (
    <div className="sidebar mt-5">
      <span className="filterHeading">
        <strong>Filters</strong>
      </span>

      <div className="filters mt-5">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Body className="card">
            <Card.Title>Building</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item className="card-building">
                  151 Clarence St
                </ListGroup.Item>
                <ListGroup.Item className="card-building">
                  567 Collins St
                </ListGroup.Item>
                <ListGroup.Item className="card-building">
                  60 Martin Place
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Body className="card">
            <Card.Title>Category</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item className="card-building">
                  151 Clarence St
                </ListGroup.Item>
                <ListGroup.Item className="card-building">
                  567 Collins St
                </ListGroup.Item>
                <ListGroup.Item className="card-building">
                  60 Martin Place
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Body className="card">
            <Card.Title>City</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item className="card-building">
                  Sydney
                </ListGroup.Item>
                <ListGroup.Item className="card-building">
                  Melbourne
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
