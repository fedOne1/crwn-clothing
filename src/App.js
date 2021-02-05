import { Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import './App.css' ;
import Header from './hedear/header.component.jsx'



const App = () => (
  <div >
  <Header />
    <Switch>
          <Route  exact path='/'  component={HomePage}/>
          <Route   path='/shop'  component={ShopPage}/>
    </Switch>
         
   
  </div>

);

export default App;
