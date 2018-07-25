<template>
    <div id="app"> 
        <header>
            <h1><i>Todo</i></h1>
        </header>
        <ul>
            <li v-for="i in items">
                {{i}}
            </li>
        </ul>
        <input class="todobar" type="text" placeholder="又是美好地一天" v-model="item" v-on:keyup.enter="addNew" > 
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      item: ""
    };
  },
  methods: {
    //添加一条新任务
    addNew() {
      this.items.push(this.item);
      this.item = "";
    }
  }
};
</script>

<style>
body {
  margin: 0 0 60px 0;
  padding: 0;
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
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  margin-top: 2px;
  line-height: 36px;
  padding: 10px 10px;
  background: #ff4949;
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
</style>
