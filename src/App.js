import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form'
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
    {/* <Header/> */}
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/form' component={Form} exact/>
    </Switch>
    </Router>
  );
}

export default App;
