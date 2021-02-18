import { ListItem } from "react-native-elements";

export const addAction = payload => ({
  type: 'ADD_ACTION',
  payload
})

export const removeAction = payload => ({
  type: 'REMOVE_ACTION',
  payload
})