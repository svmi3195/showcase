<template>
<div>
  <ul>
    <li
    v-for="contact in this.contacts"
    v-bind:key="contact.name">
    <a :href="contact.link">{{ contact.name }}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters.contactsAll
    }
  }
}
</script>

<style scoped>
</style>
