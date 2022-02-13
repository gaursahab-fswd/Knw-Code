export type userState = {
  id: number
  roleid: number
  name: String
  phone: String
  email: String
  created_at: String
  updated_at: String
}

export type logindataState = {
    user :userState
}

export type AuthState = {
  loginData: logindataState
  loggedIn: boolean
  isLoading: boolean
  errorMessage: String
}

export type rootState = {
  user: AuthState
}
