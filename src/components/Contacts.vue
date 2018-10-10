<template>
<div>
  <p>email: {{ contacts.email }}</p>
  <ul>
    <li
    v-for="social in this.contacts.social"
    v-bind:key="social.name">
    <a :href="social.link">{{ social.name }}</a>
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
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

p, li {
  font-size: 1.2rem;
}

li {
  padding-bottom: 5px;
}
</style>
