<template>
  <div class="box">
    <div class="left">
      <div class="item" v-for="t in titleList" :key="t.id">
        <h1>{{ t.name }}</h1>
        <ul>
          <li
            v-for="l in t.list"
            :key="l.id"
            @click="getUrl(l.type, l.area, l.name)"
            :class="l.type == type && l.area == area ? 'active' : ''"
          >
            <a>{{ l.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <h1>{{ title }}</h1>
      <ul class="letter">
        <li
          v-for="l in letterList"
          :key="l"
          @click="getLetter(l)"
          :class="l == initial ? 'letterA' : ''"
        >
          <span v-if="l == '-1'">
            <a>热门</a>
          </span>
          <span v-else-if="l == '0'">
            <a>其他</a>
          </span>
          <span v-else>
            <a>{{ l }}</a>
          </span>
        </li>
      </ul>
      <div class="content">
        <div class="itemC" v-for="(d, i) in detail" :key="d.id">
          <img :src="d.picUrl" alt="" v-if="i < 10" />
          <p v-if="i < 20" >
            <a href="">{{ d.name }}</a>
          </p>
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
      titleList: [
        {
          id: 1,
          name: "华语",
          list: [
            { id: 1, type: 1, area: 7, name: "华语男歌手" },
            { id: 2, type: 2, area: 7, name: "华语女歌手" },
            { id: 3, type: 3, area: 7, name: "华语组合/乐队" },
          ],
        },
        {
          id: 2,
          name: "欧美",
          list: [
            { id: 1, type: 1, area: 96, name: "欧美男歌手" },
            { id: 2, type: 2, area: 96, name: "欧美女歌手" },
            { id: 3, type: 3, area: 96, name: "欧美组合/乐队" },
          ],
        },
        {
          id: 3,
          name: "日本",
          list: [
            { id: 1, type: 1, area: 8, name: "日本男歌手" },
            { id: 2, type: 2, area: 8, name: "日本女歌手" },
            { id: 3, type: 3, area: 8, name: "日本组合/乐队" },
          ],
        },
        {
          id: 4,
          name: "韩国",
          list: [
            { id: 1, type: 1, area: 16, name: "韩国男歌手" },
            { id: 2, type: 2, area: 16, name: "韩国女歌手" },
            { id: 3, type: 3, area: 16, name: "韩国组合/乐队" },
          ],
        },
        {
          id: 5,
          name: "其他",
          list: [
            { id: 1, type: 1, area: 0, name: "其他男歌手" },
            { id: 2, type: 2, area: 0, name: "其他女歌手" },
            { id: 3, type: 3, area: 0, name: "其他组合/乐队" },
          ],
        },
      ],
      area: 7,
      type: 1,
      initial: -1,
      title: "华语男歌手",
      letterList: [
        "-1",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "0",
      ],
      detail: [],
    };
  },
  components: {},
  created() {
    this.render();
  },
  methods: {
    getUrl(type, area, title) {
      if (type != this.type && area != this.area) {
        this.initial = -1;
      }
      console.log(type, area);
      this.area = area;
      this.type = type;
      this.title = title;
      this.render();
    },
    getLetter(letter) {
      this.initial = letter;
      console.log(letter);
      this.render();
    },
    render() {
      let url = `http://localhost:3000/artist/list?type=${this.type}&area=${this.area}&initial=${this.initial}`;
      axios.get(url).then((res) => {
        console.log(res.data.artists);
        this.detail = res.data.artists;
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 1200px;
  /* // height: 1000px; */
  /* // background-color: pink; */
  border: 1px solid #d3d3d3;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.box .left {
  width: 18%;
  /* height: 100%; */
  border-right: 1px solid #d3d3d3;
  /* // background-color: lightblue; */
  padding: 20px 10px;
  padding-top: 0;
  margin-top: 0;
}
.left .item {
  /* // margin: 5px 0 0; */
  padding-top: 16px;
  border-top: 1px solid #d3d3d3;
}
.item h1 {
  color: #333;
  font-size: 16px;
  padding: 0 0 0 14px;
}
.item ul {
  padding: 0;
  margin: 0;
}
.item ul li {
  /* // padding: 13px 0; */
  line-height: 30px;
  padding-left: 27px;
  list-style: none;
  cursor: pointer;
  /* // background-color: #fff; */
}
.item ul li a {
  text-decoration: none;
  color: #333;
  font-size: 12px;
}

li:hover {
  text-decoration: underline;
}
.active {
  border: 1px solid #ccc;
}
.active a {
  color: #c20c0c;
}

.left div:nth-of-type(1) {
  border-top: none;
}

.right {
  width: 75%;
  height: 100%;
  /* // background-color: pink; */
}
.right h1 {
  /* height: 40px; */
  width: 95%;
  border-bottom: 2px solid #c20c0c;
  font-size: 24px;
  padding: 10px 0;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.right .letter {
  width: 100%;
  display: flex;
  padding: 0;
  margin-bottom: 10px;
}
.right .letter li {
  /* // width:22px; */
  list-style: none;
  margin-right: 3px;
  font-size: 14px;
  cursor: pointer;
  padding: 0 6px;
}
.right .letter li span {
  text-align: center;
}
.right .letter li span a {
  /* // width: 28px; */
  display: inline-block;
  line-height: 24px;
  text-align: center;
}

.letter .letterA {
  border-radius: 2px;
  color: #fff;
  background: #c20c0c;
}

.right .content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 300px;
  /* // background-color: lightblue; */
}
.right .content .itemC {
  width: 20%;
  background-color: #fff;
  margin-bottom: 40px;
  /* // text-align: center; */
}
.right .content .itemC img {
  width: 130px;
  height: 130px;
}
.right .content .itemC p {
  margin: 0;
  padding: 0;
}
.right .content .itemC p a {
  display: inline-block;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #000;
  font-size: 12px;
}
</style>


