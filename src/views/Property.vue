<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh opacity-50" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-16 lg:mb-20")
      div(class="hero mx-auto flex items-center justify-center")
        h1(class="text-center text-3xl lg:text-5xl capitalize text-white") Property
    
    div(class="px-6 max-w-2xl mx-auto")
      ul(class="list-reset")
        li(class="lg:w-1/3")
          div(class="")
            div(class="Ratio Ratio--4x3 mb-2 rounded-lg")
              div(class="RatioInner bg-center bg-cover" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")
          div(class="")
            div(class="flex items-center text-blue mb-2")
              span(class="inline-block pr-3 text-xs font-bold") Medan, Indonesia
              span(class="flex-1 header-line bg-blue")
            div
              h4(class="text-lg text-black mb-2") Kantor Bakrie Tower Lantai 5
              span(class="block text-base") Rp.40.000.000 / tahun
</template>

<script>
export default {
  data: function() {
    return {
      rents: [
        {
          
        }
      ]
    }
  }
}
</script>
