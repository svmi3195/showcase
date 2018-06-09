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
  components:{
        'appHeader': Header,
        'appFooter': Footer
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
    border: 3px black solid;
    padding: 10px;
    margin: 0 auto;
    flex-grow: 1;
}

header{
    width: 100%;
    height: 4rem;
    background-color: red;
}

footer{
    width: 100%;
    height: 4rem;
    background-color: red;
}
</style>
