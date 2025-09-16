<template>
  <div>
    <h2 class="md5-title">MD5 Encrypter</h2>
    <div class="md5-container">
      <input v-model="inputValue" class="md5-input" type="text" placeholder="Enter text to encrypt" />
      <button class="md5-btn" @click="generateMd5">Submit</button>
      <div v-if="md5Value" class="md5-result">
        <label>MD5 Hash:</label>
        <div class="md5-hash">{{ md5Value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import md5 from 'crypto-js/md5'

const inputValue = ref('')
const md5Value = ref('')

function generateMd5() {
  md5Value.value = inputValue.value ? md5(inputValue.value).toString() : ''
}
</script>

<style scoped>
.md5-title {
  font-size: 2rem;
  font-weight: bold;
  color: #9e1313ff;
  margin-left: 15rem;
  width: 100%;
  text-shadow: 0 1px 4px #222;
}
.md5-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 320px;
}
.md5-input {
  width: 300px;
  padding: 0.75rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.md5-btn {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1.5rem;
}
.md5-btn:hover {
  background: #369870;
}
.md5-result {
  text-align: center;
}
.md5-hash {
  font-family: monospace;
  background: #f4f4f4;
  color: #0b0b0b;
  /* Inverse of #f4f4f4 is #0b0b0b */
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  word-break: break-all;
}
</style>
