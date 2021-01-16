import { Component } from 'react';
import Asset from './Asset'
import CreateCourses from './CreateCourse'
import { connect } from 'react-redux'
import { getAssets } from './actions/assetAction'
import { deleteAsset } from './actions/assetAction'
import {addAsset} from './actions/assetAction'
import {addtobuylstAsset} from './actions/assetAction'
import { Redirect } from 'react-router';

class Assets extends Component {


    componentDidMount() {

        this.props.getAssets();

    }

    // componentDidUpdate() {
    //     console.log(this.props.courseList)

    // }

    deleteAsset = (assetid) => {
        console.log("-------delete course------")
        //let clist = this.props.courseList.filter((course) => { return course.courseId !== courseId })
        //console.log(clist)
        //this.setState({ courseList: [...this.props.courseList,clist] });
        this.props.deleteAsset(assetid)
        //seems like setState not updating state 
    }

    addAsset = (assetid, assetname, fees) => {
        //this.setState({ courseList: [...this.props.courseList, { courseId, courseName, fees }] })
        let courseList = {"courseId":assetid, "courseName":assetname, "fees":fees }
        this.props.addCourseA(courseList)
    }

    addtobuylstAsset = (assetObj) => {
        console.log("addtobuylstAsset:Start ")
        this.props.addtobuylstAsset(assetObj)
    }

    


    render() {
        console.log("--------getting state attribute--------")
        console.log(this.props.name)
        let loading = true;

        if (this.props.assetList !== null) {
            loading = false;
        }
        return !this.props.isAuthenticated ? <Redirect to='/login'></Redirect> : loading ? <h1> loading</h1> :
            <div>
                <CreateCourses addCourse={this.addCourse} />
                <div className="jumbotron">
                    {this.props.assetList.map(asset => (
                        <Asset key={asset.assetid} assetDetails={asset} addtobuylstAsset={this.addtobuylstAsset} />
                    ))}
                </div>
            

        </div>
    }

}

const mapStatetoProps = state => (
    {
        assetList: state.asset.assetList,
        isAuthenticated: state.login.isAuthenticated,
        name:state.asset.name
    }

)

export default connect(mapStatetoProps, { getAssets, deleteAsset , addAsset, addtobuylstAsset})(Assets);