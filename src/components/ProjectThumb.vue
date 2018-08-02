<template lang="pug">
    div(class="w-full lg:w-4/5 mb-8 lg:mb-32")
        div(class="Ratio Ratio--16x9 bg-white mb-4")
          div(class="RatioInner bg-blue-darker bg-cover bg-center" :style="{'background-image':'url('+img+')'}")
        div(class="lg:w-3/5")
          div(class="flex items-center text-blue-darker")
            span(class="inline-block pr-3 text-base") {{loc}}
            span(class="flex-1 header-line bg-blue-darker")
          h1(class="text-xl lg:text-4xl text-blue-darker") {{title}}
</template>

<script>
export default {
    name: 'ProjectThumb',
    props: {
        title: String,
        loc: String,
        img: String
    }
}
</script>

