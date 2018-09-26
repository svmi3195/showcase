<template>
<div>
  <article>
    <p>Hi here.</p>
    <p>This site is dedicated to showcase various projects I coded. Some were made for personal use, some as exercise, some for enterntainment. You can browse them at projects section. Or press the button below to get a random one.</p>
    <p>In case you want to contact me or look at my profiles at different sites, head to contacts section.</p>
  </article>
  <button>Random project</button>
  <app-card
      v-bind:key="this.project.id"
      v-bind:name="this.project.name"
      v-bind:description="this.project.description"
      v-bind:used="this.project.used"
    ></app-card>
</div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    appCard: Card
  },
  computed: {
    project() {
      return this.$store.getters.randomProject
    }
  }
}
</script>

<style scoped>

</style>
