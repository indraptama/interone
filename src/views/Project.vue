<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh opacity-50" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-6 lg:mb-0")
      div(class="hero mx-auto flex items-center justify-center")
        h1(class="text-center text-3xl lg:text-5xl capitalize text-white") Project
    
    div(class="px-6 max-w-xl mx-auto mb-8 f-top-4")
      div(class="Ratio Ratio--16x9 bg-white mb-4")
        div(class="RatioInner bg-blue-darker bg-cover bg-center opacity-75" style="background-image: url('http://internusa.asia/wp-content/uploads/2018/05/slider2-1024x485.jpg')")
      div(class="lg:max-w-md mx-auto")
        div(class="flex items-center text-blue-darker")
          span(class="inline-block pr-3 text-base") Medan, Indonesia
          span(class="flex-1 header-line bg-blue-darker")
        h1(class="text-xl lg-text-7xl text-blue-darker") Internusa Tower
    

    // Grid Start
    div(class="px-6 max-w-2xl mx-auto flex flex-col zigzag")
      <ProjectThumb title='Internusa 800' loc='Medan, Indonesia' img='https://source.unsplash.com/800x600/?building'/>
      <ProjectThumb title='Kawasan Industri Percut' loc='Medan, Indonesia' img='https://source.unsplash.com/800x600/?houses,architecture'/>
      
        
</template>

<script>

import ProjectThumb from '@/components/ProjectThumb.vue';

export default {
  components: {
    ProjectThumb
  }
}
</script>
