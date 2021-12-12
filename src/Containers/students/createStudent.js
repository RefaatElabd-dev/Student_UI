import React, { Component } from 'react';
import './createStudent.css'

class CreateStudent extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="create-book">
                <form>
                    <div className="form-group my-2">
                        <input 
                            type="text"
                            className="form-control"
                            name="Name" 
                            placeholder="Enter The Student Name"
                         />
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-success mx-1" >
                            Add 
                        </button>
                        <button type="button" className="btn btn-danger mx-1" >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


export default CreateStudent;