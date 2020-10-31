import {
  CHANGE_INPUT_VALUE,
  ADD_LIST,
  DEL_LIST,
  TIANQI_SAGA,
  INIT_MUSIC
} from './actionType'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const changeList = () => ({
  type: ADD_LIST,
})

export const delList = (index) => ({
  type: DEL_LIST,
  value: index
})

// thunk
// export const initMusic = (value) => ({
//   type: TIANQI_THUNK,
//   value
// })

// export const getMusic = () => {
//   return (dispatch) => {
//     let url = 'http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz'
//     axios.get(url)
//     .then(value => {
//       const data = value.data
//       const action = initMusic(data)
//       dispatch(action)
//     })
//     .catch(reason => {
//       console.log(reason)
//     })
//   }
// }

// saga
export const getSagaTian = () => ({
  type: TIANQI_SAGA
})
export const initMusic = (value) => ({
  type: INIT_MUSIC,
  value
})