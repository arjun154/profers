import {
  GET_OTP_FAILURE,
  GET_OTP_REQUEST,
  GET_OTP_SUCCESS,
  VALIDATE_OTP_FAILURE,
  VALIDATE_OTP_REQUEST,
  VALIDATE_OTP_SUCCESS,
} from "./actionTypes";

const initState = {
  auth: false,
  token: "",
  error: false,
  errorMessage: "",
  message: "",
  loading: false,
  otpSend: true,
};

const reducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_OTP_REQUEST:
    case VALIDATE_OTP_REQUEST:
      return { ...state, loading: true, error: false };

    case GET_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otpSend: true,
        message: payload.message,
      };

    case GET_OTP_FAILURE:
    case VALIDATE_OTP_FAILURE:
      return { ...state, loading: false, errorMessage: payload.message };

    case VALIDATE_OTP_SUCCESS:
      const { token } = payload;
      return { ...state, auth: true, loading: false, token };

    default:
      return state;
  }
};

export default reducers;
