<template>
  <input class="todobar" type="text" placeholder="又是美好的一天" v-model="item" v-on:keyup.enter="addNew">
</template>
<style>
.todobar {
  background: #eee;
  border: 0;
  height: 36px;
  width: 100%;
  padding: 10px 10px;
  outline: medium;
  position: fixed;
  bottom: 0;
}
</style>
<script>
import store from '../stores.js'

export default {
  data (){
    return {
      items: store.state.items,
      item: ''
    }
  },
  methods: {
    addNew() {
      let item = {
        order: this.items.length,
        title: this.item,
        done: false
      };
      if (this.item.trim() !== "") {
        this.items.push(item);
        this.item = "";
      }
    }
  }
};
</script>


