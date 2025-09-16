<template>
  <nav :class="['sidebar', { collapsed }]">
    <button class="sidebar-toggle" @click="collapsed = !collapsed">
      <span v-if="collapsed">&#9776;</span>
      <span v-else>&#10005;</span>
    </button>
    <ul v-show="!collapsed">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/md5">MD5 Encrypter</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const collapsed = ref(false)
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #2c3e50;
  color: #fff;
  height: 100vh;
  padding-top: 2rem;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.2s;
  z-index: 1000;
}
.sidebar.collapsed {
  width: 48px;
  padding-top: 0.5rem;
}
.sidebar-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 8px;
  margin-bottom: 1.5rem;
  outline: none;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  transition: opacity 0.2s;
}
.sidebar.collapsed ul {
  opacity: 0;
  pointer-events: none;
  height: 0;
  overflow: hidden;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 1rem 0;
}
.sidebar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
.sidebar a.router-link-exact-active {
  color: #42b983;
}
</style>
