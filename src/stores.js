const STORAGE_KEY = "todo";

let save = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

let get = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

export default {save, get}