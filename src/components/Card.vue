<template>
<div class="card">
  <h2> {{ name }} </h2>
  <p> {{ description }} </p>
  <p>Used: {{ used }} </p>
</div>
</template>

<script>
export default {
  props: ['name', 'description', 'used']
}
</script>

<style scoped>
</style>
