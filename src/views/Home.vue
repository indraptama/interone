<template lang="pug">
  div(class="home bg-blue-darker absolute pin-t pin-l pin-r")
    // Slider
    div(class="absolute pin-t pin-l pin-r h-screen opacity-50")
      div(class="absolute w-full h-screen bg-cover bg-center" style="background-image: url('https://source.unsplash.com/1600x900/?architecture,building')") 
    
    // Content
    div(class="relative px-6 max-w-2xl h-screen flex items-end lg:items-center mx-auto pb-8 lg:pb-0")
      div
        h1(class="text-xl lg:text-5xl lg:w-4/5 text-white mb-4 lg:mb-8") Since 2004<br>We have built commercial facilities and industrial parks in urban cities of Indonesia
        <router-link to='/project' class="inline-block text-white no-underline lg:text-xl border-b-2 py-3">See Our Project</router-link>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
