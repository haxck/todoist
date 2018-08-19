<template>
  <div id="app"> 
    <header>
        <h1><i>Todo</i></h1>
    </header>

    <div v-show="notask" style="text-align: center;">
      <div id="done_today" class="heading">今天的任务完成了！Awsome</div>
    </div>

    <transition-group name="fade" tag="ul">
      <li class="list-item" v-for="(item,index) in items" v-bind:key="item.order" v-if="item.done !== true">
        <div class="item" >
          <div class="inner" v-pan="pan" v-panend="panend" :id="index">
            <span>{{ item.title }}</span>
          </div>
          <img src="./assets/check.png" alt="" class="check">
          <img src="./assets/cross.png" alt="" class="cross">
        </div>
      </li>
    </transition-group>

    <input class="todobar" type="text" placeholder="又是美好的一天" v-model="item" v-on:keyup.enter="addNew" >
    
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
        title: this.item,
        done: false
      };
      if (this.item.trim() !== "") {
        this.items.push(item);
        this.item = "";
      }
    },
    pan: function(e) {
      let target = e.target;
      if (e.target.parentNode.className !== "item") {
        target = target.parentNode;
      }
      let check = target.parentNode.querySelector(".check");
      let cross = target.parentNode.querySelector(".cross");
      check.style.opacity = Math.abs(e.deltaX / 62);
      cross.style.opacity = Math.abs(e.deltaX / 62);
      target.style.left = e.deltaX + "px";
      if (e.deltaX > 61) {
        check.style.transform =
          "translate3d(" + (e.deltaX - 62) + "px,0px,0px)";
        target.style.background = "green";
      } else if (e.deltaX < -61) {
        cross.style.transform =
          "translate3d(" + (e.deltaX + 62) + "px,0px,0px)";
        target.style.background = "red";
      }
    },
    panend: function(e) {
      let target = e.target;
      if (e.target.parentNode.className !== "item") {
        target = target.parentNode;
      }
      let check = target.parentNode.querySelector(".check");
      let cross = target.parentNode.querySelector(".cross");
      let left = parseInt(target.style.left);
      if (left >= 62) {
        this.items[target.id].done = true;
      } else if (left <= -62) {
        this.items.splice(target.id, 1);
      }
      target.style.left = 0 + "px";
      check.style.opacity = 0;
      cross.style.opacity = 0;
      check.style.transform = "translate3d(0px,0px,0px)";
      cross.style.transform = "translate3d(0px,0px,0px)";
      target.style.background = "black";
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
  padding: 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  position: relative;
  left: 0;
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
.item {
  height: 62px;
  background: black;
}
.inner {
  display: block;
  left: 0;
  position: relative;
  height: 62px;
  background-color: black;
  z-index: 1;
  color: #fff;
  font-weight: 600;
}
.inner span {
  line-height: 62px;
}
.check {
  width: 62px;
  height: 62px;
  position: absolute;
  z-index: 0;
  top: 0;
  opacity: 0;
}
.cross {
  width: 62px;
  height: 62px;
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
