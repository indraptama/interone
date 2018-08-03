
<template lang="pug">
  div(id="app")
    <MainHeader />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
      

</template>

<script>

import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>



<style>

</style>
<style src="@/assets/inter/inter-ui.css"></style>
<style src="@/style/main.css"></style>
