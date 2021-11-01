import "./sidebar.css";
import { Card, ListGroup } from "react-bootstrap";

export default function SideBar({ filters, setFilters }) {
  var buildings = require("../../xhr/buildings.json");
  var categories = require("../../xhr/categories.json");

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
                {buildings &&
                  buildings.length > 0 &&
                  buildings.map((b) => (
                    <ListGroup.Item
                      className="card-building"
                      active={filters.BuildingId === b.id}
                      onClick={() => {
                        setFilters((state) => {
                          return {
                            ...state,
                            BuildingId:
                              state?.BuildingId === b.id ? null : b.id,
                          };
                        });
                      }}
                    >
                      {b.name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Body className="card">
            <Card.Title>Category</Card.Title>
            <Card.Text>
              <ListGroup>
                {categories &&
                  categories.length > 0 &&
                  categories.map((c) => (
                    <ListGroup.Item
                      active={filters.CategoryId === c.id}
                      className="card-building"
                      onClick={() => {
                        setFilters((state) => {
                          return {
                            ...state,
                            CategoryId: state.CategoryId === c.id ? null : c.id,
                          };
                        });
                      }}
                    >
                      {c.name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Body className="card">
            <Card.Title>City</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item
                  active={filters.City === "Sydney"}
                  className="card-building"
                  onClick={() => {
                    setFilters((state) => {
                      return {
                        ...state,
                        City: state.City === "Sydney" ? null : "Sydney",
                      };
                    });
                  }}
                >
                  Sydney
                </ListGroup.Item>
                <ListGroup.Item
                  active={filters.City === "Melbourne"}
                  className="card-building"
                  onClick={() => {
                    setFilters((state) => {
                      return {
                        ...state,
                        City: state.City === "Melbourne" ? null : "Melbourne",
                      };
                    });
                  }}
                >
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
