import { GET_COURSE_DATA_ERROR, GET_COURSE_DATA_REQUEST, GET_COURSE_DATA_SUCCESS ,
    ADD_COURSE_DATA_ERROR, ADD_COURSE_DATA_REQUEST, ADD_COURSE_DATA_SUCCESS} from "./action";

const initState = {
  course: [],
  error: false,
  loading: false,
  msg: [],
};


export const addCourseDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COURSE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_COURSE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload,
      };
    case ADD_COURSE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        msg: [],
        error: true,
      };
    default:
      return state;
  }
};



export const getCourseDataReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_COURSE_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_COURSE_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case GET_COURSE_DATA_ERROR:
        return {
          ...state,
          loading: false,
          course: [],
          error: true,
        };
      default:
        return state;
    }
  };