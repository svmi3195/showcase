<template>
<div>
  <div class="cardsWrapper">
    <app-card
      v-for="project in this.projects"
      v-bind:key="project.id"
      v-bind:name="project.name"
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
      return this.$store.state.projects
    }
  }
}
</script>

<style scoped>

</style>
