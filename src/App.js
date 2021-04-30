import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import BookAsPDF from './pages/BookAsPDF';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/bookAsPDF' component={BookAsPDF}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
