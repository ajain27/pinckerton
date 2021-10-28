import SearchResults from "./SearchResults";
import SideBar from "./sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function Willow() {
  return (
    <div className="willowApp">
      <Row className="width100">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <SearchResults />
        </Col>
      </Row>
    </div>
  );
}
