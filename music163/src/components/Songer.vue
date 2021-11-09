<template>
  <div class="songer">
    <p class="title">
      <span>入驻歌手</span>
      <span>查看全部＞</span>
    </p>
    <div class="right">
      <img
        src="https://p2.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62"
        alt=""
      />
      <div class="txt">
        <p>张惠妹aMEI</p>
        <p>台湾歌手张惠妹</p>
      </div>
    </div>
    <div class="right">
      <img
        src="http://p2.music.126.net/wDxCsT3YEYdNg-UZU_ZKeg==/109951166047225823.jpg?param=62y62"
        alt=""
      />
      <div class="txt">
        <p>Fine乐团</p>
        <p>独立音乐人</p>
      </div>
    </div>
    <div class="right">
      <img
        src="http://p2.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=62y62"
        alt=""
      />
      <div class="txt">
        <p>萬曉利</p>
        <p>民谣歌手、中国现代民谣的代表人物之一</p>
      </div>
    </div>
    <div class="right">
      <img
        src="http://p2.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=62y62"
        alt=""
      />
      <div class="txt">
        <p>音乐人赵雷</p>
        <p>民谣歌手</p>
      </div>
    </div>
    <div class="right">
      <img
        src="http://p2.music.126.net/mS2PtUF2F_x949tJHS5Kog==/109951166457235020.jpg?param=62y62"
        alt=""
      />
      <div class="txt">
        <p>王三溥</p>
        <p>音乐人</p>
      </div>
    </div>
    <div class="musisor">
      <h1>申请成为网易音乐人</h1>
    </div>
  </div>
</template>

<style scoped>
.songer {
  /* outline: 1px solid blue; */
  padding: 10px 20px;
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
}
.title span:nth-of-type(1) {
  color: #333;
  font-weight: 700;
}
.title span:nth-of-type(2) {
  color: #666;
  cursor: pointer;
}
.title span:nth-of-type(2):hover {
  text-decoration: underline;
  cursor: pointer;
}
.right {
  height: 62px;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.right img {
  width: 62px;
  height: 62px;
  vertical-align: top;
}
.txt {
  border: 1px solid #e9e9e9;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  margin-bottom: 10px;
}
.txt p:nth-of-type(1) {
  font-size: 14px;
  color: #333;
  font-weight: 800;
  margin-top: 10px;
}
.txt p:nth-of-type(2) {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.musisor {
  border-radius: 4px;
  background-image: url(https://s2.music.126.net/style/web2/img/button2.png?d0608d70dd4ae7e37c0631c1cfb3dc06);
  background-repeat: no-repeat;
  color: #333;
  background-position: 0 -59px;
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  text-align: center;
}
.musisor h1 {
    line-height: 30px;
  font-size: 12px;
}
</style>