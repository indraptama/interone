<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh opacity-25" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-12 lg:mb-0")
      div(class="hero mx-auto flex items-center justify-center")
        h1(class="text-center text-3xl lg:text-5xl capitalize text-white font-black") Our Project.  

    // Grid Start
    div(class="px-6 max-w-3xl mx-auto flex flex-col zigzag f-top-4")
      <ProjectThumb title='Internusa Tower' loc='Medan, Indonesia' img='https://source.unsplash.com/800x600/?building'/>
      <ProjectThumb title='Internusa 800' loc='Medan, Indonesia' img='https://source.unsplash.com/800x600/?house'/>
      <ProjectThumb title='Bandung Ecopark' loc='Bandung, Indonesia' img='https://source.unsplash.com/800x600/?house'/>
      <ProjectThumb title='Kawasan Industri Percut' loc='Medan, Indonesia' img='https://source.unsplash.com/800x600/?house'/>
      
        
</template>

<script>

import ProjectThumb from '@/components/ProjectThumb.vue';

export default {
  components: {
    ProjectThumb
  }
}
</script>
