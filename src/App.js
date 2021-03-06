import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers/reducer'
import NavLinks from './NavLinks/Navlinks'
import ProductDetails from './Pages/ProductDetails';
import Signup from './Pages/SignUp';
import { PublicRoute } from './Routes/PublicRoute';
import Signin from './Pages/Login';
import { PrivateRoute } from './Routes/PrivateRoute';
import CheckoutPage from './Pages/CheckoutPage';
import Logout from './Pages/Logout';

const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <NavLinks />
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/details/:id" component={ProductDetails} />
            <Route exact path="/signup" component={Signup} />
            <PublicRoute exact path="/signin" component={Signin} />
            <PrivateRoute exact path="/check" component={CheckoutPage} />
            <PrivateRoute exact path="/logout" component={Logout} />

          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
