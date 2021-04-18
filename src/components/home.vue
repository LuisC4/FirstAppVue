<template>
  <div class="home">
    <appheader/>
    <appbody/>
  </div>
</template>

<script>
import appheader from './appheader.vue'
import appbody from './appbody.vue'

export default {
  name: 'home',
  components: {
    appheader,
    appbody
  }
}
</script>

<style>

</style>