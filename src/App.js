import './App.css';
import React, { Component } from 'react';
import Assets from './Assets';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import Students from './Students';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store'
import CreateAsset from './CreateAsset'
import Login from './Login'
import Logout from './Logout'
import AssetsBuyLst from './AssetsBuyLst'
import AssetsSellLst from './AssetsSellLst'
import testCom from './testCom';


class App extends Component {

  render() {
    return <Provider store={store}>
      <Router>

        <div className="container">

          <Navbar></Navbar>

          <Route exact path="/" component={Assets}></Route>
          <Route path="/students" render={props => (
            <React.Fragment>
              <Students studentName="Akshay"></Students>
              {/* <Fees fess="5500"></Fees> */}
            </React.Fragment>
          )}></Route>
          <Route exact path='/getBuyAsset' component={AssetsBuyLst}></Route>
          <Route exact path='/getSellAsset' component={AssetsSellLst}></Route>
          <Route exact path='/createAsset' component={CreateAsset}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/logout' component={Logout}></Route>
          <Route exact path='/tstCom' component={testCom}></Route>

          

        </div>


      </Router>
    </Provider>
  }

}


export default App;
