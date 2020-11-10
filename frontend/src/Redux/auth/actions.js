import api from "../../utils/api";
import {
  GET_OTP_FAILURE,
  GET_OTP_REQUEST,
  GET_OTP_SUCCESS,
  SET_LOCATION,
  VALIDATE_OTP_FAILURE,
  VALIDATE_OTP_REQUEST,
  VALIDATE_OTP_SUCCESS,
  LOGIN_LOAD,
  LOGOUT_SUCCESS,
} from "./actionTypes";

export const getOtpSuccess = (payload) => ({
  type: GET_OTP_SUCCESS,
  payload,
});

export const getOtpFailure = (payload) => ({
  type: GET_OTP_FAILURE,
  payload,
});

export const getOtpRequest = (payload) => ({
  type: GET_OTP_REQUEST,
  payload,
});

export const requestOtp = (number) => async (dispatch) => {
  dispatch(getOtpRequest());

  try {
    const { data } = await api.get(`/accounts/${number}`);
    dispatch(getOtpSuccess(data));
  } catch (error) {
    dispatch(getOtpFailure(error?.response?.data || error.message));
  }
};

export const validateOtpRequest = (payload) => ({
  type: VALIDATE_OTP_REQUEST,
  payload,
});

export const validateOtpSuccess = (payload) => ({
  type: VALIDATE_OTP_SUCCESS,
  payload,
});

export const validateOtpFailure = (payload) => ({
  type: VALIDATE_OTP_FAILURE,
  payload,
});

export const validateOtp = (number, otp) => async (dispatch) => {
  dispatch(validateOtpRequest());

  try {
    const { data } = await api.post(`/accounts/${number}`, { otp });
    data.phoneNumber = number;
    dispatch(validateOtpSuccess(data));
    localStorage.setItem("auth", JSON.stringify(data));
  } catch (error) {
    dispatch(validateOtpFailure(error?.response?.data || error.message));
  }
};

// logout
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logout = () => (dispatch) => {
  localStorage.removeItem("auth");
  dispatch(logoutSuccess());
};

// Load login
export const loginLoadSuccess = (payload) => ({
  type: LOGIN_LOAD,
  payload,
});

export const loadLogin = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem("auth"));
  data && dispatch(loginLoadSuccess(data));
};

// set location
export const setLocation = (payload) => ({
  type: SET_LOCATION,
  payload,
});
