const STORAGE_KEY = 'todo'
let state = {
  items: []
}

let _save = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

let getState = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

let setState = () => {
  _save(state.items)
}

export default {
  state,
  getState,
  setState
}
