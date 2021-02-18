import logo from './logo.svg';
import './App.css';
import { Link, Route,Switch } from 'react-router-dom';
import Topic from './topic.js';
function App() {
  return (
    <>
    <div className="App">
      <Link  to='/signin'><h2>SignIn</h2></Link>
      <Link to='/signup'><h2>SignUp</h2></Link>
<Topic></Topic>
    </div>
    </>
  );
}

export default App;
