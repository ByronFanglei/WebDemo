import { CHANGE_INPUT_VALUE, ADD_LIST, DEL_LIST } from './actionType'

const defaultState = {
  inputValue: '写点什么吧！',
  list: [
    '123',
    '321'
  ]
}

export default (state = defaultState, action) => {
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
  return state
}
