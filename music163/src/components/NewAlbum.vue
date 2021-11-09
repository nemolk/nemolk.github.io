<template>
  <div class="new-album">
    <div class="hot">
      <div class="title1">
        <h1><i></i>新碟上架</h1>
        <span
          ><router-link to="/discover/album">更多</router-link> <i></i
        ></span>
      </div>
      <div class="box">
        <div class="pre" @click="pre"></div>
        <div class="next" @click="next"></div>
        <div class="view">
          <div
            class="banner"
            :style="{ left: -(currentIndex * 622) + 'px' }"
            ref="y"
          >
            <div class="center">
              <div class="item" v-for="h in hotlist1" :key="h.id">
                <div class="bg">
                  <img :src="h.blurPicUrl" alt="" />
                </div>
                <p class="song">{{ h.name }}</p>
                <p class="name">{{ h.artist.name }}</p>
              </div>
            </div>
            <div class="center">
              <div class="item" v-for="h in hotlist2" :key="h.id">
                <div class="bg">
                  <img :src="h.blurPicUrl" alt="" />
                </div>
                <p class="song">{{ h.name }}</p>
                <p class="name">{{ h.artist.name }}</p>
              </div>
            </div>
            <div class="center">
              <div class="item" v-for="h in hotlist1" :key="h.id">
                <div class="bg">
                  <img :src="h.blurPicUrl" alt="" />
                </div>
                <p class="song">{{ h.name }}</p>
                <p class="name">{{ h.artist.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      hotlist1: [],
      hotlist2: [],
      limit: 10,
      area: "ALL",
      currentIndex: 0,
    };
  },
  created() {
    this.renderHot();
  },
  methods: {
    renderHot() {
      let url = `http://localhost:3000/album/newest`;
      axios.get(url).then((res) => {
        // console.log(res.data.weekData);
        this.hotlist1 = res.data.albums.filter((item, index) => index <= 4);
        this.hotlist2 = res.data.albums.filter(
          (item, index) => (index <= 9) & (index > 4)
        );
        // console.log(this.hotlist);
      });
    },
    pre() {
      if (this.currentIndex == 0) {
        this.$refs.y.className = " move";
        this.currentIndex = 2;
        this.$refs.y.style.left = -this.currentIndex * 622 + "px";
      }
      setTimeout(()=>{
        this.currentIndex--;
        this.$refs.y.className = 'banner';
        this.$refs.y.style.left = -this.currentIndex * 622 + "px";
      }, 50)
    },
    next() {
      // console.log(this.currentIndex);
      if (this.currentIndex == 2) {
        
        this.$refs.y.className = " move";
        this.currentIndex = 0;
        this.$refs.y.style.left = -this.currentIndex * 622 + "px";
      } 
      setTimeout(()=>{
        this.currentIndex++;
        this.$refs.y.className = 'banner';
        this.$refs.y.style.left = -this.currentIndex * 622 + "px";
      }, 50)
    },
  },
};
</script>

<style scoped>
body {
  background-color: #fff;
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
.newCD {
  width: 1200px;
  margin: 0 auto;
  /* height: 100px; */
  /* background-color: pink; */
  overflow: hidden;
  border: 1px solid #d3d3d3;
}
.hot,
.all {
  padding: 20px;
  padding-left: 30px;
  width: 100%;
}
.hot h1 {
  line-height: 42px;
  font-size: 20px;
  color: #333;
  border: none;
  font-weight: normal;
}
.hot h1 i {
  width: 33px;
  height: 33px;
  vertical-align: middle;
  display: inline-block;
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
  background-position: -225px -156px;
}
.title1 span a {
  text-decoration: none;
  line-height: 42px;
  color: #666;
  font-size: 12px;
}
.title1 span a:hover {
  text-decoration: underline;
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
.box {
  margin-top: 20px;
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  padding: 0 30px;
}
.view {
  width: 616px;
  height: 185px;
  overflow: hidden;
  position: relative;
}
.banner {
  left: 0;
  top: 0;
  position: absolute;
  width: 1866px;
  height: 185px;
  display: flex;
  justify-content: space-between;
  transition: all 2s linear;
}
.move {
  left: 0;
  top: 0;
  position: absolute;
  width: 1866px;
  height: 185px;
  display: flex;
  justify-content: space-between;
  transition: none;
}
.center {
  width: 616px;
  display: flex;
  /* background-color: lightblue; */
  justify-content: space-between;
  margin: 0 auto;
}
/* .view>div:nth-of-type(1) {
  left: 0;
  top: 0;
}
.view>div:nth-of-type(2) {
  left: 623px;
  top: 0;
}
.view>div:nth-of-type(3) {
  left: 1247px;
  top: 0;
} */
.item {
  width: 118px;
  /* background-color: lightblue; */
  margin-bottom: 15px;
  padding-top: 28px;
}
.bg {
  width: 118px;
  height: 100px;
  background-position: 0 -570px;
  background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?af2f3b7d433d2c1545043aae398e9d65);
}
.bg img {
  width: 100px;
  height: 100px;
  background-color: #fff;
}
.item p {
  margin: 0;
  padding: 0;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item p:nth-of-type(1) {
  margin: 5px 0;
  font-size: 12px;
  color: #000;
}
.item p:nth-of-type(2) {
  font-size: 12px;
  color: #666;
}
.pre {
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
  position: absolute;
  top: 71px;
  left: 4px;
  width: 17px;
  height: 17px;
  background-position: -260px -75px;
  z-index: 111;
  cursor: pointer;
}
.next {
  background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66);
  background-repeat: no-repeat;
  position: absolute;
  top: 71px;
  right: 4px;
  width: 17px;
  height: 17px;
  background-position: -300px -75px;
  z-index: 111;
  cursor: pointer;
}
</style>