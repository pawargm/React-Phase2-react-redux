const initialState = {
    courseList: null ,
    name:null
}


const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COURSES":

            console.log("--------in GET_COURCES----------")
            console.log(action.pload)
            return {
                ...state,
                courseList: action.pload,
                name: "Gopal Pawar"
            }

        case "DEL_COURSE":

            console.log("--------------in DEL_COURSE -------------")
            let clist = state.courseList.filter((course) => { return course.courseId !== action.pload })
            return {
                ...state,
                courseList: clist,
            }
        case "ADD_COURSE":
            console.log("------------------- in ADD_COURSE----------")
            return {
                ...state,
                courseList: [...state.courseList, action.pload]
            }
        default:
            return state;
    }
}

export default courseReducer;