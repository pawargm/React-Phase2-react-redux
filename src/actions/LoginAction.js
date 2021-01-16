import axios from 'axios'



export const login = (userdata) => async (dispatch) => {

            dispatch(
                {
                    type: "LOGIN_SUCCESS", ///Action called all reducer and matched 
                    //reducer by type like in above LOGIN_SUCCESS
                    pload: userdata
                }
            )
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