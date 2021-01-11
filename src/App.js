import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './component/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/users.action';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

// const HatsPage= ()=>(
//   <div>
//     <h1>HATS Page</h1>
//   </div>
// )
// const TopicsPage= ()=>(
//   <div>
//     <h1>Topic Page</h1>
//   </div>
// )
// const TopicDetailsPage= ()=>(
//   <div>
//     <h1>Topic details Page</h1>
//   </div>
// )
class App extends React.Component {
  constructor(props){
    super(props);
   
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    auth.onAuthStateChanged(async userAuth=>{
     const {setCurrentUser} = this.props;
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapshot)=>{
       console.log(snapshot.data());
       setCurrentUser({id: snapshot.id,...snapshot.data()});
     })
     }
     setCurrentUser(userAuth);
     
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
      <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={()=>this.props.currentUser?(
            <Redirect to='/'/>):(<SignInAndSignUp></SignInAndSignUp>)
          }></Route>
           <Route exact path='/checkout' component={CheckoutPage}></Route>
      </Switch>
      
      </div>
    );
  }
}

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
