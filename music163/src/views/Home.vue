<template>
  <div class="home">
    <MusicNav/>

   <router-view/>
  </div>
</template>

<script>
import MusicNav from '../components/MusicNav.vue'
export default {
  name: 'Home',
  components:{
    MusicNav,
  }
}
</script>
