import React, {Component} from 'react';
import StudentComponent from '../../components/student';
import { connect } from 'react-redux';

class Student extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.students.map(student => {
                            return (
                                <StudentComponent 
                                    key={student.ID}
                                    student={student} />
                                )
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.studentsData.students || [],
    }
}

export default connect(mapStateToProps, null)(Student);

    