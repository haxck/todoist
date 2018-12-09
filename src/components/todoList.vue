<template>
  <transition-group name="fade" tag="ul">
    <li v-for="(item,index) in items" v-bind:key="item.order" v-if="item.done !== true">
      <div class="item">
        <div class="inner" v-pan="pan" v-panend="panend" :id="index">
          <span>{{ item.title }}</span>
        </div>
        <img src="../assets/check.png" alt class="check">
        <img src="../assets/cross.png" alt class="cross">
      </div>
    </li>
  </transition-group>
</template>
<script>
import store from "../stores.js";
import '../touch.js'
export default {
  data() {
    return {
      items: store.state.items
    };
  },
  methods: {
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
  }
};
</script>
