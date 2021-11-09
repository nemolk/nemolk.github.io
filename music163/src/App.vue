<template>
  <div class="app">
    <MusicHeader />
    <router-view />
    <MusicFooter />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

body {
  font-size: 12px;
  color: #333;
}
</style>
