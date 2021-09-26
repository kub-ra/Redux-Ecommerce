import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from '../navi/Navi'
import {Switch,Route} from 'react-router-dom'
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../product/AddOrUpdateProduct";
import NotFound from "../common/NotFound";



function App() {
  return (
    <Container>
      <Navi/>
      
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/saveproduct/:productId"  component={AddOrUpdateProduct}/>
        <Route path="/saveproduct"  component={AddOrUpdateProduct}/>
        <Route path="/product" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route  exact component={NotFound}/>
      </Switch>
     

    </Container>

      
   
  );
}

export default App;
