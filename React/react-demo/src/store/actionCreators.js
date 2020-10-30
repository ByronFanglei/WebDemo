import { CHANGE_INPUT_VALUE, ADD_LIST, DEL_LIST } from './actionType'

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