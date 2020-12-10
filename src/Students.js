import { Component } from 'react';
class Students extends Component {


    render() {
        return <div> <h1>Students</h1>
            <h2>{this.props.studentName}</h2>
        </div>
    }


}

export default Students