import {
  REQ_SUCCESS,
  LOGOUT,
} from './actionTypes';

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case REQ_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
