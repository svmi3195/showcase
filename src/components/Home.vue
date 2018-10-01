<template>
<div>
  <article>
    <p>Hi here.</p>
    <p>This site is dedicated to showcase various projects I coded. Some were made for personal use, some as exercise, some for enterntainment. You can browse them at projects section. Or press the button below to get a random one.</p>
    <p>In case you want to contact me or look at my profiles at different sites, head to contacts section.</p>
  </article>
  <button v-on:click="showRandom">Random project</button>
  <div class="cardsWrapper">
  <app-card
      v-if="project"
      v-bind:name="project.name"
      v-bind:description="project.description"
      v-bind:used="project.used"
    ></app-card>
  </div>
</div>
</template>

<script>
import Card from '@/components/Card';

export default {
  components: {
    appCard: Card
  },
  data() {
    return {
      project: null,
      projectsAll: this.$store.getters.projectsAll
    };
  },
  methods: {
    showRandom() {
      this.project = this.projectsAll[Math.floor(Math.random() * this.projectsAll.length)];
    }
  }
};
</script>

<style scoped>
</style>
