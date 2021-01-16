import { useState, useEffect } from "react";
import { login } from './actions/LoginAction'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

function Login(props) {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    let setValues = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const { username, password } = user;

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("wel")
        props.login(user)
        //props.test(user)
    }

    return props.isAuthenticated ? (<Redirect to="/" />) : (<div className='row'>
        <div className='col-md-6'>
            <form onSubmit={formSubmit}>
                <div className='form-group'>
                    <label>UserName</label>
                    <input type="text" className='form-control'
                        value={username} name='username'
                        onChange={setValues}></input>
                </div>
                <div className='form-group'>
                    <label>password</label>
                    <input type="password" className='form-control'
                        value={password} name='password'
                        onChange={setValues}></input>
                </div>
                <button type="submit" className='btn btn-primary'>Login</button>
            </form>
        </div>
    </div>
    )

}

const mapStatetoProps = state => ({
    isAuthenticated: state.login.isAuthenticated
})


export default connect(mapStatetoProps, { login })(Login);
