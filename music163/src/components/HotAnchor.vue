<template>
  <div class="anchor">
    <p class="title">
      <span>热门主播</span>
    </p>
    <div class="item">
      <img
        src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
        alt=""
      />
      <div class="txt">
        <p>陈立</p>
        <p>心理学家、美食家陈立教授</p>
      </div>
    </div>
    <div class="item">
      <img
        src="http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40"
        alt=""
      />
      <div class="txt">
        <p>刘维-Julius</p>
        <p>歌手、播客节目《维维道来》主理人</p>
      </div>
    </div>
    <div class="item">
      <img
        src="http://p1.music.126.net/C8jFbOTjUOnTKEHX6uuzOg==/109951166239584597.jpg?param=40y40"
        alt=""
      />
      <div class="txt">
        <p>莫非定律MoreFeel</p>
        <p>男女双人全创作独立乐团</p>
      </div>
    </div>
    <div class="item">
      <img
        src="http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40"
        alt=""
      />
      <div class="txt">
        <p>碎嘴许美达</p>
        <p>脱口秀网络红人</p>
      </div>
    </div>
    <div class="item">
      <img
        src="http://p1.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg?param=40y40"
        alt=""
      />
      <div class="txt">
        <p>银临Rachel</p>
        <p>古风音乐人</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.anchor {
  padding: 10px 20px;
  margin-top: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.title span {
  display: inline-block;
  font-size: 12px;
  color: #333;
  font-weight: 700;
}
.item {
  display: flex;
  height: 40px;
  /* background-color: pink; */
  margin-bottom: 10px;
}
.item img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.txt p{
  width: 160px;
  line-height: 21px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.txt p:nth-of-type(1) {
  color: #000;
}
.txt p:nth-of-type(2) {
  color: #666;
}
</style>