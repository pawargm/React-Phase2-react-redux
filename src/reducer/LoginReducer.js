import setAuthToken from "../actions/setAuthToken";
import axios from 'axios'


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('username')
    //token: null,
    //isAuthenticated: false
}


const loginReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOGIN_SUCCESS":

            try {
                console.log("Login: start")
                console.log(action.pload )
                axios.post('http://localhost:5001/login', action.pload).then(res => {
                    console.log(res.data.token)
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('username', action.pload.username)
                    setAuthToken(res.data.token)
                    
                })
            } catch (error) { console.log(error)
            
                return {
                    token: "",
                    isAuthenticated: false,
                    username : null
                }
            }

            return {
                token: action.pload,
                isAuthenticated: true,
                username: action.pload.username
            }

        case "LOGOUT_SUCCESS":
            console.log("Log Out: Start")
            localStorage.clear();
            setAuthToken(null)
            return {
                token: action.pload,
                isAuthenticated: false,
                username: null
            }
        
        case "Gopal Pawar":
            console.log("-----------Calling Gopal Pawar ------------")
            return state
        default:
            return state
    }
}

export default loginReducer;