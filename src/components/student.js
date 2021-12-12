import React from 'react';


const StudentComponent = ({student}) => {
    return <tr>
    <td>{student.ID}</td>
    <td>{student.Name}</td>
    <td>
        <button type="button" className="btn btn-danger mx-1">
            Delete
        </button>
        <button type="button" className="btn btn-warning mx-1">
            Edit
        </button>
    </td>
</tr>
} 

export default StudentComponent;