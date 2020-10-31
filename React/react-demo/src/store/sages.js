import { put, takeEvery } from 'redux-saga/effects'
import { TIANQI_SAGA } from './actionType'
import { initMusic } from './actionCreators'
import axios from 'axios'


function* getSaga() {
  let url = 'http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz'
  const res = yield axios.get(url)
  const data = initMusic(res.data)
  yield put(data)
}

function* mysaga() {
  yield takeEvery(TIANQI_SAGA, getSaga)
}

export default mysaga
