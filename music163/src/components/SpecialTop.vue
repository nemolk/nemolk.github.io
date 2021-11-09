<template>
    <div class="special">
        <h1>云音乐特色榜</h1>
        <ul>
            <li v-for="s in specialList" :key="s.id" @click="send(s.id,s.updateFrequency)">
                <div class="left">
                    <img :src="s.coverImgUrl" alt="">
                </div>
                <div class="right">
                    <p>{{s.name}}</p>
                    <p>{{s.updateFrequency}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      specialList:[],
    }
  },
  created(){
    this.getList();
  },
  methods:{
    getList(){
      axios.get('/api/toplist').then(res=>{
        // console.log(res.data.list.filter((item,i) => i<4));
        this.specialList = res.data.list.filter((item,i) => i<4);
      })
    },
    send(id,s){
        this.$emit('myevent', {id,s})
    }
  }
};
</script>

<style scoped>
.special{
    /* outline: 1px solid red; */
    /* padding-left: 15px; */
    padding-top: 40px;
}
.special h1{
    margin-left: 15px;
    font-size: 14px;
    color: #000;
}
.special ul{
    /* background-color: pink; */
    width: 100%;
    padding-top: 10px;
}
.special ul li{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    display: flex;
}
.special ul li:hover{
    background: #F4F2F2;
    cursor: pointer;
}
.left img{
    width: 40px;
    height: 40px;
    vertical-align: top;
    margin-right: 10px;
}
.right p:nth-of-type(1){
    color: #000;
    font-size: 12px;
}
.right p:nth-of-type(2){
    color: #999;
    margin-top: 10px;
    font-size: 12px;
}
</style>