import { Container, Row } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from '../navi/Navi'


function App() {
  return (
    <Container>
      <Row><Navi/></Row>
      <Dashboard/>

    </Container>

      
   
  );
}

export default App;
