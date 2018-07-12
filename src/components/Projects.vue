<template>
<div>
    <div class="cardsWrapper">
    <app-card
    v-for="project in this.projects"
    v-bind:key="project.id"
    v-bind:text="project.text"
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
    data: function() {
        return { projects: [{text: 'one'}, {text: 'two'}, {text: 'three'}, {text: 'one'}, {text: 'two'}, {text: 'three'}]}
    }
}
</script>

<style scoped>

</style>
