<template>
  <div class="header-box">
    <div class="header">
      <div class="wrap">
        <div class="left">
          <div class="logo">
            <router-link to="/" exact>主页</router-link>
          </div>
          <ul>
            <li>
              <router-link
                to="/discover"
                :class="{ active: $route.path == '/' || $route.path.indexOf('/discover') !==  -1 }"
                ><em>发现音乐</em><span class="cor"></span
              ></router-link>
            </li>
            <li>
              <router-link to="/mymusic"
                ><em>我的音乐</em><span class="cor"></span
              ></router-link>
            </li>
            <li>
              <router-link to="/friends"
                ><em>朋友</em><span class="cor"></span
              ></router-link>
            </li>
            <li>
              <a href="https://music.163.com/store/product" target="_blank"
                ><em>商城</em><span class="cor"></span
              ></a>
            </li>
            <li>
              <a href="https://music.163.com/st/musician" target="_blank"
                ><em>音乐人</em><span class="cor"></span
              ></a>
            </li>
            <li>
              <router-link to="/download"
                ><em>下载客户端</em><span class="cor"></span
              ></router-link>
            </li>
          </ul>
        </div>
        <div class="right">左侧</div>
      </div>
    </div>
    <div class="redline"></div>
  </div>
</template>


<style scoped>
.header {
  height: 70px;
  background-color: #242424;
  overflow: hidden;
  font-size: 14px;
}

.wrap {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}

.left .logo a {
  display: inline-block;
  width: 176px;
  height: 69px;
  background: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4")
    no-repeat 0 9999px;
  background-position: 0 0;
  text-indent: -9999px;
}

.left,
.left ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
}

.left ul li a {
  display: block;
  color: #ccc;
  text-decoration: none;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  position: relative;
}

.left ul li a em {
  font-style: normal;
}

.left ul li a .cor {
  background: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4")
    no-repeat 0 9999px;
  position: absolute;
  left: 50%;
  top: 64px;
  width: 12px;
  height: 7px;
  margin-left: -6px;
  overflow: hidden;
  background-position: -226px 0;
  display: none;
}

.left ul li a.router-link-active,
.left ul li a.active {
  color: #fff;
  background-color: #000;
}

.left ul li a.router-link-active .cor,
.left ul li a.active .cor {
  display: block;
}

.redline {
  height: 5px;
  background-color: #c20c0c;
}
</style>