import { combineReducers } from 'redux'
import axios from 'axios'

// INITIAL STATE
const initialState = {
  campuses: [],
  students: []
}

// ACTION TYPES
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'


const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_ONE_STUDENT = 'GET_ONE_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'


// ACTION CREATORS
export function getAllCampuses(campus) {
  return {
    type: GET_ALL_CAMPUSES,
    campus
  }
}

export function getOneCampus(campus) {
  return {
    type: GET_ONE_CAMPUS,
    campus
  }
}

export function addCampus(campus) {
  return {
    type: ADD_CAMPUS,
    campus
  }
}

export function updateCampus(campus) {
  return {
    type: UPDATE_CAMPUS,
    campus
  }
}

export function deleteCampus(campus) {
  return {
    type: DELETE_CAMPUS,
    campus
  }
}




export function getAllStudents(students) {
  return {
    type: GET_ALL_STUDENTS,
    students
  }
}

export function getOneStudent(student) {
  return {
    type: GET_ONE_STUDENT,
    student
  }
}

export function addStudent(student) {
  return {
    type: ADD_STUDENT,
    student
  }
}

export function updateStudent(student) {
  return {
    type: UPDATE_STUDENT,
    student
  }
}

export function deleteStudent(student) {
  return {
    type: DELETE_STUDENT,
    student
  }
}

// THUNK CREATORS
export function fetchCampuses() {
  
    return function thunk(dispatch) {
      return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
          dispatch(getAllCampuses(campuses))
        })
    }
}

export function postCampus(campus) {
  
    return function thunk(dispatch) {
      return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(campus => {
          dispatch(addCampus(campus))
        })
    }
}

export function putCampus(campusId, campus, history) {

    return function thunk(dispatch) {
      return axios.put(`/api/campuses/${campusId}`, campus)
        .then(() => {
          dispatch(fetchCampuses())
          history.push('/campuses')
        })
    }
}

export function removeCampus(campus, history) {
  
    return function thunk(dispatch) {
      dispatch(deleteCampus(campus))
      return axios.delete(`/api/campuses/${campus.id}`)
    }
}

export function fetchStudents() {
  
    return function thunk(dispatch) {
      return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
          dispatch(getAllStudents(students))
        })
    }
}

export function postStudent(student) {
  
    return function thunk(dispatch) {
      return axios.post('/api/students', student)
        .then(res => res.data)
        .then(student => {
          dispatch(addStudent(student))
        })
    }
}

export function putStudent(studentId, student, history) {
  
    return function thunk(dispatch) {
      return axios.put(`/api/students/${studentId}`, student)
        .then(() => {
          dispatch(updateStudent(studentId))
          history.push('/students')
        })
    }
}

export function removeStudent(student) {
  return function thunk(dispatch) {
      dispatch(deleteStudent(student))
      return axios.delete(`/api/students/${student.id}`)
    }
}

// REDUCER
const rootReducer = function(state = initialState, action) {
  switch(action.type) {

    case GET_ALL_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campus})

    case GET_ONE_CAMPUS:
      return Object.assign({}, state, {})

    case ADD_CAMPUS:
      return Object.assign({}, state, {campuses: [...state.campuses, action.campus]})

    case UPDATE_CAMPUS:
      return Object.assign({}, state, {
        campuses: [...state.campuses.filter(campus => +campus.id !== +action.campus.id ), action.campus]
      })
    
    case DELETE_CAMPUS:
      return Object.assign({}, state, {
        campuses: state.campuses.filter(campus => +campus.id !== +action.campus.id )
        // students: state.students.filter(student => student.campusId !== action.campus.id)
      })




    case GET_ALL_STUDENTS:
      return Object.assign({}, state, {students: action.students})

    case GET_ONE_STUDENT:
      return Object.assign({}, state, {})

    case ADD_STUDENT:
      return Object.assign({}, state, {students: [...state.students, action.student]})

    case UPDATE_STUDENT:
      return Object.assign({}, state, {})
    
    case DELETE_STUDENT:
      return Object.assign({}, state, {students: state.students.filter(student => {
        return student.id !== action.student.id
      })})

    default: 
      return state
  }
};

export default rootReducer


