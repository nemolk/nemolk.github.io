<template>
  <div class="recommend">
    <div class="box">
      <div class="title1">
        <div>
          <h1><i></i> 热门推荐</h1>
          <ul>
            <li>
              <router-link to="/discover/playlist/华语">华语</router-link>
            </li>
            <li>
              <router-link to="/discover/playlist/流行">流行</router-link>
            </li>
            <li>
              <router-link to="/discover/playlist/摇滚">摇滚</router-link>
            </li>
            <li>
              <router-link to="/discover/playlist/民谣">民谣</router-link>
            </li>
            <li>
              <router-link to="/discover/playlist/电子">电子</router-link>
            </li>
          </ul>
        </div>
        <span><router-link to="/discover/playlist/全部">更多</router-link> <i></i></span>
      </div>
      <div class="playlist-box">
        <div v-for="p in playlist" :key="p.id" :item="p">
          <div class="item">
            <div class="img-box">
              <img :src="p.picUrl" alt="" />
              <div class="info">
                <div class="info-left">
                  <i class="icon earphone"></i>
                  <span class="play-count"
                    >{{ (p.playCount / 10000).toFixed(0) }}万</span
                  >
                </div>
                <i class="icon play"></i>
              </div>
            </div>
            <div class="title">{{ p.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["recommend"],
  data() {
    return {
      playlist: [],
      cat: "全部",
      page: 1,
      limit: 8,
      id: 0,
    };
  },
  created() {
    this.getPlayList(this.page);
  },
  methods: {
    getPlayList(page) {
      // 非0数字，NaN
      if (!(page - 0)) return;
      this.page = page;
      let url = `http://localhost:3000/personalized?limit=${this.limit}`;
      axios.get(url).then((res) => {
        console.log(res);
        this.playlist = res.data.result;
      });
    },
  },
};
</script>
<style scoped>
.box {
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
.title1 ul {
  display: flex;
  height: 42px;
  margin: 0;
  padding: 0;
  margin-left: 10px;
}
.title1 ul li {
  list-style: none;
  /* margin-right: 30px; */
}
.title1 ul li a {
  padding: 0 20px;
  color: #666;
  text-decoration: none;
  font-size: 12px;
  line-height: 42px;
  border-right: 1px solid #cbd8eb;
}
.title1 ul li a:hover {
  text-decoration: underline;
}
.title1 ul li:last-of-type a {
  border-right: none;
}
.title1 span a{
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
.playlist-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 140px;
  font-size: 12px;
  /* margin-right: 30px; */
  margin-bottom: 20px;
}

.img-box {
  position: relative;
  border: 1px solid #ddd;
}

.img-box img {
  width: 100%;
  display: block;
}

.img-box .info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-left: 10px;
  /* background-image: url(coverall.png); */
  background-repeat: no-repeat;
  background-position: 0 -537px;
  height: 27px;
  line-height: 27px;
}

.img-box .play-count {
  color: #ccc;
}

.title {
  font-size: 14px;
  width: 100%;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  margin-top: 5px;
  color: #000;
  font-size: 14px;
}

.earphone {
  background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?66b1a13388574f0e3fb8cfaf6913c4eb);
  display: inline-block;
  width: 14px;
  height: 11px;
  background-position: 0 -24px;
  margin-right: 5px;
}
</style>