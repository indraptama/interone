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
                  div(class="RatioInner bg-cover bg-center" :style="{'background-image':'url('+ceo.pic+')'}")
              div(class="flex-1 pl-4 lg:pl-0")
                h4(class="text-lg text-blue-darker") {{ceo.name}}
                p(class="text-xs") {{ceo.pos}}
    
    article(class="max-w-2xl px-6 mx-auto mb-16 lg:mb-24")
      <SectionHeader title="our contact"></SectionHeader>
      div(class="leading-normal text-base")
        ul(class="list-reset lg:flex flex-wrap")
          li(v-for='ceo in ceos' class="lg:w-1/3 lg:px-2 mb-4")
            div(class="flex")
              div(class="w-24")
                div(class="Ratio")
                  div(class="RatioInner bg-cover bg-center" :style="{'background-image':'url('+ceo.pic+')'}")
              div(class="flex-1 pl-4")
                h4(class="text-lg") {{ceo.name}}
                p(class="text-xs") {{ceo.pos}} 

       
        
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue';


export default {
  components: {
    SectionHeader,
  },
  data: function() {
    return {
      about: 'Internusa Development berdiri pada tahun 2004 adalah perusahaan swasta nasional yang bergerak dalam bidang investasi dan developer properti yang telah berpengalaman membangun beberapa kawasan industri dan properti di Indonesia. Didukung oleh beberapa profesional yang ahli di bidangnya, Internusa Development telah berhasil menumbuhkan kepercayaan publik dengan membangun dan merancang beberapa proyek terkemuka diantaranya adalah Internusa Tower, Internusa 800, Kawasan Industri Percut, Kawasan Wisata dan Edukasi Kopi, dan lain sebagainya. Melalui motto “Sukses Bersama Internusa” kami juga senantiasa mengundang beberapa investor untuk turut serta membangun Indonesia melalui proyek – proyek pembangunan strategis di beberapa daerah.'
    ,
      ceos: [
        {
          name: "Y.A.M Tan Sri Dato",
          pos: "Chairman of the Board of Directors",
          pic: "https://randomuser.me/api/portraits/med/men/65.jpg",
          about: "Y.A.M Tan Sri Dato’ Seri Syed Anwar Jamalullail has been the Chairman of the Board of Directors since 16 April 2009. Having served the Board for over nine years, Tan Sri Syed Anwar was re-appointed as an Independent Director at the 33rd Annual General Meeting held last year. He is also the Chairman of the Nomination and Compensation Committees and a member of the Audit Committee. Tan Sri was first appointed to the Board on 25 February 2002 as a Non-Independent Non-Executive Director, representing Lembaga Tabung Haji. On 5 November 2004, he was redesignated as an Independent Non-Executive Director, when Lembaga Tabung Haji ceased to be a substantial Shareholder of the Company. On 20 February 2018, he has been redesignated to a Non- Independant Director. "
        },
        {
          name: "Tan Sri Datuk (Dr.) Rafiah Binti Salim",
          pic: "https://randomuser.me/api/portraits/med/men/1.jpg",
          pos: "Independent, Non-Executive Director",
          about: "Tan Sri Rafiah has excellent service records within the domestic public and private sectors, as well as at international level. She has served as a lecturer, Deputy Dean and Dean of the Law Faculty of University of Malaya, Assistant Governor of the Central Bank of Malaysia, Human Resources General Manager of Malayan Banking Berhad and the Assistant Secretary General for United Nations Human Resources Management in New York. Tan Sri Rafiah was previously an Executive Director of the International Centre for Leadership in Finance; and in 2006, was appointed as the first female Vice-Chancellor in Malaysia posted to the University of Malaya."
        },
        {
          name: "Tan Sri Datuk (Dr.) Rafiah Binti Salim",
          pic: "https://randomuser.me/api/portraits/med/men/65.jpg",
          pos: "Independent, Non-Executive Director",
          about: "Tan Sri Rafiah has excellent service records within the domestic public and private sectors, as well as at international level. She has served as a lecturer, Deputy Dean and Dean of the Law Faculty of University of Malaya, Assistant Governor of the Central Bank of Malaysia, Human Resources General Manager of Malayan Banking Berhad and the Assistant Secretary General for United Nations Human Resources Management in New York. Tan Sri Rafiah was previously an Executive Director of the International Centre for Leadership in Finance; and in 2006, was appointed as the first female Vice-Chancellor in Malaysia posted to the University of Malaya."
        },
        {
          name: "Y.A.M Tan Sri Dato",
          pos: "Chairman of the Board of Directors",
          pic: "https://randomuser.me/api/portraits/med/men/3.jpg",
          about: "Y.A.M Tan Sri Dato’ Seri Syed Anwar Jamalullail has been the Chairman of the Board of Directors since 16 April 2009. Having served the Board for over nine years, Tan Sri Syed Anwar was re-appointed as an Independent Director at the 33rd Annual General Meeting held last year. He is also the Chairman of the Nomination and Compensation Committees and a member of the Audit Committee. Tan Sri was first appointed to the Board on 25 February 2002 as a Non-Independent Non-Executive Director, representing Lembaga Tabung Haji. On 5 November 2004, he was redesignated as an Independent Non-Executive Director, when Lembaga Tabung Haji ceased to be a substantial Shareholder of the Company. On 20 February 2018, he has been redesignated to a Non- Independant Director. "
        },
        {
          name: "Tan Sri Datuk (Dr.) Rafiah Binti Salim",
          pic: "https://randomuser.me/api/portraits/med/men/5.jpg",
          pos: "Independent, Non-Executive Director",
          about: "Tan Sri Rafiah has excellent service records within the domestic public and private sectors, as well as at international level. She has served as a lecturer, Deputy Dean and Dean of the Law Faculty of University of Malaya, Assistant Governor of the Central Bank of Malaysia, Human Resources General Manager of Malayan Banking Berhad and the Assistant Secretary General for United Nations Human Resources Management in New York. Tan Sri Rafiah was previously an Executive Director of the International Centre for Leadership in Finance; and in 2006, was appointed as the first female Vice-Chancellor in Malaysia posted to the University of Malaya."
        },
        {
          name: "Tan Sri Datuk (Dr.) Rafiah Binti Salim",
          pic: "https://randomuser.me/api/portraits/med/men/6.jpg",
          pos: "Independent, Non-Executive Director",
          about: "Tan Sri Rafiah has excellent service records within the domestic public and private sectors, as well as at international level. She has served as a lecturer, Deputy Dean and Dean of the Law Faculty of University of Malaya, Assistant Governor of the Central Bank of Malaysia, Human Resources General Manager of Malayan Banking Berhad and the Assistant Secretary General for United Nations Human Resources Management in New York. Tan Sri Rafiah was previously an Executive Director of the International Centre for Leadership in Finance; and in 2006, was appointed as the first female Vice-Chancellor in Malaysia posted to the University of Malaya."
        }
      ]
    }
  }
}
</script>

