import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    auth.onAuthStateChanged(async userAuth=>{
     
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapshot)=>{
       console.log(snapshot.data());
       this.setState({currentUser:{id: snapshot.id,...snapshot.data()}},()=>{
         console.log(this.state);
       });
     })
     }
     this.setState({currentUser: userAuth});
     
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
      <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUp}></Route>
      </Switch>
      
      </div>
    );
  }
}

export default App;
