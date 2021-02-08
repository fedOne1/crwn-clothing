import { Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import './App.css' ;
import Header from './hedear/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'
import {Component} from 'react';


class App extends Component  {

constructor() {
  super()
  this.state = {
    currentUser:null
  }

}
unsubscribeFromAuth=null

componentDidMount(){
 this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user});
    console.log(user);
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
          <div >
              <Header  currentUser={this.state.currentUser}/>
              <Switch>
                      <Route  exact path='/'  component={HomePage}/>
                      <Route   path='/shop'  component={ShopPage}/>
                      <Route   path='/signIn'  component={SignInAndSignUpPage}/>
              </Switch>         
          </div>
    )
  }
};

export default App;
