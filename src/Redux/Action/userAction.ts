export const USER_LOADING = 'user/USER_LOADING'
export const USER_LOGIN_COMPLETE = 'user/USER_LOGIN_COMPLETE'
export const USER_LOGIN = 'user/USER_LOGIN'
export const USER_REGISTER_COMPLETE = 'user/USER_REGISTER_COMPLETE'
export const USER_REGISTER = 'user/USER_REGISTER'

export const loginUser = (payload: any, navigate:any) => {
  return {
    type: USER_LOGIN,
    payload,
    navigate
  }
}

export const loginComplete = (payload: any) => {
  return {
    type: USER_LOGIN_COMPLETE,
    payload,
  }
}

export const registerUser = (payload: any, navigate:any) => {
  return {
    type: USER_REGISTER,
    payload,
    navigate

  }
}

export const registerComplete = (payload: any) => {
  return {
    type: USER_REGISTER_COMPLETE,
    payload,
  }
}

export const userLoading = (payload: any) => {
  return {
    type: USER_LOADING,
    payload,
  }
}
