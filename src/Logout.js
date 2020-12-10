import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { logout } from './actions/LoginAction'
import { logout1 } from './actions/LoginAction'

function Logout(props) {


    console.log("-------------------Logout------------------")
    props.logout1()
    props.logout() ///>>>? why logout get called by props why not directly gets called
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    let setValues = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const { username, password } = user;

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("wel")
        props.logout()
        //props.test(user)
    }

    return props.isAuthenticated ?  (<div className='row'>
        <div className='col-md-6'>
            <form onSubmit={formSubmit}>
              
              
                <button type="submit" className='btn btn-primary'>Logout</button>
                

            </form>
        </div>
    </div>
    ) : (<Redirect to="/" />) 

}

const mapStatetoProps = state => ({
    isAuthenticated: state.login.isAuthenticated ///>>>? what is login ?
})


export default connect(mapStatetoProps, { logout , logout1 })(Logout); ///>>>?
//export default Logout;