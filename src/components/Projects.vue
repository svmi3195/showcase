<template>
<div>
  <div class="cardsWrapper">
    <app-card
      v-for="project in this.projects"
      v-bind:key="project.id"
      v-bind:name="project.name"
      v-bind:description="project.description"
      v-bind:github="project.github"
      v-bind:live="project.live"
      v-bind:used="project.used"
    ></app-card>
  </div>
</div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    appCard: Card
  },
  computed: {
    projects() {
      return this.$store.getters.projectsSorted
    }
  }
}
</script>

<style scoped>

</style>
