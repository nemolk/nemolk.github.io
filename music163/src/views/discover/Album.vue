<template>
  <div class="newCD">
     <div class="hot">
      <h1>热门新碟</h1>
      <div class="box">
        <div class="item" v-for="h in hotlist" :key="h.id">
            <div class="bg">
            <img :src="h.blurPicUrl" alt="">
          </div>
          <p class="song">{{h.name}}</p>
          <p class="name">{{h.artist.name}}</p>
        </div>
      </div>
    </div>
    <div class="all">
      <div class="title">
        <span>全部新碟</span>
        <ul>
          <li>
            <a href="javascript:void(0)" @click="changeArea('ALL')">全部</a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="changeArea('ZH')">华语</a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="changeArea('EA')">欧美</a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="changeArea('KR')">韩国</a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="changeArea('JP')">日本</a>
          </li>
        </ul>
      </div>
      <div class="box">
        <div class="item" v-for="h in allList" :key="h.id">
            <div class="bg">
            <img :src="h.blurPicUrl" alt="">
          </div>
          <p class="song">{{h.name}}</p>
          <p class="name">{{h.artist.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data(){
    return {
      hotlist :null,
      allList: null,
      limit:10,
      area: 'ALL',
    }
  },
  created() {
    this.renderHot();
    this.renderAll();
  },
   methods: {
    renderHot() {
      let url = `http://localhost:3000/top/album?type=hot`;
      axios.get(url).then((res) => {
        console.log(res.data.weekData);
        this.hotlist = res.data.weekData.filter((item,index)=> index<=9);
        console.log(this.hotlist);
      });
    },
    renderAll(){
      let url = `http://localhost:3000/album/new?area=${this.area}&limit=${this.limit}`;
      axios.get(url).then((res) => {
        console.log(res.data.albums);
        this.allList = res.data.albums;
        console.log(this.allList);
      });
    },
    changeArea(area){
      this.area = area;
      this.renderAll();
    }
  },
}
</script>

<style scoped>
body{
  background-color: #fff;
}
.newCD{
  width: 1200px;
  margin: 0 auto;
  /* height: 100px; */
  /* background-color: pink; */
  overflow: hidden;
  border: 1px solid #d3d3d3;
}
.hot,.all{
  padding:20px;
  padding-left: 30px;
  width: 100%;
}
.hot h1,.all .title{
  width: 95%;
  font-size: 24px;
  font-weight: normal;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
}
.box{
  margin-top: 20px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item{
  width: 18%;
  /* background-color: lightblue; */
  margin-bottom: 30px;
}
.bg{
  width: 153px;
  height: 130px;
  background-position: 0 -845px;
  background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?af2f3b7d433d2c1545043aae398e9d65);
}
.bg img{
  width: 130px;
  height: 130px;
  background-color: #fff;
}
.item p{
  margin: 0;
  padding: 0;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item p:nth-of-type(1){
  margin: 5px 0;
  font-size: 14px;
}
.item p:nth-of-type(2){
  font-size: 12px;
  color: #666;
}
.all{
  overflow: hidden;
}
.all .title{
  display: flex;
  margin-top: -20px;
  height: 42px;
}
.title span{
  display: inline-block;
}
.all .title ul{
  display: flex;
  height: 42px;
  margin: 0;
  padding: 0;
  margin-left: 30px;
}
.all .title ul li{
  list-style: none;
  /* margin-right: 30px; */
}
.all .title ul li a{
   padding: 0 20px;
   color: #666;
  text-decoration: none;
  font-size: 12px;
  line-height: 42px;
  border-right: 1px solid #cbd8eb;
}
.all .title ul li a:hover{
  text-decoration: underline;
}
.all .title ul li:last-of-type a{
  border-right: none;
}

</style>