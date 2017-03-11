<template>
    <div id="app">
        <headers></headers>

        <input type="text" name="" placeholder="准备干点儿什么？" v-model="newItem" @keyup.enter="addNew">
        <ul>
            <li v-for="i in items" v-bind:class="{finished:i.isFinished}" @click="toggleFinished(i)">
                {{i.label}}
            </li>
        </ul>
    </div>
</template>

<script>
import stores from './components/stores'
import Headers from './components/Header'

export default {
            data() {
              return {
                items: "[]",
                title:'Todoist',
                newItem:""
                }
            },
            mounted:function(){
                this.items = stores.get()
            },
            methods:{
                toggleFinished:function(i){
                    i.isFinished = !i.isFinished;
                },
                addNew:function(){
                    this.items.push({
                        label:this.newItem,
                        isFinished:false
                    })
                    this.newItem = ""
                }
            },
            watch:{
                items:{
                    handler: function(items){
                        stores.save(items)
                    },
                    deep:true
                }
            },
            components:{
                Headers
            }
}
</script>

<style>
        body{
            margin:0;
            padding:0;
        }
        .finished{
            text-decoration: line-through;
            background: #eee;
            color: #ccc;
        }
        #app{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        ul{
            list-style: none;
            padding: 0;
            width: 360px;
        }
        li{
            margin-top: 2px;
            line-height: 36px;
            padding: 10px 10px;
            background: #ff4949;
            cursor: pointer
        }
        input[type='text']{
            background: #EEE;
            border: 0;
            height: 36px;
            width: 340px;
            padding: 10px 10px;
            outline: medium;
        }
</style>
