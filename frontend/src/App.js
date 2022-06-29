import { Route } from 'react-router-dom';
import './App.css';
//import Signup from './Authentication/Signup';
import HomePage from './HomePage';
//import Login from './Authentication/Login';
import Dashboard from './Dashboard';
function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage} exact />
      <Route path='/dashboard' component={Dashboard} exact />

    </div>
  );
}

export default App;
