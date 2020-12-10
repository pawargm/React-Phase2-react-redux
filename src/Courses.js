import { Component } from 'react';
import Course from './Course'
import CreateCourses from './CreateCourse'
import { connect } from 'react-redux'
import { getCourses } from './actions/courseAction'
import { deleteCourseA } from './actions/courseAction'
import {addCourseA} from './actions/courseAction'
import { Redirect } from 'react-router';

class Courses extends Component {


    componentDidMount() {

        this.props.getCourses();

    }

    // componentDidUpdate() {
    //     console.log(this.props.courseList)

    // }

    deleteCourse = (courseId) => {
        console.log("-------delete course------")
        //let clist = this.props.courseList.filter((course) => { return course.courseId !== courseId })
        //console.log(clist)
        //this.setState({ courseList: [...this.props.courseList,clist] });
        this.props.deleteCourseA(courseId)
        //seems like setState not updating state 
    }

    addCourse = (courseId, courseName, fees) => {
        //this.setState({ courseList: [...this.props.courseList, { courseId, courseName, fees }] })
        let courseList = {"courseId":courseId, "courseName":courseName, "fees":fees }
        this.props.addCourseA(courseList)
    }


    render() {
        console.log("--------getting state attribute--------")
        console.log(this.props.name)
        let loading = true;

        if (this.props.courseList !== null) {
            loading = false;
        }
        return !this.props.isAuthenticated ? <Redirect to='/login'></Redirect> : loading ? <h1> loading</h1> :
            <div>
                <CreateCourses addCourse={this.addCourse} />
                <div className="jumbotron">
                    {this.props.courseList.map(course => (
                        <Course key={course.courseId} courseDetails={course} deleteCourse={this.deleteCourse} />
                    ))}
                </div>
            

        </div>
    }

}

const mapStatetoProps = state => (
    {
        courseList: state.course.courseList,
        isAuthenticated: state.login.isAuthenticated,
        name:state.course.name
    }

)

export default connect(mapStatetoProps, { getCourses, deleteCourseA , addCourseA})(Courses);