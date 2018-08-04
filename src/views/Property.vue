<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh opacity-50" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-16 lg:mb-20")
      div(class="hero mx-auto flex items-center justify-center")
        div(class="w-full")
          h1(class="text-center text-3xl lg:text-5xl capitalize text-white mb-4") Property
          div
            div(class="flex items-center w-full mx-auto lg:text-lg")
              input(type="text" class="p-2 lg:px-4 lg:py-4 flex-1" placeholder="Telusuri berdasarkan lokasi, nama lingkungan atau nama property")
              button(class="text-center py-2 px-4 lg:py-4 lg:px-16 rounded bg-green text-white")
                span.block Search
    
    div(class="px-6 max-w-2xl mx-auto")
      ul(class="list-reset flex flex-wrap")
        li(v-for='post in PropertyData' class="w-full md:w-1/2 lg:w-1/3 mb-8 px-3")
          <router-link to='/house' class="no-underline block">
            div(class="w-full")
              div(class="Ratio Ratio--4x3 mb-3 rounded overflow-hidden")
                div(class="RatioInner bg-center bg-cover" :style="{'background-image':'url('+post.imgUrl+')'}")
            div(class="")
              div(class="flex items-center mb-2")
                span(class="inline-block pr-3 text-xs font-bold text-black") Medan, Indonesia
                span(class="flex-1 header-line bg-grey")
              div
                h4(class="text-base text-black mb-2") {{post.title}}
                span(class="block text-sm") {{post.price}}
          </router-link>
    div(class="text-center mt-4 mb-16")
      img(src="../assets/loading2.svg" class="w-16")
</template>

<script>

import PropertyData from '@/data/property.js';

export default {
  name: 'Property',
  data: function() {
    return {
      rents: null,
      PropertyData,

    }
  },
}
</script>
