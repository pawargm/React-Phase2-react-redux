import './App.css';
import React, { Component } from 'react';
import Courses from './Courses';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import Students from './Students';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store'
import Login from './Login'
import Logout from './Logout'

class App extends Component {

  render() {
    return <Provider store={store}>
      <Router>

        <div className="container">

          <Navbar></Navbar>

          <Route exact path="/" component={Courses}></Route>
          <Route path="/students" render={props => (
            <React.Fragment>
              <Students studentName="Akshay"></Students>
              {/* <Fees fess="5500"></Fees> */}
            </React.Fragment>
          )}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/logout' component={Logout}></Route>

        </div>


      </Router>
    </Provider>
  }

}


export default App;