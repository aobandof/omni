<template>
  <div id="app">
    <nav>
      <ul>
        <li  class="fakeButton">
          <router-link to="/sku">Sku</router-link >
        </li>
        <li  class="fakeButton">
          <router-link to="/">User</router-link>
        </li>
        <li  class="fakeButton">
          <router-link to="/">Services</router-link>
        </li>
        <li  class="fakeButton">
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

.fakeButton{
    margin: 10px;
    padding: 10px;
    background: rgb(10, 83, 80);
    text-decoration: none;
  }
</style>
