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
} from '../actions/types';

const defaultState = {
    books:[],
    error:null,
    isLoading:false
}

const studentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_SUCCESS:
            return { ...state, students: action.payload };
        default:
            return state;
    }
}

export default studentReducer;