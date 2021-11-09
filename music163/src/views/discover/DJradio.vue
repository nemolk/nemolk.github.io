<template>
  <div class="djradio">
    <div class="title">
      <div class="view">
        <ul :style="{ display: iconId == 1 ? 'flex' : 'none' }">
          <li v-for="i in iconList.filter((item, i) => i <= 18)" :key="i.id">
            <span
              :style="{ backgroundImage: 'url(' + i.picWebUrl + ')' }"
            ></span>
            <p>{{ i.name }}</p>
          </li>
        </ul>
        <ul class="two" :style="{ display: iconId == 2 ? 'flex' : 'none' }">
          <li>
            <span
              style="
                backgroundimage: url(https://music.163.com/style/web2/img/index_radio/radio_faq.png);
              "
            ></span>
            <p>常见问题</p>
          </li>
          <li>
            <span
              style="
                backgroundimage: url(https://music.163.com/style/web2/img/index_radio/radio_apply.png);
              "
            ></span>
            <p>我要做主播</p>
          </li>
        </ul>
        <i
          class="pre"
          @click="pre(1)"
          :style="{ opacity: iconId == 1 ? '0.08' : '0.25' }"
        ></i>
        <i
          class="next"
          @click="pre(2)"
          :style="{ opacity: iconId == 2 ? '0.08' : '0.25' }"
        ></i>
        <div class="dots">
          <span :class="iconId == 1 ? 'redDot' : ''" @click="pre(1)"></span>
          <span :class="iconId == 2 ? 'redDot' : ''" @click="pre(2)"></span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="left">
        <div class="list-title">
          <h3>推荐节目</h3>
          <a href="javascript:void(0)">更多＞</a>
        </div>
        <ul>
          <li v-for="(l,i) in leftlist" :key="l.id" :style="{backgroundColor:i%2==0?'#FFFFFF':'#F7F7F7'}">
            <div class='li-img'>
              <img :src="l.coverUrl" alt="" />
            </div>
            <div class="li-mid">
              <p>{{l.name}}</p>
              <p>{{l.dj.brand}}</p>
            </div>
            <div class="li-right">
              <a href="javascript:void(0);">{{l.radio.category}}</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="left right">
        <div class="list-title">
          <h3>节目排行榜</h3>
          <a href="javascript:void(0)">更多＞</a>
        </div>
         <ul>
          <li v-for="(r,i) in rightlist" :key="r.id" :style="{backgroundColor:i%2==0?'#FFFFFF':'#F7F7F7'}">
            <div>
              <a href="javascript:void(0)" :style="{color:i<3?'#da4545':'#999'}">{{i+1}}</a>
            </div>
            <div class='li-img'>
              <img :src="r.program.coverUrl" alt="" />
            </div>
            <div class="li-mid">
              <p>{{r.program.mainSong.name}}</p>
              <p>{{r.program.radio.name}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      iconList: [],
      iconId: 1,
      leftlist: [],
      rightlist:[],
    };
  },
  created() {
    this.getIconList();
    this.getLeftlist();
    this.getRightlist();
  },
  methods: {
    getIconList() {
      axios.get("http://localhost:3000/dj/catelist").then((res) => {
        // console.log(res.data.categories);
        this.iconList = res.data.categories;
      });
    },
    pre(num) {
      this.iconId = num;
    },
    getLeftlist(){
      axios.get('http://localhost:3000/program/recommend').then((res)=>{
        // console.log(res.data.programs);
        this.leftlist = res.data.programs;
      })
    },
    getRightlist(){
      axios.get('http://localhost:3000/dj/program/toplist').then((res)=>{
        // console.log(res.data.toplist);
        this.rightlist = res.data.toplist.filter((item,i)=>i<=9);
      })
    }
  },
};
</script>

<style scoped>
.djradio {
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  min-height: 700px;
  padding: 40px;
}
.title {
  width: 100%;
  height: 194px;
  /* background-color: pink; */
}
.view {
  width: 100%;
  height: 100%;
  position: relative;
}
.view ul {
  width: 900px;
  height: 170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.view ul li {
  width: 70px;
  height: 72px;
  /* background-color: lightblue; */
  list-style: none;
  margin-right: 33px;
}
.view ul li:hover {
  background-color: #f6f7f7;
  cursor: pointer;
}
.view ul li:nth-of-type(1) {
  margin-bottom: 25px;
}
.view ul li:nth-of-type(9),
.view ul li:nth-of-type(18) {
  margin-right: 0;
}
.view ul li span {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  background-image: url(http://p2.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg);
  background-position: 0 0;
}
.view ul li p {
  text-align: center;
  color: #888;
  font-size: 12px;
}
.view .two {
  justify-content: start;
}
.view i {
  display: block;
  width: 20px;
  height: 30px;
  /* background-color: pink; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?2a5174bde527c39cccd2b6da1b4e8bc2);
  background-repeat: no-repeat;
  /* background-position: 0 0; */
  opacity: 0.25;
}
/* .view i:hover{

} */
.pre {
  left: -26px;
  background-position: 0 -30px;
  /* opacity: 0.08 !important; */
}
.next {
  right: -26px;
  background-position: -30px -30px;
}
.dots {
  width: 100%;
  text-align: center;
}
.dots span {
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?2a5174bde527c39cccd2b6da1b4e8bc2);
  background-repeat: no-repeat;
  background-position: 0px 0;
}
.dots .redDot {
  background-position: -30px 0;
}
.dots span:hover {
  background-position: -30px 0;
}
.list {
  margin-top: 15px;
  width: 100%;
  /* height: 700px; */
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
}
.list .left {
  width: 426px;
  /* height: 100%; */
  /* background-color: lightblue; */
}
.list .right {
  width: 426px;
  height: 100%;
  /* background-color: lightblue; */
}
.list-title {
  display: flex;
  justify-content: space-between;
}
.list-title h3 {
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
}
.list-title a {
  cursor: pointer;
  color: #333;
  text-decoration: none;
  line-height: 32px;
}
.list-title a:hover,
.list-title h3:hover {
  text-decoration: underline;
}
.left ul {
  width: 100%;
  /* height: 200px; */
  margin-top: 10px;
  /* background-color: purple; */
  border: 1px solid #e2e2e2;
  border-top: 2px solid #c20c0c;
  /* box-sizing: content-box !important; */
}
.left ul li{
  width: 100%;
  /* height: 40px; */
  /* background-color: purple; */
  display: flex;
  padding: 10px 0;
  padding-left: 20px;
  
  /* box-sizing: content-box !important; */
}
.left ul li:hover{
  background-color: #EEEEEE !important;
}
.li-img {
  margin-right: 10px;

}
.li-img img{
  width: 40px;
  height: 40px;
  vertical-align: top;
}
.li-mid{
  width: 250px;
  margin-right: 10px;
}
.li-mid p{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  font-size: 12px;
}
.li-mid p:hover{
  text-decoration: underline;
  cursor: pointer;
}
.li-mid p:nth-of-type(1){
  color: #333;
}
.li-mid p:nth-of-type(2){
  color: #999;
}
.li-right a{
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    height: 16px;
    overflow: hidden;
    padding: 0 6px;
    border: 1px solid #999;
    line-height: 16px;
    color: #999;
    vertical-align: middle;
    font-size: 12px;
    margin: 1px 0 0 10px;
}
.right ul li {
  padding: 10px 0 !important;
}
.right ul li>div:nth-of-type(1){
  width: 50px;
  text-align: center;
}
.right ul li>div:nth-of-type(1) a{
  line-height: 40px;
  text-decoration: none;
  color: #999;
  font-size: 14px;
}
</style>


