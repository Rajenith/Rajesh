import './App.css';
import Wel from './components/wel';
import Signup from './components/signup/signup';
import Dlogin from './components/Login/login';
import Navbar from './components/Home/navbar/navbar';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Single from './components/datas/single';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'><Signup /></Route>
            <Route path='/login'><Dlogin /></Route>
            <Route path='/navbar'><Navbar /></Route>
            <Route path='/single'><Single /></Route>
          </Switch>
        </BrowserRouter>
        {/* <Wel /> */}
        
        
        

      </Provider>

    </div>
  );
}

export default App;
