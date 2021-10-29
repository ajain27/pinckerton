import "./sidebar.css";
import { Card, ListGroup } from "react-bootstrap";

export default function SideBar() {

  var buildings = require('../../xhr/buildings.json');
  var categories = require('../../xhr/categories.json');


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
                {
                  buildings && buildings.length > 0 && buildings.map(b => (
                    <ListGroup.Item className="card-building">
                  {b.name}
                </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Body className="card">
            <Card.Title>Category</Card.Title>
            <Card.Text>
              <ListGroup>
              {
                  categories && categories.length > 0 && categories.map(c => (
                    <ListGroup.Item className="card-building">
                  {c.name}
                </ListGroup.Item>
                  ))
                }
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
