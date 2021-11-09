import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "网易云音乐" },
    alias: "/discover",
    component: Home,
    children: [
      {
        path: "",
        meta: { title: "网易云音乐" },
        component: () => import("../views/discover/Discover.vue"),
      },
      {
        path: "toplist",
        meta: { title: "飙升榜 - 排行榜 - 网易云音乐" },
        component: () => import("../views/discover/Toplist.vue"),
      },
      {
        path: "playlist/:cat?",
        meta: { title: "全部歌单 - 歌单 - 网易云音乐" },
        component: () => import("../views/discover/Playlist.vue"),
      },
      {
        path: "djradio",
        meta: { title: "主播电台 - 网易云音乐" },
        component: () => import("../views/discover/DJradio.vue"),
      },
      {
        path: "artist",
        meta: { title: "推荐歌手 - 歌手 - 网易云音乐" },
        component: () => import("../views/discover/Artist.vue"),
      },
      {
        path: "album",
        meta: { title: "新碟上架 - 网易云音乐" },
        component: () => import("../views/discover/Album.vue"),
      },
    ],
  },
  {
    path: "/mymusic",
    name: "MyMusic",
    meta: { title: "网易云音乐" },
    component: () => import("../views/MyMusic.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    meta: { title: "网易云音乐" },
    component: () => import("../views/Friends.vue"),
  },
  {
    path: "/download",
    name: "Download",
    meta: { title: "下载网易云音乐iPhone、iPad、Mac、Android、WP、PC版客户端" },
    component: () => import("../views/Download.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title
  next();
});

export default router;
