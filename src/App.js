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
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute exact path="/details/:id" component={ProductDetails} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/signin" component={Signin} />
            <Route exact path="/check" component={CheckoutPage} />

          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
