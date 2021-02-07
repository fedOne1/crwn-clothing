import { Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import './App.css' ;
import Header from './hedear/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



const App = () => (
  <div >
  <Header />
    <Switch>
          <Route  exact path='/'  component={HomePage}/>
          <Route   path='/shop'  component={ShopPage}/>
          <Route   path='/signIn'  component={SignInAndSignUpPage}/>
    </Switch>
         
   
  </div>

);

export default App;
