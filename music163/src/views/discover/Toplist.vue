<template>
  <div class="toplist">
    <div class="box">
      <div class="left">
        <!-- 云音乐特色榜 -->
        <SpecialTop v-on:myevent="receive" />
        <!-- 全球媒体榜 -->
        <MediaTop v-on:myevent="receive" />
      </div>
      <div class="right">
        <div class="title">
          <div class="title-content">
            <div class="title-img">
              <img :src="datalist.coverImgUrl" alt="" />
            </div>
            <div class="title-right">
              <p>{{ datalist.name }}</p>
              <p>
                <i></i>
                <span>最近更新：{{ month }}月{{ day }}日</span>
                <a href="javascript:void(0);">({{ s }})</a>
              </p>
              <p>
                <a href="javascript:void(0);">
                  <i></i>
                  <span>播放</span>
                  <i></i>
                </a>
                <a href="javascript:void(0);">
                  <i></i>
                  ({{ datalist.subscribedCount }})</a
                >
                <a href="javascript:void(0);">({{ datalist.shareCount }})</a>
                <a href="javascript:void(0);">下载</a>
                <a href="javascript:void(0);">({{ datalist.commentCount }})</a>
              </p>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            <div class="content-left">
              <span>歌曲列表</span>
              <a href="javascript:void(0);">{{ datalist.trackCount }}首歌</a>
            </div>
            <div class="content-right">
              <span
                >播放：<a href="javascript:void(0);">{{ datalist.playCount }}</a
                >次</span
              >
            </div>
          </div>
          <div class="content-table">
            <table>
              <tr>
                <th class="table-1"></th>
                <th><div class="table-title">标题</div></th>
                <th class="table-songtime"><div>时长</div></th>
                <th class="table-singer"><div>歌手</div></th>
              </tr>
              <tr v-for="(m, i) in musiclist" :key="m.id" :style="i%2==0?'backgroundColor:#f7f7f7':''">
                <!-- <div v-if="i%2==0?'color':''"> -->
                  <td :class="i >= 3 ? 'small' : ''">
                    <span>{{ i + 1 }}</span>
                    <span>0</span>
                  </td>
                  <td :class="i >= 3 ? 'small long' : ''">
                    <img :src="m.al.picUrl" alt="" v-if="i < 3" />
                    <i></i>
                    <span>{{ m.name }}</span>
                  </td>
                  <td :class="i >= 3 ? 'small' : ''">
                    <span
                      >0{{ Math.floor(m.dt / 1000 / 60) }}:{{
                        Math.floor((m.dt / 1000) % 60)
                      }}</span
                    >
                  </td>
                  <td :class="i >= 3 ? 'small' : ''">
                    <span>{{ m.ar[0].name }}</span>
                  </td>
                <!-- </div> -->
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialTop from "../../components/SpecialTop.vue";
import MediaTop from "../../components/MediaTop.vue";
import axios from "axios";

