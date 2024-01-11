<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>开箱即用，便于移植</h2>
    <p>
      For more details<br>
      check out the
      <a href="https://github.com/DRose01/Vue-WebRTC-Player" target="_blank" rel="noopener">Vue-WebRTC-Player</a>.
    </p>
    <h3>Make sure you have installed the CA certificate for your local project.</h3>
    <ul>
      <li><a href="https://github.com/FiloSottile/mkcert" target="_blank" rel="noopener">mkcert</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #6149f6;
}
h3 {
  margin: 40px 0 0;
}
h2 {
  color: #8049e7;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #a848d3;
}
</style>
