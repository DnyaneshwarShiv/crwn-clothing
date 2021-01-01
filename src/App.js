import logo from './logo.svg';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component'

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
function App() {
  return (
    <div>
      <Header/>
    <Switch>
         <Route exact path='/' component={HomePage}></Route>
         <Route exact path='/shop' component={ShopPage}></Route>
     </Switch>
     
    </div>
  );
}

export default App;
