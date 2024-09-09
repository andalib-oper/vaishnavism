import {
  REQ,
  REQ_SUCCESS,
  SET_NEW_AUTH_TOKEN,
  REQ_FAILURE,
  LOGOUT,
  NET_CHECK,
  FOLLOWING,
} from './actionTypes';
import EncryptedStorage from 'react-native-encrypted-storage';

export const reqSuccess = (
) => ({
  type: REQ_SUCCESS,
});
export const reqFailure = (error: any) => ({
  type: REQ_FAILURE,
  error: error,
});
export const logout = () => ({type: LOGOUT});
