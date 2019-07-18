<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'UserForm'}">Add User</router-link> |
      <router-link :to="{name: 'Users'}">Show users</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  width: 80%;
  margin: auto auto auto auto;
  display: grid;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html {
  background: linear-gradient(#888,#444);
  background-size: cover;
  color: #2E2E2E;
  font-family: "proxima-nova", sans-serif;
  font-size: 1.4em;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
