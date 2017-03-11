const STORAGE_KEY = 'Todoist'

function save(items){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
}
function get(){
    var Items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return Items
}

export default {save,get}