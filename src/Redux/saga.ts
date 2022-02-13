import {
  USER_LOGIN,
  USER_REGISTER_COMPLETE,
  USER_REGISTER,
  USER_LOADING,
  USER_LOGIN_COMPLETE,
} from '../Redux/Action/userAction'
import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
//import { get } from 'lodash';
import { useNavigate } from 'react-router-dom'
type responseType = {
  user: any
}
const signIn = async (payload: any) => {
   // console.log('login', payload);
  const response = await fetch('http://myshop.hombrehr.com/api/user/login', {
      
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(payload),
  })
  console.log('login', response);
  if (response.status === 200) {
     // console.log('login', payload);
    let responseBody: any = await response.json()
    return responseBody
  }
  let responseBody: any = await response.json()
  return responseBody
}

const signUp = async (payload: any) => {
  const response = await fetch('http://myshop.hombrehr.com/api/user/register', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(payload),
  })
  if (response.status === 200) {
    let responseBody: any = await response.json()
    console.log(responseBody)
    return responseBody
  }
  return response
}

function* LoginUserfunction(data: any) {
  const { payload, navigate } = data
  try {
    yield put({ type: USER_LOADING })
    const response: responseType = yield call<any>(signIn, payload)
    if (response.user) {
        console.log('Login user function',response);
      yield put({
        type: USER_LOGIN_COMPLETE,
        payload: response,
      })
      navigate('/');
    } 
  } catch (err) {
    console.log('error', err)
  }
}

function* SignUpUserfunction(data: any) {
  const { payload, navigate } = data
  try {
    yield put({ type: USER_LOADING })
    const response: responseType = yield call<any>(signUp, payload)
    if (response.user) {
      yield put({
        type: USER_REGISTER_COMPLETE,
        payload: response,
      })

      navigate('/');
    } 
  } catch (err) {
    console.log('error', err)
  }
}
function* loginSaga() {
  yield takeEvery(USER_LOGIN, LoginUserfunction)
}

function* signUpSaga() {
  yield takeEvery(USER_REGISTER, SignUpUserfunction)
}

export default function* authSagas() {
  yield all([fork(loginSaga), fork(signUpSaga)])
}
