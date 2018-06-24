<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
}

html, body, #app{
  padding: 0;
  margin: 0;
  height: 100%;
}

main{
    max-width: 1200px;
    padding: 10px;
    margin: 0 auto;
    flex-grow: 1;
}

main article{
  max-width: 600px;
  font-size: 1.2rem;
  text-align: left;
}

header{
    width: 100%;
    padding: 1rem 0;
    background-color: rgb(63, 56, 56);
    color: azure;
}

header a{
  color: azure;
  font-size: 1.3rem;
  margin: 0 0.7rem;
}

footer{
    width: 100%;
    padding: 2rem 0;
    background-color: rgb(63, 56, 56);
    color: azure;
}

footer a{
  color: azure;
}

button{
  font-size: 1.2rem;
  background-color: rgb(63, 56, 56);
  color: azure;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
}

button:hover{
  color: rgb(148, 181, 231);
}
</style>