export default {
  components: {
    SpecialTop,
    MediaTop,
  },
  data() {
    return {
      datalist: [],
      musiclist: [],
      datId: 19723756,
      month: 11,
      day: 5,
      s: "刚刚更新",
      timelist: [],
    };
  },
  created() {
    this.getData();
    // this.receive();
    // console.log(this.id);
  },
  methods: {
    receive(d) {
      // console.log(d);
      this.datId = d.id;
      this.s = d.s;
      this.getData();
    },
    getData() {
      let url = `http://localhost:3000/playlist/detail?id=${this.datId}`;
      axios.get(url).then((res) => {
        // console.log(res.data.playlist);
        this.datalist = res.data.playlist;
        this.month = new Date(res.data.playlist.updateTime).getMonth() + 1;
        this.day = new Date(res.data.playlist.updateTime).getDate();
        this.musiclist = res.data.playlist.tracks;
        // console.log(this.musiclist);
        // console.log(new Date(res.data.playlist.updateTime).getMonth()+1);
        // console.log(new Date(res.data.playlist.updateTime).getDate());

        // console.log(res.data.playlist.tracks);
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 980px;
  margin: 0 auto;
  background: url("https://s2.music.126.net/style/web2/img/frame/wrap3.png?98f576ccb9f0e4d92522d796ec275a15")
    repeat-y center 0;
  min-height: 700px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  justify-content: space-between;
}

.box .left {
  width: 240px;
}

.box .right {
  width: calc(100% - 240px);
}
.right .title {
  width: 100%;
  padding: 40px;
}
.right .title .title-content {
  width: 100%;
  /* background-color: pink; */
  display: flex;
}
.right .title .title-content .title-img {
  padding: 3px;
  border: 1px solid #ccc;
}
.right .title .title-content .title-img img {
  width: 150px;
  height: 150px;
}
.title-right {
  margin-left: 30px;
}
.title-right p {
  margin: 16px 0 4px;
}
.title-right p:nth-of-type(1) {
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.title-right p:nth-of-type(2) {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 30px;
}
.title-right p:nth-of-type(2) i {
  width: 13px;
  height: 13px;
  display: inline-block;
  vertical-align: middle;
  background: url(https://s2.music.126.net/style/web2/img/icon.png?08b1788c048f206f0aa95c7c98a690f6)
    no-repeat 0 9999px;
  background-position: -18px -682px;
}
.title-right p:nth-of-type(2) span {
  font-size: 12px;
  color: #666;
  vertical-align: middle;
  margin: 0 5px;
}
.title-right p:nth-of-type(2) a {
  color: #999;
  font-size: 12px;
  vertical-align: middle;
  text-decoration: none;
  margin-left: 5px;
}
.title-right p:nth-of-type(3) a {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 7px 10px;
  margin-right: 5px;
  text-decoration: none;
}
.title-right p:nth-of-type(3) a:nth-of-type(1) {
  background-color: #2677c5;
  color: #fff;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc)
    no-repeat 0 9999px;
  background-position: 0 -387px;
  padding-right: 0;
}
.title-right p:nth-of-type(3) a:nth-of-type(1) i:nth-of-type(1) {
  width: 20px;
  height: 18px;
  display: inline-block;
  margin: 6px 2px 2px 0;
  overflow: hidden;
  vertical-align: top;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc)
    no-repeat 0 9999px;
  background-position: 0 -1622px;
  margin: 0;
  margin-right: 5px;
}
.title-right p:nth-of-type(3) a:nth-of-type(1) i:nth-of-type(2) {
  width: 29px;
  height: 29px;
  display: inline-block;
  vertical-align: top;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc)
    no-repeat 0 9999px;
  background-position: 0 -1588px;
  margin-top: -7px;
  margin-left: 5px;
}
.title-right p:nth-of-type(3) a:nth-of-type(2) {
  background: url(https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc)
    no-repeat 0 9999px;
  background-position: -1px -977px;
  padding-left: 28px;
  color: #333;
  font-size: 12px;
}
.title-right p:nth-of-type(3) a:nth-of-type(3) {
  background: url(https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc)
    no-repeat 0 9999px;
  background-position: 0 -1225px;
  padding-left: 28px;
  color: #333;
  font-size: 12px;
}
.title-right p:nth-of-type(3) a:nth-of-type(4) {
  background: url(https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc)
    no-repeat 0 9999px;
  background-position: 0 -2761px;
  padding-left: 28px;
  color: #333;
  font-size: 12px;
}
.title-right p:nth-of-type(3) a:nth-of-type(5) {
  background: url(https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc)
    no-repeat 0 9999px;
  background-position: 0 -1465px;
  padding-left: 28px;
  color: #333;
  font-size: 12px;
}
.content {
  width: 100%;
  padding: 0 30px 40px 40px;
}
.content-title {
  display: flex;
  justify-content: space-between;
  /* background-color: pink; */
}
.content-left span {
  font-size: 20px;
  line-height: 28px;
}
.content-left a {
  color: #666;
  text-decoration: none;
  font-size: 12px;
  margin-left: 20px;
  margin-top: 9px;
}
.content-right span {
  margin-top: 5px;
  color: #666;
  font-size: 12px;
}
.content-right span a {
  text-decoration: none;
  color: #c20c0c;
  font-weight: bold;
  font-size: 12px;
}
.content-table {
  width: 100%;
}

/* 音乐列表表格 */
table {
  width: 100%;
  margin-top: 5px;
  /* background-color: pink; */
  border: 1px solid #d9d9d9;
  border-collapse: collapse;
  border-spacing: 0;
  border-top: 1px solid #c20c0c;
  /* table-layout: fixed; */
}
table tr:nth-of-type(1) th {
  height: 38px;
  padding-left: 5px;
  text-align: left;
  color: #666;
  font-weight: normal;
}
.table-1 {
  width: 77px;
  /* background-color: lightgreen; */
}
.table-songtime {
  width: 90px;
  /* background-color: lightblue; */
}
.table-singer {
  width: 26%;
  /* background-color: purple; */
}
table tr:nth-of-type(1) {
  background-color: #f6f6f6;
  border-bottom: 1px solid #ccc;
}
table tr:nth-of-type(1) th {
  border-right: 1px solid #ccc;
}
table tr td {
  height: 50px;
  padding: 10px 5px;
  color: #333;
}
table tr td:nth-of-type(1) {
  padding-left: 20px;
}
table tr td:nth-of-type(1) span:nth-of-type(1) {
  margin-right: 20px;
  color: #999;
  font-size: 12px;
}
table tr td img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
table tr td i {
  width: 17px;
  height: 17px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  background: url(https://s2.music.126.net/style/web2/img/table.png?563986688335aa2368be94ee47a1f6a7)
    no-repeat 0 9999px;
  cursor: pointer;
  background-position: 0 -103px;
}
table .small {
  padding: 0 5px;
  height: 30px;
} 
table tr td:nth-of-type(2) span{
  width: 150px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
table tr .long span{
  width: 250px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
table tr td:nth-of-type(4) span {
  display: inline-block;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* table tr div{
  width: 700px;
}
.color{
  background-color: #F7F7F7;
} */
</style>
