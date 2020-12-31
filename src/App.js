import logo from './logo.svg';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import {Route} from 'react-router-dom';

const HatsPage= ()=>(
  <div>
    <h1>HATS Page</h1>
  </div>
)
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
     <Route exact path='/' component={HomePage}></Route>
     <Route exact path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
