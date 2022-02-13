import { AuthState } from '../type'
import {
  USER_LOADING,
  USER_LOGIN_COMPLETE,
  USER_LOGIN,
  USER_REGISTER_COMPLETE,
  USER_REGISTER,
} from '../Action/userAction'

const initialStatetype: AuthState = {
  loginData: {
    user: {
      id: 0,
      roleid: 0,
      name: '',
      phone: '',
      email: '',
      created_at: '',
      updated_at: '',
    },
  },
  loggedIn: false,
  isLoading: false,
  errorMessage: '',
}

const userReducer = (state = initialStatetype, action: any ) => {
    const {type , payload} = action;
    switch(type){
        case USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        isLoading: false,
        loginData: { ...payload },
        errorMessage: '',
        loggedIn: true,
      };
    case USER_REGISTER:
      return {
        ...state,
        signUp: {
          message: '',
          isLoading: true,
        },
      };
    case USER_REGISTER_COMPLETE:
      return {
        ...state,
        isLoading: false,
        loginData: { ...payload },
        errorMessage: '',
        loggedIn: true,
      };
    default:
        return state;

    }
};

export default userReducer;