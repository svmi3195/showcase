<template>
<div class="card">
  <div>
  <h2> {{ name }} </h2>
  <p class="description"> {{ description }} </p>
  <p>
  <a :href="github">Github</a><br>
  <a v-if="live" :href="live">Live</a>
  </p>
  </div>
  <p>
    <span
    v-for="item in used"
    v-bind:key="item">
    {{ item }}</span>
  </p>
</div>
</template>

<script>
export default {
  props: ['name', 'description', 'github', 'live', 'used']
}
</script>

<style scoped>
span{
  background-color: lightgray;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 3px;
  display: inline-block;
}

.card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.description{
  max-width: 60%;
  margin: 0 auto;
}
</style>
