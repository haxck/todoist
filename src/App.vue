<template>
  <div id="app"> 
    <header>
        <h1><i>Todo</i></h1>
    </header>

    <ul>
          <transition-group name="fade" tag="ul">
            <li v-for="item in items" v-bind:key="item" class="list-item">
              {{ item }}
            </li>
          </transition-group>
    </ul>

    <input class="todobar" type="text" placeholder="又是美好地一天" v-model="item" v-on:keyup.enter="addNew" >

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      item: "",
      nolist: true
    };
  },
  methods: {
    //添加一条新任务
    addNew() {
      if (this.item.trim() !== "") {
        this.items.push(this.item);
        this.item = "";
        this.nolist = false;
      }
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
