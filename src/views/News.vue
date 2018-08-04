<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh opacity-25" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-16 lg:mb-20")
      div(class="hero mx-auto flex items-center justify-center")
        h1(class="text-center text-3xl lg:text-5xl capitalize text-white font-black") News Update
    
    div(class="max-w-2xl mx-auto px-6")
      <SectionHeader title="latest news"></SectionHeader>
      div(class="")
        ul(class="list-reset flex flex-wrap")
          // News JSON
          li(v-for='post in news' class="w-full md:w-1/2 lg:w-1/3 mb-4 md:px-3")
            div(class="bg-white flex md:block")
              // News Image
              <router-link to='/single-news' class="block Ratio Ratio--2x3 w-32 md:w-auto hover:opacity-75">
                div(class="RatioInner bg-center bg-cover" :style="{'background-image':'url('+post.imgUrl+')'}")
              </router-link>
              div(class="content md:px-4 flex-1")
                div(class="bg-white p-3")
                  h3(class="text-base mb-2 text-black leading-normal") {{ post.title }}
                  p(class="text-xs mb-4 text-grey-darker") {{ post.date }}
                  div(class="hidden md:block leading-loose text-sm") {{ post.content }}
      
       
        
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue';
import NewsFeed from '@/data/news.js';

export default {
  components: {
    SectionHeader,
  },
  data: function() {
    return {
      news: NewsFeed
    }
  },
  
}
</script>
