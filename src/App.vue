<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/sku">Sku</router-link>
        </li>
        <li>
          <router-link to="/">User</router-link>
        </li>
        <li>
          <router-link to="/">About</router-link>
        </li>        
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchSku from './components/SearchSku.vue';
import User from './components/User.vue';

export default {
  name: 'app',
  components: {
    SearchSku,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
