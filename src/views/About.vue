<template lang="pug">
  div(class="test")
    // background
    div(class="absolute pin-t pin-l pin-r bg-primary bg-blue-darker bg-cover bg-center h-50vh")
    div(class="absolute pin-t pin-l pin-r bg-cover bg-center h-50vh opacity-50" style="background-image: url('https://source.unsplash.com/1600x900/?construction,building')")

    // Hero

    div(class="relative z-20 px-6 max-w-2xl mx-auto mb-16 lg:mb-20")
      div(class="hero mx-auto flex items-center justify-center")
        h1(class="text-center text-3xl lg:text-5xl capitalize text-white") About Us & Contact
    

    // Content
    article(class="max-w-2xl px-6 mx-auto mb-16 lg:mb-24")
      <SectionHeader title="about internusa"></SectionHeader>
      div(class="leading-loose col-2 text-base")
        p {{ about }}
    
    // CEO
    article(class="max-w-2xl px-6 mx-auto mb-16 lg:mb-24")
      <SectionHeader title="director and commissioner"></SectionHeader>
      div(class="leading-normal text-base")
        ul(class="list-reset lg:flex flex-wrap")
          li(v-for='ceo in ceos' class="lg:w-1/3 lg:px-2 mb-4")
            div(class="flex lg:block")
              div(class="w-24 mb-4")
                div(class="Ratio")
                  div(class="RatioInner bg-cover bg-center" :style="{'background-image':'url('+ceo.picture.large+')'}")
              div(class="flex-1 pl-4 lg:pl-0")
                h4(class="text-lg text-blue-darker capitalize") {{ceo.name.first +" " +ceo.name.last}}
                p(class="text-xs") {{ceo.email}}
    
    article(class="max-w-2xl px-6 mx-auto mb-16 lg:mb-24")
      <SectionHeader title="our contact"></SectionHeader>

       
        
</template>

<script>

import axios from 'axios';
import SectionHeader from '@/components/SectionHeader.vue';


export default {
  components: {
    SectionHeader,
  },
  data: function() {
    return {
      about: 'Internusa Development berdiri pada tahun 2004 adalah perusahaan swasta nasional yang bergerak dalam bidang investasi dan developer properti yang telah berpengalaman membangun beberapa kawasan industri dan properti di Indonesia. Didukung oleh beberapa profesional yang ahli di bidangnya, Internusa Development telah berhasil menumbuhkan kepercayaan publik dengan membangun dan merancang beberapa proyek terkemuka diantaranya adalah Internusa Tower, Internusa 800, Kawasan Industri Percut, Kawasan Wisata dan Edukasi Kopi, dan lain sebagainya. Melalui motto “Sukses Bersama Internusa” kami juga senantiasa mengundang beberapa investor untuk turut serta membangun Indonesia melalui proyek – proyek pembangunan strategis di beberapa daerah.'
      ,
      ceos: null
    }
  },

  mounted: function() {
    return (
      axios
        .get('https://randomuser.me/api/?results=6')
        .then(response => (this.ceos = response.data.results))
      )
    }  
}
</script>

