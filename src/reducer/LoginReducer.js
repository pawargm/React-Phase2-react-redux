import setAuthToken from "../actions/setAuthToken";


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') ? true : false
    //token: null,
    //isAuthenticated: false
}


const loginReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.pload);
            setAuthToken(action.pload)
            return {
                token: action.pload,
                isAuthenticated: true
            }
        case "LOGOUT_SUCCESS":
            console.log("Log Out")
            localStorage.clear();
            setAuthToken(null)
            return {
                token: action.pload,
                isAuthenticated: false
            }
        
        case "Gopal Pawar":
            console.log("-----------Calling Gopal Pawar ------------")
            return state
        default:
            return state
    }
}

export default loginReducer;