<template>
  <div class="top10">
    <div class="title1">
      <h1><i></i>榜单</h1>
      <span
        ><router-link to="/discover/toplist">更多</router-link> <i></i
      ></span>
    </div>
    <div class="content">
      <div>
        <div class="title">
          <div class="left">
            <img
              src="https://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
              alt=""
            />
          </div>
          <div class="right">
            <p>飙升榜</p>
            <p>
              <a href="javascript:void(0);"></a>
              <a href="javascript:void(0);"></a>
            </p>
          </div>
        </div>
        <ul>
          <li
            v-for="(l, i) in list1"
            :key="l.id"
            :style="{ color: i < 3 ? '#c10d0c' : '#666666' }"
          >
            <span>{{ i + 1 }}</span>
            <a href="javascript:void(0);">{{ l.name }}</a>
          </li>
          <li class="li-all">
            <a href="javascript:void(0);">查看全部＞</a>
          </li>
        </ul>
      </div>
      <div>
        <div class="title">
          <div class="left">
            <img
              src="https://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"
              alt=""
            />
          </div>
          <div class="right">
            <p>新歌榜</p>
            <p>
              <a href="javascript:void(0);"></a>
              <a href="javascript:void(0);"></a>
            </p>
          </div>
        </div>
        <ul>
          <li
            v-for="(l, i) in list2"
            :key="l.id"
            :style="{ color: i < 3 ? '#c10d0c' : '#666666' }"
          >
            <span>{{ i + 1 }}</span>
            <a href="javascript:void(0);">{{ l.name }}</a>
          </li>
          <li class="li-all">
            <a href="javascript:void(0);">查看全部＞</a>
          </li>
        </ul>
      </div>
      <div>
        <div class="title">
          <div class="left">
            <img
              src="https://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"
              alt=""
            />
          </div>
          <div class="right">
            <p>原创榜</p>
            <p>
              <a href="javascript:void(0);"></a>
              <a href="javascript:void(0);"></a>
            </p>
          </div>
        </div>
        <ul>
          <li
            v-for="(l, i) in list3"
            :key="l.id"
            :style="{ color: i < 3 ? '#c10d0c' : '#666666' }"
          >
            <span>{{ i + 1 }}</span>
            <a href="javascript:void(0);">{{ l.name }}</a>
          </li>
          <li class="li-all">
            <a href="javascript:void(0);">查看全部＞</a>
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
      list1: [],
      list2: [],
      list3: [],
    };
  },
  created() {
    this.getList1();
    this.getList2();
    this.getList3();
  },
  methods: {
    getList1() {
      let url = `http://localhost:3000/playlist/detail?id=19723756`;
      axios.get(url).then((res) => {
        // console.log(res.data.playlist);
        this.list1 = res.data.playlist.tracks.filter((item, i) => i <= 9);
      });
    },
    getList2() {
      let url = `http://localhost:3000/playlist/detail?id=3779629`;
      axios.get(url).then((res) => {
        // console.log(res);
        this.list2 = res.data.playlist.tracks.filter((item, i) => i <= 9);
      });
    },
    getList3() {
      let url = `http://localhost:3000/playlist/detail?id=2884035`;
      axios.get(url).then((res) => {
        // console.log(res);
        this.list3 = res.data.playlist.tracks.filter((item, i) => i <= 9);
      });
    },
  },
};
</script>

<style scoped>
.top10 {
  /* outline: 1px solid blue; */
  width: 100%;
  background-color: #fff;
  /* border: 1px solid #d3d3d3; */
  padding: 30px;
  padding-top: 10px;
}
.title1 {
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  height: 42px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #c20c0c;
  position: relative;
}
.title1 div {
  display: flex;
  justify-content: space-between;
}
.title1 h1 {
  line-height: 42px;
  font-size: 20px;
  color: #333;
  border: none;
  font-weight: normal;
}
.title1 h1 i {
  width: 33px;
  height: 33px;
  vertical-align: middle;
  display: inline-block;
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
  background-position: -225px -156px;
}
.title1 p {
  width: 85px;
  height: 30px;
  display: inline-block;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  color: #0c73c2;
  cursor: pointer;
  margin-left: 5px;
}
.title1 span a {
  text-decoration: none;
  line-height: 42px;
  color: #666;
  font-size: 12px;
}
.title1 span i {
  width: 12px;
  height: 12px;
  display: inline-block;
  vertical-align: middle;
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
  background-position: -0px -240px;
}
.content {
  width: 100%;
  height: 472px;
  padding-left: 1px;
  border:  1px solid #ccc;
  display: flex;
  background-image: url(https://s2.music.126.net/style/web2/img/index/index_bill.png?4100bf50abcdc6cfbf5ef979dc03aa68);
  overflow: hidden;
}
.content > div {
  width: 230px;
}
.content > div:nth-of-type(3) ul{
    width: 205px;
}
.content .title {
  display: flex;
  width: 210px;
  height: 100px;
  margin: 20px;
  margin-top: 20px;
  margin-bottom: 0;
  /* background-color: pink; */
}
.content .title .left {
  width: 80px;
  height: 80px;
  background-color: lightblue;
}
.content .title .left img {
  width: 80px;
  height: 80px;
}
.content .title .right {
  margin: 6px 10px;
}
.content .title .right p:nth-of-type(1) {
  color: #333;
  font-size: 14px;
  font-weight: 700;
}
.content .title .right p:nth-of-type(2) {
  margin-top: 10px;
}
.content .title .right p:nth-of-type(2) a {
  display: inline-block;
  width: 22px;
  height: 22px;
  /* background-color: #fff; */
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
}
.content .title .right p:nth-of-type(2) a:nth-of-type(1) {
  margin-right: 10px;
  background-position: -267px -205px;
}
.content .title .right p:nth-of-type(2) a:nth-of-type(1):hover {
  background-position: -267px -235px;
}
.content .title .right p:nth-of-type(2) a:nth-of-type(2) {
  background-position: -300px -205px;
}
.content .title .right p:nth-of-type(2) a:nth-of-type(2):hover {
  background-position: -300px -235px;
}
.content ul {
  width: 230px;
  height: 352px;
  /* background-color: pink; */
}
.content ul li {
  list-style: none;
  height: 32px;
  /* background-color: lightblue; */
  padding-left: 20px;
}
.content ul li span {
  display: inline-block;
  width: 30px;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  text-align: center;
  vertical-align: top;
}
.content ul li a {
  display: inline-block;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 130px;
  vertical-align: top;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: #000;
  /* text-align: center; */
}
.content ul li:hover a {
  text-decoration: underline;
}
.li-all{
text-align: right !important;
}
.li-all a{  
  margin-right: 20px !important;
}
</style>