<script setup lang="ts">
import { useStore } from '../store/store';
const store = useStore()

</script>

<template>
  <h1>{{ store.name }}</h1>
  <p>counter: {{store.counter}}</p>
  <p>double counter: {{store.double}}</p>
  <el-button type="primary" @click="store.increment()">+ 1</el-button>
  <el-button type="primary" @click="store.decrease()">- 1</el-button>
  
</template>
