import SearchResults from "./search/SearchResults";
import SideBar from "./sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Willow() {
  const [filters, setFilters] = useState({
    BuildingId: null,
    CategoryId: null,
    City: null,
  });

  return (
    <div className="willowApp">
      <Row className="width100">
        <Col xs={3}>
          <SideBar filters={filters} setFilters={setFilters} />
        </Col>
        <Col xs={9}>
          <SearchResults filters={filters} setFilters={setFilters} />
        </Col>
      </Row>
    </div>
  );
}
