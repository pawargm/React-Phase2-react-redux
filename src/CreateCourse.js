import { useState, useEffect } from "react";

function CreateCourses(props) {

    const [courseId, setCourseId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [fees, setFees] = useState('');
    //let updateFields = (e) => setState({ [e.target.name]: e.target.value })

    let formSubmit = (e) => {
        e.preventDefault();
        props.addCourse(courseId, courseName, fees)
    }

    return (
        <div className='row'>
            <div className='col-md-6'>
                <form onSubmit={formSubmit}>
                    <div className='form-group'>
                        <label>Course ID</label>
                        <input type="text" className='form-control'
                         value={courseId} name='courseId'
                          onChange={(e)=>setCourseId(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                        <label>Course Name</label>
                        <input type="text" className='form-control' 
                        value={courseName} name='courseName'
                         onChange={(e)=>setCourseName(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                        <label>Fees</label>
                        <input type="text" className='form-control' 
                        value={fees} name='fees
                        ' onChange={(e)=>setFees(e.target.value)}></input>
                    </div>
                    <button type="submit" className='btn btn-primary'>Add Course</button>
                </form>
            </div>
        </div>
    )
}


export default CreateCourses;
