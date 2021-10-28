import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Willow from "./components/Willow";

function App() {
  return (
    <Container fluid className="App mt-5">
      <Willow />
    </Container>
  );
}

export default App;
