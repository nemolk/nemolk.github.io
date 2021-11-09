<template>
  <div class="footer">
    <div class="content">
      <div class="left">
        <p>
          <a href="javascript:void(0)">服务条款</a
          ><a href="javascript:void(0)">|</a>
          <a href="javascript:void(0)">隐私政策</a
          ><a href="javascript:void(0)">|</a>
          <a href="javascript:void(0)">儿童隐私政策</a
          ><a href="javascript:void(0)">|</a>
          <a href="javascript:void(0)">版权控诉指引</a
          ><a href="javascript:void(0)">|</a>
          <a href="javascript:void(0)">意见反馈</a
          ><a href="javascript:void(0)">|</a>
          <a href="javascript:void(0)">广告合作</a>
        </p>
        <p>
          <span>网易公司版权所有©1997-2021</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="javascript:void(0)">浙网文[2021] 1186-054号</a>
        </p>
        <p>
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>举报邮箱：</span>
          <a href="javascript:void(0)">ncm5990@163.com</a>
        </p>
        <p>
          <a href="javascript:void(0)"
            >粤B2-20090191-18 工业和信息化部备案管理系统网站</a
          >
          <a href="javascript:void(0)"> 浙公网安备 33010902002564号</a>
        </p>
      </div>
      <div class="right">
        <ul>
          <li>
            <a href=""></a>
            <span></span>
          </li>
          <li>
            <a href=""></a>
            <span></span>
          </li>
          <li>
            <a href=""></a>
            <span></span>
          </li>
          <li>
            <a href=""></a>
            <span></span>
          </li>
          <li>
            <a href=""></a>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  border-top: 1px solid #ccc;
  background-color: #F2F2F2;
  padding-bottom: 50px;
}
.content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.left {
  width: 50%;
  font-size: 12px;
}
.left a {
  text-decoration: none;
  color: #999;
  margin-right: 10px;
}
.left a:hover {
  text-decoration: underline;
}
.left span:nth-of-type(1) {
  margin-right: 20px;
  color: #666;
}
.left p {
  margin: 10px 0;
}
.left p:nth-of-type(2) a,
.left p:nth-of-type(3) a,
.left p:nth-of-type(4) a {
  color: #666;
}
.right {
  width: 50%;
}
.right ul {
  float: right;
  display: flex;
  width: 420px;
  margin-top: 33px;
  justify-content: space-between;
}
.right ul li {
  list-style: none;
}
.right ul li a {
  width: 50px;
  height: 45px;
  display: block;
  background-color: pink;
  padding: 0 5px;
}
.right ul li span {
  width: 72px;
  height: 14px;
  display: block;
  /* background-color: pink; */
}
.right ul li:nth-of-type(1) a {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?f3e605833c749b2a11e29cc91d6768b0)
    no-repeat;
  background-size: 110px 552px;
  background-position: -63px -456.5px;
  margin-left: 5px;
  margin-bottom: 5px;
}
.right ul li:nth-of-type(1) span {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?15866b30f7ed2ed29f31bf6b08a88be6)
    no-repeat;
  background-size: 180px 139px;
  background-position: 0 -108px;
  margin-left: -6px;
}
.right ul li:nth-of-type(2) a {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?f3e605833c749b2a11e29cc91d6768b0)
    no-repeat;
  background-size: 110px 552px;
  background-position: -63px -101px;
  /* margin-left: 5px; */
  margin-bottom: 5px;
}
.right ul li:nth-of-type(2) span {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?15866b30f7ed2ed29f31bf6b08a88be6)
    no-repeat;
  background-size: 180px 139px;
  background-position: -1px -91px;
}
.right ul li:nth-of-type(3) a {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?f3e605833c749b2a11e29cc91d6768b0)
    no-repeat;
  background-size: 110px 552px;
  background-position: 0px 0px;
  /* margin-left: 5px; */
  margin-bottom: 5px;
}
.right ul li:nth-of-type(3) span {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?15866b30f7ed2ed29f31bf6b08a88be6)
    no-repeat;
  background-size: 180px 139px;
  background-position: 0px 0px;
}
.right ul li:nth-of-type(4) a {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?f3e605833c749b2a11e29cc91d6768b0)
    no-repeat;
  background-size: 110px 552px;
  background-position: -60px -50px;
  /* margin-left: 5px; */
  margin-bottom: 5px;
}
.right ul li:nth-of-type(4) span {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?15866b30f7ed2ed29f31bf6b08a88be6)
    no-repeat;
  background-size: 180px 139px;
  background-position: 0px -54px;
}
.right ul li:nth-of-type(5) a {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?f3e605833c749b2a11e29cc91d6768b0)
    no-repeat;
  background-size: 110px 552px;
  background-position: 0px -101px;
  /* margin-left: 5px; */
  margin-bottom: 5px;
}
.right ul li:nth-of-type(5) span {
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?15866b30f7ed2ed29f31bf6b08a88be6)
    no-repeat;
  background-size: 180px 139px;
  background-position: -1px -72px;
}
</style>