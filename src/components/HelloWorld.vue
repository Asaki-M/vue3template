<script setup lang="ts">
import { useStore } from '../store/store';
const store = useStore()

</script>

<template>
  <h1>{{ store.name }}</h1>
  <p>counter: {{store.counter}}</p>
  <p>double counter: {{store.double}}</p>
  <el-button type="primary" @click="store.increment()">+ 1</el-button>
  <el-button type="danger" @click="store.decrease()">- 1</el-button>
  <div class="links">
    <el-link href="https://pinia.vuejs.org/" target="_blank" type="warning">Pinia Docs</el-link>
    <el-link href="https://element-plus.gitee.io/" target="_blank" type="primary">Element-Plus Docs</el-link>
    <el-link href="https://v3.cn.vuejs.org/" target="_blank" type="success">Vue3 Docs</el-link>
    <el-link href="https://cn.vitejs.dev/" target="_blank" type="primary">Vite Docs</el-link>
  </div>
  <el-link href="https://github.com/Asaki-M/vue3template" target="_blank" type="primary">Modify this template on here</el-link>
</template>

<style scoped>
.links {
  margin-top: 50px;
  margin-bottom: 50px;
}
a {
  padding: 0 10px;
}
</style>
