<template lang="pug">
  div(class="z-50 relative px-6")
    div(class="flex items-center justify-between py-6 px-6 mx-auto max-w-2xl border-b-2")
      div(class="")
        img(src="../assets/logo.png" class="h-8")
      div(class="hidden lg:flex items-center justify-between")
        <router-link to='/' class="inline-block no-underline black capitalize text-white font-bold tracked-loose mx-6">Home</router-link>
        <router-link to='/project' class="inline-block no-underline black capitalize text-white font-bold tracked-loose mx-6">project</router-link>
        <router-link to='/property' class="inline-block no-underline black capitalize text-white font-bold tracked-loose mx-6">property</router-link>
        <router-link to='/news' class="inline-block no-underline black capitalize text-white font-bold tracked-loose mx-6">news</router-link>
        <router-link to='/about' class="inline-block no-underline black capitalize text-white font-bold tracked-loose pl-6">about</router-link>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>
