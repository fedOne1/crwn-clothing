import { Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import './App.css' ;
import Header from './hedear/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';


class App extends Component  {
unsubscribeFromAuth=null

componentDidMount(){
  const {setCurrentUser }=this.props;
 this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth =>{
   
      if(userAuth){
          const userRef= await  createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot =>{
            setCurrentUser({
                id:snapshot.id,
                ...snapshot.data()
              });
           
      } );
    }

  setCurrentUser(userAuth);
});
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
          <div >
              <Header />
              <Switch>
                      <Route  exact path='/'  component={HomePage}/>
                      <Route   path='/shop'  component={ShopPage}/>
                      <Route  exact path='/signIn' 
                       render={()=> 
                       this.props.currentUser ? (<Redirect to='/' />)
                       : (<SignInAndSignUpPage/>) }
                       />
              </Switch>         
          </div>
    )
  }
};

const mapStateToProps=user=>({
  currentUser:user.currentUser
})
const mapDispatchToProps= dispatch=>({
 setCurrentUser:user =>dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps) (App);
