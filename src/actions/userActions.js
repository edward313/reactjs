import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constant/userConstant.js'
import axios from "axios";
import userApi from '../api/userApi.js'


export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const data = await userApi.login(username, password)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })



    localStorage.setItem('userInfo', data ? JSON.stringify(data) : {})
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err,
    })
  }
}


export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post("http://localhost:8000/auth/login", { name, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}