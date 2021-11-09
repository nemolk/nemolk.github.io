<template>
  <div class="nav-box">
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discover" exact :class="{active: $route.path == '/',}">推荐</router-link>
        </li>
        <li><router-link to="/discover/toplist">排行榜</router-link></li>
        <li><router-link to="/discover/playlist">歌单</router-link></li>
        <li><router-link to="/discover/djradio">主播电台</router-link></li>
        <li><router-link to="/discover/artist">歌手</router-link></li>
        <li><router-link to="/discover/album">新碟上架</router-link></li>
      </ul>
    </div>
  </div>
</template>



<style scoped>
.nav-box {
  height: 35px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}

.nav {
  width: 1100px;
  margin: 0 auto;
  position: relative;
}

.nav ul {
  display: flex;
  flex-wrap: nowrap;
  justify-items: center;
  height: 33px;
  line-height: 30px;
  position: absolute;
  left: 177px;
}

.nav ul li {
  padding: 0 20px;
}

.nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 2px 10px 3px 10px;
  border-radius: 15px;
}

.nav ul li a.router-link-active,
.nav ul li a.active {
  background: #9b0909;
}
</style>