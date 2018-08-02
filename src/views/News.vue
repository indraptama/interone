<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh opacity-50" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-16 lg:mb-20")
      div(class="hero mx-auto flex items-center justify-center")
        h1(class="text-center text-3xl lg:text-5xl capitalize text-white") News Update
    
    div(class="max-w-2xl mx-auto px-6")
      <SectionHeader title="latest news"></SectionHeader>
      div(class="")
        ul(class="list-reset flex flex-wrap")
          // News JSON
          li(v-for='post in news' class="w-full md:w-1/2 lg:w-1/3 mb-2 md:mb-0 md:px-3")
            div(class="bg-white flex md:block")
              // News Image
              div(class="Ratio Ratio--4x3 w-32 md:w-auto")
                div(class="RatioInner bg-center bg-cover" :style="{'background-image':'url('+post.urlToImage+')'}")
              div(class="content md:px-4 f-top-4 flex-1")
                div(class="bg-white p-3")
                  h3(class="text-base mb-2") {{ post.title }}
                  p(class="text-xs mb-2") {{ post.publishedAt }}
                  div(class="hidden md:block leading-loose text-sm") {{ post.description }}
      
       
        
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue';
import axios from 'axios';

export default {
  components: {
    SectionHeader,
  },
  data: function() {
    return {
      news: null
    }
  },
  mounted: function() {
    return (
      axios
        .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=146da8fcb8414baeaac8f8cb789f92bb')
        .then(response => (this.news = response.data.articles))
    )
  }
}
</script>
