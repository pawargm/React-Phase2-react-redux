import axios from 'axios'



export const login = (userdata) => async (dispatch) => {
    try {
        console.log("L")
        await axios.post('http://localhost:5000/login', userdata).then(res => {
            dispatch(
                {
                    type: "LOGIN_SUCCESS", ///Action called all reducer and matched 
                    //reducer by type like in above LOGIN_SUCCESS
                    pload: res.data.token
                }
            )
        })
    } catch (error) { console.log(error) }
}

/**
export const test = (userdata) => {
    console.log("Test......................")
    console.log(userdata)
}
*/

export const logout = (userdata) => async (dispatch) => {
    console.log("---------In Logout----------")
            dispatch(
                {
                    type: "LOGOUT_SUCCESS",
                    pload: "logout"
                }
            )
       
    
}

export const logout1 = (userdata) => async (dispatch) => {
    console.log("---------In Logout1----------")

    dispatch(
        {
            type: "GET_COURSESr",
            pload: "logout"
        }
    )
}