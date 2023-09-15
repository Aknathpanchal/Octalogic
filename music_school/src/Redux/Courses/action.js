import axios from "axios";


//action types
export const ADD_COURSE_DATA_REQUEST = "ADD_COURSE_DATA_REQUEST";
export const ADD_COURSE_DATA_SUCCESS = "ADD_COURSE_DATA_SUCCESS";
export const ADD_COURSE_DATA_ERROR = "ADD_COURSE_DATA_ERROR";

export const GET_COURSE_DATA_REQUEST = "GET_COURSE_DATA_REQUEST";
export const GET_COURSE_DATA_SUCCESS = "GET_COURSE_DATA_SUCCESS";
export const GET_COURSE_DATA_ERROR = "GET_COURSE_DATA_ERROR";



//actions
const addDataRequest = () => ({
    type: ADD_COURSE_DATA_REQUEST,
  });
  
  const addDataSuccess = (payload) => ({
    type: ADD_COURSE_DATA_SUCCESS,
    payload,
  });
  
  const addDataError = (payload) => ({
    type: ADD_COURSE_DATA_ERROR,
    payload,
  });

const getDataRequest = () => ({
  type: GET_COURSE_DATA_REQUEST,
});

const getDataSuccess = (payload) => ({
  type: GET_COURSE_DATA_SUCCESS,
  payload,
});

const getDataError = () => ({
  type: GET_COURSE_DATA_ERROR,
});

//getting Data;

export const getData = () => (dispach) => {
  dispach(getDataRequest());
  axios({
    url: "https://ill-rose-cormorant-boot.cyclic.app/courses",
    method: "GET",
  })
    .then((res) => {
      dispach(getDataSuccess(res.data));
      console.log(res.data,"success");
    })
    .catch((error) => dispach(getDataError()));
};

//posting Data;

export const addData = (payload) => (dispatch) => {
    dispatch(addDataRequest());
    axios({
      url: "https://ill-rose-cormorant-boot.cyclic.app/courses",
      method: "POST",
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res,"success");
        dispatch(
          addDataSuccess({
            status: true,
            message: "Data Add Successfully",
          })
        );
      alert("Added Successfully");
      })
      .catch((error) => {
        dispatch(
          addDataError({
            status: false,
            message: "Something went wrong while adding Data",
          })
        );
        alert("Something went wrong while adding Data");
      });
  };



