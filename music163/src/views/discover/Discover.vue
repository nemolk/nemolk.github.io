<template>
  <div class="discover">
    <!-- 轮播图 -->
    <MusicSlider />

    <div class="box">
      <div class="left">
        <!-- 热门推荐 -->
        <Recommend :recommend="recommend" />

        <!-- 新碟上架 -->
        <NewAlbum />

        <!-- 榜单 -->
        <TopTen />
      </div>
      <div class="right">
        <div class="login">
          <p class="logTxt">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </p>
          <a>用户登录</a>
        </div>
        <!-- 入驻歌手 -->
        <Songer/>

        <!-- 热门主播 -->
        <HotAnchor/>
      </div>
    </div>
  </div>
</template>

<script>
import MusicSlider from "../../components/MusicSlider.vue";
import Recommend from "../../components/Recommend.vue";
import NewAlbum from "../../components/NewAlbum.vue";
import TopTen from "../../components/TopTen.vue";
import Songer from "../../components/Songer.vue";
import HotAnchor from "../../components/HotAnchor.vue";
import axios from "axios";

export default {
  components: {
    MusicSlider,
    Recommend,
    NewAlbum,
    TopTen,
    Songer,
    HotAnchor,
  },
  data() {
    return {
      recommend: [],
    };
  },
  created() {
    this.getRecommend();
  },
  methods: {
    getRecommend() {
      axios.get("/api/personalized?limit=8").then((res) => {
        // console.log(res)
        this.recommend = res.data.result;
      });
    },
  },
};
</script>

<style scoped>
.discover .box {
  width: 980px;
  margin: 0 auto;
  background: url("https://s2.music.126.net/style/web2/img/frame/wrap1.png?ef294f16b138e342200a2a90e073a9e6")
    repeat-y 100% 100%;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  min-height: 700px;
  display: flex;
  justify-content: space-between;
}

.box .left {
  width: calc(100% - 250px);
}

.box .right {
  width: 250px;
}
.login {
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
  background-position: 0 0;
  padding-bottom: 20px;
}
.login p {
  width: 100%;
  width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
}
.login a {
  display: block;
  width: 100px;
  height: 31px;
  margin: 0 auto;
  line-height: 31px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 0 #8a060b;
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
  background-position: 0 -195px;
}
</style>
