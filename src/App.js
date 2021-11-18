import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Switch, 
  Route,
  Link } from "react-router-dom"
import AppPosts from './components/AppPosts';

function App() {
  return (
    <div className="App">
     <h1>Blog App</h1>
     <Router>
       <nav>
         <ul>
           <li>
             <Link to="/posts">Posts</Link>
           </li>
         </ul>
         
       
       <Switch>
         <Route path="/posts">
           <AppPosts/>
         </Route>
       </Switch>
     </nav>
     </Router>
     

    </div>
  );
}

export default App;
