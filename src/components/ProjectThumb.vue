<template lang="pug">
	div(class="w-full lg:w-4/5 mb-8 lg:mb-32")
		div(v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }")
			div(class="Ratio Ratio--16x9 bg-white mb-4")
				div(class="RatioInner bg-blue-darker bg-cover bg-center" :style="{'background-image':'url('+img+')'}")
		
		div(class="lg:w-1/2")
			div(class="flex items-center text-black mb-1")
				span(class="inline-block pr-3 text-base") {{loc}}
				span(class="flex-1 header-line bg-black")
			h1(class="text-xl lg:text-3xl text-black") {{title}}
</template>

<script>
export default {
  name: "ProjectThumb",
  props: {
    title: String,
    loc: String,
    img: String
  },
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      thresholds: [0]
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
  methods: {
    onWaypoint({ el, going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
				this.$el.querySelector('.RatioInner').classList.add('anim-slideIn')
        console.log(this.$el);
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log("waypoint going top!");
      }
    }
  }
};
</script>

<style>
  .anim-slideIn {
    transform: translate3d(250px,0,0);
    transition: transform 500ms ease;
  }
</style>
