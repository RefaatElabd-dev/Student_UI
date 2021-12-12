import {
    ADD_STUDENT_ERROR,
    ADD_STUDENT_LOADING,
    ADD_STUDENT_SUCCESS,
    DELETE_STUDENT_ERROR,
    DELETE_STUDENT_LOADING,
    DELETE_STUDENT_SUCCESS,
    EDIT_STUDENT_ERROR,
    EDIT_STUDENT_LOADING,
    EDIT_STUDENT_SUCCESS,
    FETCH_STUDENT_ERROR,
    FETCH_STUDENT_LOADING,
    FETCH_STUDENT_SUCCESS
} from './types';

import {studentsTestData} from '../data';
import axios from 'axios';

const url = "https://localhost:44366/api/students/getall";

const fetchStudentsSuccess = (data) => {
    debugger;
    return {
        type: FETCH_STUDENT_SUCCESS,
        payload: data,
    }
}

const normalizeResponce = (data) => {
    const arr = data.map(item => {
        const Keys = Object.keys(item);
debugger;
        Keys.forEach(k => {
            item[k.toLocaleLowerCase()] = item[k];
            delete item[k];
        })

        return item;
    })

    return arr;
}

export const fetchStudents = () => {
    return (dispatch) => {
        axios.get(url)
             .then(response => {
                 //const data = normalizeResponce(response.data);
                 dispatch(fetchStudentsSuccess(response.data));
                })
             .catch(error => {

             })
    }
}