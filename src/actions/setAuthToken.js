import axios from 'axios'



//This function is for setting payload for every REST calls that
//will make after authentication get happend.
export default function setAuthToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete axios.defaults.headers.common['Authorization']
    }

}