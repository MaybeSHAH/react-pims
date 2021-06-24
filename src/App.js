
import './App.css';
import Mainpage from './components/Pages/Mainpage';
import Login from './components/Pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import BraiderProd from './components/Pages/BraiderProd';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Sidebar />
    <Switch>
        <Route path="/mandrelstoppage">
          <BraiderProd />
        </Route>
        <Route path="/">
          <Mainpage />
        </Route>
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
