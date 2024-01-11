<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <img alt="AIoT logo" src="./assets/AIoTComm.png" width="20%">
    <HelloWorld msg="适配Vue项目的WebRTC组件"/>
    <Player />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Player from './components/VideoPlayer.vue' 


export default {
  name: 'App',
  components: {
    HelloWorld,
    Player
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
