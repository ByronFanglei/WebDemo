import { CHANGE_INPUT_VALUE, ADD_LIST, DEL_LIST, TIANQI_THUNK, INIT_MUSIC } from './actionType'

const defaultState = {
  inputValue: '写点什么吧！',
  list: [
    '123',
    '321'
  ],
  tianqi: []
}

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DEL_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  if (action.type === TIANQI_THUNK) {
    // console.log(action.value)
  }
  if (action.type === INIT_MUSIC) {
    console.log(action.value)
  }
  return state
}

export default reducer
