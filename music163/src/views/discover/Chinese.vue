<template>
  <div class="box">
    <h1>华语</h1>
        <!-- <div class="item" v-for="a in allList" :key="a.id">
            <div class="bg">
            <img :src="a.blurPicUrl" alt="">
          </div>
          <p class="song">{{a.name}}</p>
          <p class="name">{{a.artists[0].name}}</p>
        </div> -->
      </div>
</template>



<style scoped>
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
