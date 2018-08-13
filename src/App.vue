<template>
  <div id="app"> 
    <header>
        <h1><i>Todo</i></h1>
    </header>

    <div v-show="notask" style="text-align: center;">
      <div id="done_today" class="heading">今天的任务完成了！Awsome</div>
    </div>

    <ul>
          <transition-group name="fade" tag="ul">
            <li v-for="item in items" v-bind:key="item" class="list-item">
              {{ item.title }}
            </li>
          </transition-group>
    </ul>

    <input class="todobar" type="text" placeholder="又是美好地一天" v-model="item" v-on:keyup.enter="addNew" >
    
  </div>
</template>

<script>
import stores from "./stores";

export default {
  data() {
    return {
      items: [],
      item: "",
      notask: true
    };
  },
  mounted() {
    this.items = stores.get();
    this.notask = this.items.length <= 0 ? true : false;
  },
  methods: {
    //添加一条新任务
    addNew() {
      let item = {
        order: this.items.length,
        title: this.item
      };
      if (this.item.trim() !== "") {
        this.items.push(item);
        this.item = "";
      }
    }
  },
  watch: {
    items: {
      handler(items) {
        stores.save(items);
        this.notask = this.items.length <= 0 ? true : false;
      },
      deep: true
    }
  }
};
</script>

<style>
body {
  margin: 0 0 60px 0;
  padding: 0;
  background-color: #eee;
}
header {
  background: yellow;
  color: #3a3a3a;
  padding: 0.3rem;
}
header h1 {
  margin: 0;
  text-align: center;
}
ul {
  margin: 10px 0 0 0;
  padding: 0;
  list-style: none;
}
li {
  line-height: 36px;
  padding: 10px 10px;
  background: #fff;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
