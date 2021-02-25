export const addRask = payload => (
  {
    type: 'ADD_TASK',
    payload
  }
)

export const removeTask = payload => ({
  type: 'REMOVE_TASK',
  payload
})