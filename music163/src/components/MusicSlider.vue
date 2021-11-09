<template>
  <div
    class="banner-box" :style="{'backgroundImage':'url(' + img + '?imageView&blur=40x20)'}">
    <div class="banner">
      <div class="wrap">
        <div class="swiper" @mouseenter="stop" @mouseleave="start">
          <div class="images">
            <a v-for="(item, i) in items" :key="item.id" :style="{ opacity: currentIndex == i ? 1 : 0 }" >
              <img :src="item.imageUrl" alt="" />
            </a>
          </div>

          <div class="navs">
            <i class="nav left" @click="prev"></i>
            <i class="nav right" @click="next"></i>
          </div>

          <div class="dots">
            <i v-for="(item, i) in items" :key="i" :class="{ active: currentIndex == i }"  @click="changeIndex(i)"></i>
          </div>
        </div>
      </div>
      <div class="right">
        <a href=""></a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      currentIndex: 0,
      timer: null,
      img:'http://p1.music.126.net/gaQ2IEi5rMrnI-FZpW0Qng==/109951166588557350.jpg'
    };
  },
  munted() {
    this.getItems();
    // this.timer = window.setInterval(this.next, 3000);
  },
  methods: {
    getItems() {
      let url = `http://localhost:3000/banner`;
      axios.get(url).then((res) => {
        // console.log(res.data.banners);
        this.items = res.data.banners;
        this.img = this.items[this.currentIndex].imageUrl;
      });
    },
    next() {
      if (this.currentIndex < this.items.length - 1)
        this.currentIndex = this.currentIndex + 1;
      else this.currentIndex = 0;
      this.img = this.items[this.currentIndex].imageUrl;
    },
    prev() {
      if (this.currentIndex == 0) this.currentIndex = this.items.length - 1;
      else this.currentIndex = this.currentIndex - 1;
      this.img = this.items[this.currentIndex].imageUrl;
    },

    changeIndex(i) {
      this.currentIndex = i;
      this.img = this.items[this.currentIndex].imageUrl;
    },
    stop() {
      window.clearInterval(this.timer);
    },
    start() {
      this.timer = window.setInterval(this.next, 5000);
    },
  },
  created() {
    this.getItems();
    this.timer = window.setInterval(this.next, 5000);
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  },
};
</script>

<style scoped>
.banner-box {
  width: 100%;
  margin: 0 auto;
  height: 285px;
  /* background-color: pink; */
  background-size: 6000px;
  background-position: center center;
}
.banner {
  width: 982px;
  height: 100%;
  background-color: lightblue;
  margin: 0 auto;
  position: relative;
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  /* background-color: lightgreen; */
  width: 254px;
  height: 285px;
}
.right a {
  display: block;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
  background-image: url(https://s2.music.126.net/style/web2/img/index/download.png?b52b30aaa009f9f25360b6784205979d);
  background-position: 0 0px;
}
.right p {
  position: absolute;
  color: #8d8d8d;
  bottom: 10px;
  left: 12px;
}

.swiper {
  width: 730px;
  height: 285px;
  position: relative;
}

.images {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.images a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 2s;
}

.images a img {
  width: 100%;
  height: 100%;
}

.navs {
  position: absolute;
  left: -10%;
  top: 50%;
  transform: translateY(-50%);
  width: 156%;
  height: 69px;
}

.nav {
  width: 41px;
  height: 69px;
  position: absolute;
  background-image: url(https://s2.music.126.net/style/web2/img/index/banner.png?2629007435f39b2467ae488654a8b3ec);
  background-repeat: no-repeat;
  cursor: pointer;
}

.left {
  left: 0;
  background-position: 0 -360px;
}

.left:hover {
  background-position: 0 -430px;
}

.right {
  right: 0;
  background-position: 0 -508px;
}

.right:hover {
  background-position: 0 -578px;
}

.dots {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: 20px;
  text-align: center;
}

.dots i {
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  background: #f3f3f3;
  margin: 0 4px;
  cursor: pointer;
}

.dots i:hover,
.dots i.active {
  background: #c00c0c;
  border-color: #c00c0c;
}
</style>