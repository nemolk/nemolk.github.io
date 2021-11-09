<template>
  <div class="playlist">
    <div class="box">
      <div class="title1">
        <div>
          <a>{{ cat }}</a>
          <p @click="show">选择分类 ∨</p>
        </div>
        <button>热门</button>
        <div class="options" v-if="status">
          <h3>
            <a href="javascript:;">全部风格</a>
          </h3>
          <div class="options-content">
            <div class="options-item">
              <div class="options-left">
                <i></i>
                <a href="">语种</a>
              </div>
              <div class="options-right">
                <p>
                  <a href="">华语</a> | <a href="">欧美</a> |
                  <a href="">日语</a> | <a href="">韩语</a> |
                  <a href="">粤语</a> |
                </p>
              </div>
            </div>
            <div class="options-item">
              <div class="options-left">
                <i></i>
                <a href="">风格</a>
              </div>
              <div class="options-right">
                <p>
                  <a href="">流行</a> | <a href="">摇滚</a> |
                  <a href="">民谣</a> | <a href="">电子</a> |
                  <a href="">舞曲</a> | <a href="">说唱</a> |
                  <a href="">轻音乐</a> | <a href="">爵士</a> |
                  <a href="">乡村</a> | <a href="">R&B/Soul</a> |
                  <a href="">古典</a> | <a href="">民族</a> |
                  <a href="">英伦</a> | <a href="">金属</a> |
                  <a href="">蓝调</a> | <a href="">雷鬼</a> |
                  <a href="">世界音乐</a> | <a href="">拉丁</a> |
                  <a href="">New Age</a> | <a href="">古风</a> |
                  <a href="">Bossa Nova</a> |
                </p>
              </div>
            </div>
            <div class="options-item">
              <div class="options-left">
                <i></i>
                <a href="">场景</a>
              </div>
              <div class="options-right">
                <p>
                  <a href="">清晨</a> | <a href="">夜晚</a> |
                  <a href="">学习</a> | <a href="">工作</a> |
                  <a href="">午休</a> | <a href="">下午茶</a> |
                  <a href="">地铁</a> | <a href="">驾车</a> |
                  <a href="">运动</a> | <a href="">旅游</a> |
                  <a href="">散步</a> | <a href="">酒吧</a> |
                </p>
              </div>
            </div>
            <div class="options-item">
              <div class="options-left">
                <i></i>
                <a href="">情感</a>
              </div>
              <div class="options-right">
                <p>
                  <a href="">怀旧</a> | <a href="">清新</a> |
                  <a href="">浪漫</a> | <a href="">伤感</a> |
                  <a href="">治愈</a> | <a href="">放松</a> |
                  <a href="">孤独</a> | <a href="">感动</a> |
                  <a href="">兴奋</a> | <a href="">快乐</a> |
                  <a href="">安静</a> | <a href="">思念</a> |
                </p>
              </div>
            </div>
            <div class="options-item">
              <div class="options-left">
                <i></i>
                <a href="">主题</a>
              </div>
              <div class="options-right">
                <p>
                  <a href="">综艺</a> | <a href="">影视原声</a> |
                  <a href="">ACG</a> | <a href="">儿童</a> |
                  <a href="">校园</a> | <a href="">游戏</a> |
                  <a href="">70后</a> | <a href="">80后</a> |
                  <a href="">90后</a> | <a href="">网络歌曲</a> |
                  <a href="">KTV</a> | <a href="">经典</a> |
                  <a href="">翻唱</a> | <a href="">吉他</a> |
                  <a href="">钢琴</a> | <a href="">器乐</a> |
                  <a href="">榜单</a> | <a href="">00后</a> |
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="playlist-box">
        <div v-for="p in playlist" :key="p.id" :item="p">
          <div class="item">
            <div class="img-box">
              <img :src="p.coverImgUrl" alt="" />
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
            <div class="author-box">
              <span class="by">by</span>
              <span class="author">{{ p.creator.nickname }}</span>
              <i class="icon star"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="pager">
        <button class="pre" @click="pre">＜&nbsp;&nbsp;上一页</button>
        <span v-for="p in pager" :key="p.id" :class="page == p ? 'color' : ''">
          <a href="javascript:;" v-if="p > 0" @click="getPlayList(p)">{{
            p
          }}</a>
          <i v-else>{{ p }}</i>
        </span>
        <button class="next" @click="next">下一页&nbsp;&nbsp;＞</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      playlist: [],
      cat: "全部",
      page: 1,
      limit: 10,
      totalPage: 0,
      pager: [],
      id: 0,
      status: false,
    };
  },
  created() {
    this.getPlayList(this.page);
    // this.render();
  },
  methods: {
    render() {
      console.log(this.$route.params.cat);
      if (this.$route.params.cat) {
        this.cat = this.$route.params.cat;
      }
    },
    getPlayList(page) {
      // 非0数字，NaN
      if (!(page - 0)) return;
      this.page = page;
      if (this.$route.params.cat) {
        this.cat = this.$route.params.cat;
      }
      let url = `http://localhost:3000/top/playlist?cat=${this.cat}&limit=${
        this.limit
      }&offset=${(page - 1) * this.limit}`;
      axios.get(url).then((res) => {
        this.playlist = res.data.playlists;
        this.totalPage = Math.ceil(res.data.total / this.limit);
        this.getPages(this.page, this.totalPage);
        // console.log(this.pager, this.page);
      });
    },
    getPages(page, totalPage) {
      this.pager = [];
      if (totalPage <= 10) {
        for (let i = 1; i <= totalPage; i++) {
          this.pager.push(i);
        }
      } else {
        if (page >= 1 && page <= 5) {
          // 前5条
          for (let i = 1; i <= 8; i++) {
            this.pager.push(i);
          }
          this.pager.push("...");
          this.pager.push(totalPage);
        } else if (page <= totalPage && page >= totalPage - 5) {
          // 后5条
          this.pager.push(1);
          this.pager.push("...");
          for (let i = totalPage - 7; i <= totalPage; i++) {
            this.pager.push(i);
          }
        } else {
          // 中间
          this.pager.push(1);
          this.pager.push("...");

          for (let i = page - 3; i <= page + 3; i++) {
            this.pager.push(i);
          }

          this.pager.push("...");
          this.pager.push(totalPage);
        }
      }
    },
    pre() {
      if (this.page > 1) {
        this.page--;
        this.getPlayList(this.page);
      } else {
        return alert("已经是第一页了");
      }
    },
    next() {
      console.log(this.totalPage);
      if (this.page < this.totalPage) {
        this.page++;
        this.getPlayList(this.page);
      } else {
        return alert("已经是最后一页了");
      }
    },
    show(){
      this.status = !this.status;
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}

.box {
  width: 980px;
  margin: 0px auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  padding: 30px;
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
.title1 > div:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
}
.title1 a {
  line-height: 42px;
  font-size: 24px;
  color: #333;
  border: none;
}
.title1 > div:nth-of-type(1) p:nth-of-type(1) {
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
  user-select: none;
  margin-left: 5px;
}
.title1 button {
  width: 45px;
  height: 30px;
  background-color: #c60c0c;
  border-radius: 5px;
  color: #fff;
  border: none;
}
.playlist-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.options {
  position: absolute;
  width: 720px;
  /* height: 410px; */
  background-color: #fff;
  top: 50px;
  z-index: 100;
  border: 1px solid #bbb;
  /* display: none; */
}
.options h3 {
  width: 100%;
  height: 60px;
  display: block;
  /* background-color: lightblue; */
  align-items: center;
  padding-left: 30px;
  padding-top: 20px;
  border-bottom: 1px solid #ccc;
}
.options h3 a {
  display: block;
  width: 70px;
  height: 25px;
  text-decoration: none;
  border: 1px solid #ccc;
  font-size: 12px;
  color: #333;
  line-height: 25px;
  font-weight: normal;
  text-align: center;
}
.options-item {
  width: 100%;
  /* height: 40px; */
  /* background-color: pink; */
  display: flex;
  justify-content: start !important;
}
.options-content {
  display: block !important;
}
.options-left {
  width: 14%;
  /* background-color: lightblue; */
  align-items: center;
  border-right: 1px solid #e6e6e6;
}
.options-left i {
  display: inline-block;
  width: 23px;
  height: 23px;
  background-color: #fff;
  margin-left: 20px;
  background-image: url(https://s2.music.126.net/style/web2/img/icon.png?901a4af1b81c4e271bb77d2195d0c1cf);
  background-repeat: no-repeat;
  background-position: -20px -735px;
  vertical-align: middle;
  margin-right: 10px;
}
.options-content>div:nth-of-type(2) i {
  background-position: 0 -60px;
}
.options-content>div:nth-of-type(3) i {
  background-position: 0 -88px;
}
.options-content>div:nth-of-type(4) i {
  background-position: 0 -117px;
}
.options-content>div:nth-of-type(5) i {
  background-position: 0 -141px;
}

.options-left a {
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  /* margin-right: 10px; */
  vertical-align: middle;
}
.options-right {
  width: 85%;
  text-align: left;
  padding-left: 5px;
}
.options-right p {
  width: 100%;
  margin: 0;
  color: #d8d8d8;
  border: none;
  text-align: left;
  flex-wrap: wrap;
  justify-content: start;
}
.options-right p a {
  text-decoration: none;
  color: #333;
  line-height: 40px;
  font-size: 12px;
  margin: 0 8px;
  display: inline-block;
  height: 40px;
}
.item {
  width: 140px;
  font-size: 12px;
  margin-right: 30px;
  margin-bottom: 20px;
}

.item:nth-child(5n) {
  margin-right: 0;
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
  background-color: rgba(0, 0, 0, 0.7);
  padding-left: 10px;
  /* background-image: url(coverall.png); */
  background-repeat: no-repeat;
  background-position: 0 -537px;
  height: 27px;
  line-height: 27px;
}
.earphone {
  background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?66b1a13388574f0e3fb8cfaf6913c4eb);
  display: inline-block;
  width: 14px;
  height: 11px;
  background-position: 0 -24px;
  margin-right: 5px;
}
.img-box .play-count {
  color: #ccc;
}

.title {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 5px;
}

.author-box .by {
  color: #999;
}
.pager {
  margin: 0 auto;
  text-align: center;
}
.pager span {
  display: inline-block;
  /* width: 30px; */
  border: 1px solid #ccc;
  text-align: center;
  height: 30px;
  align-items: center;
  vertical-align: top;
  margin-right: 10px;
}
.pager a,
.pager i {
  display: inline-block;
  line-height: 30px;
  padding: 0 10px;
  text-decoration: none;
  /* padding: 0 5px; */
  color: #333;
}
.pager button {
  width: 80px;
  height: 30px;
  color: #333;
  font-size: 12px;
}
.pre {
  margin-right: 20px;
}
.next {
  margin-left: 10px;
}
.color {
  background-color: #cb0b11;
}
.color a {
  color: #fff;
}
</style>