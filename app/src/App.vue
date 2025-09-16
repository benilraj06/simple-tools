
<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.main-content {
  margin-left: 200px;
  flex: 1;
  padding: 2rem;
}
</style>
