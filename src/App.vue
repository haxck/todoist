<template>
  <div id="app">
    <headerBar/>
    <div 
      v-show="notask"
      style="text-align: center;">
      <div id="done_today" class="heading">今天的任务完成了！Awsome</div>
    </div>
    <todolist/>
    <inputBar/>
  </div>
</template>

<script>
import store from "./stores.js";
import "./app.css";
import headerBar from "./components/headerBar.vue";
import inputBar from "./components/inputBar.vue";
import todolist from "./components/todolist.vue";

export default {
  data() {
    return {
      items: [],
      item: "",
      notask: true
    };
  },
  mounted() {
    this.items = store.state.items;
    console.log(this.items.length)
  },
  // watch: {
  //   items: {
  //     handler(items) {
  //       stores.save(items);
  //       this.notask = this.items.length <= 0 ? true : false;
  //     },
  //     deep: true
  //   }
  // },
  components: {
    headerBar,
    inputBar,
    todolist
  }
};
</script>