import logo from './logo.svg';
import './App.css';
import { Link, Route,Switch } from 'react-router-dom';
import Topic from './topic.js';
import SignIn from './pages/signin.js';
import SignUp from './pages/signup.js';
function App() {
  return (
    <>
    <div className="App">
      <div>
    <Link  to='/signin'><h2>SignIn</h2></Link>
      <Link to='/signup'><h2>SignUp</h2></Link>
      </div>
      <Switch>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                </Switch>

    </div>
    </>
  );
}

export default App;
