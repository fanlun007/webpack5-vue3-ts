<template>
  <div>about - {{ msg }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('Hello world')
</script>
