import api from "../../utils/api";
import {
  GET_OTP_FAILURE,
  GET_OTP_REQUEST,
  GET_OTP_SUCCESS,
  SET_LOCATION,
  VALIDATE_OTP_FAILURE,
  VALIDATE_OTP_REQUEST,
  VALIDATE_OTP_SUCCESS,
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
    dispatch(validateOtpSuccess(data));
  } catch (error) {
    dispatch(validateOtpFailure(error?.response?.data || error.message));
  }
};

// set location
export const setLocation = (payload) => ({
  type: SET_LOCATION,
  payload,
});
