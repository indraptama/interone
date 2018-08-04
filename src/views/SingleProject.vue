<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-75vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-75vh" :style="{'background-image':'url('+`${baseUrl}img/project/tower1.jpg`+')'}")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-8 lg:mb-20")
      div(class="hero75 mx-auto flex items-end justify-center lg:justify-start")

    // Content
    div(class="max-w-2xl px-6 mx-auto mb-8 lg:mb-8")
      <SectionHeader title="Internusa Tower"></SectionHeader>
    
    div(class="max-w-2xl px-6 mx-auto mb-16 lg:mb-24 flex flex-col-reverse lg:flex-row-reverse")
      div(class="lg:w-2/5 lg:ml-16 mb-8")
        h4(class="mb-4 text-blue-darker text-blue-darker") Project Location
        div(class="borders py-4")
          div(class="border-b pb-4 mb-4")
            div(class="Ratio Ratio--4x3")
              div(class="RatioInner bg-cover bg-center bg-red" :style="{'background-image':'url('+`${baseUrl}img/monas.jpg`+')'}")
        div(class="borders py-4")
          h4(class="mb-4 text-blue-darker text-blue-darker") Project Gallery
          div(class="")
            ul(class="list-reset flex flex-wrap pb-3")
              li(class="w-1/4 p-1")
                div(class="Ratio bg-blue-darker")
                  div(class="RatioInner bg-cover bg-center bg-red" :style="{'background-image':'url('+`${baseUrl}img/project/tower1.jpg`+')'}")
              li(class="w-1/4 p-1")
                div(class="Ratio bg-blue-darker")
                  div(class="RatioInner bg-cover bg-center bg-red" :style="{'background-image':'url('+`${baseUrl}img/project/tower2.jpg`+')'}")
              li(class="w-1/4 p-1")
                div(class="Ratio bg-blue-darker")
                  div(class="RatioInner bg-cover bg-center bg-red" :style="{'background-image':'url('+`${baseUrl}img/project/tower1.jpg`+')'}")
              li(class="w-1/4 p-1")
                div(class="Ratio bg-blue-darker")
                  div(class="RatioInner bg-cover bg-center bg-red" :style="{'background-image':'url('+`${baseUrl}img/project/tower2.jpg`+')'}")




      div(class="lg:w-3/5 leading-loose")
        .content.max-w-md.mx-auto(class="mb-4 lg:mb-12")
          h4(class="mb-4 text-blue-darker text-blue-darker") Project Description
          p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        .content.max-w-md.mx-auto(class="mb-4 lg:mb-12")
          h4(class="mb-4 text-blue-darker") Project Details
          ul(class="list-reset flex flex-wrap")
            li(class="w-1/2 mb-3")
              h5 Type
              p Tower
            li(class="w-1/2 mb-3")
              h5 Luas Tanah
              p 5.000 m2
            li(class="w-1/2 mb-3")
              h5 Jumlah Lantai
              p 35 Lantai
            li(class="w-1/2 mb-3")
              h5 Luas Bangunan
              p Tanah Kosong
            li(class="w-1/2 mb-3")
              h5 Start Project
              p 1 Januari 2018
            li(class="w-1/2 mb-3")
              h5 Est. Pengerjaan
              p 2 Tahun
       
          
      
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  components: {
    SectionHeader,
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>
