
import './App.css';
import Mainpage from './components/Pages/Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
        <Route path="/">
          <Mainpage />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
