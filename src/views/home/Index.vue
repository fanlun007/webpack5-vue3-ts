<template>
  <div>
    <el-button v-throttling="fun" type="primary">按钮</el-button>
    <div>
      <svg-icon icon-class="menu-icon" class="menu-icon" />
    </div>
    <MyButton />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'HomePage',
  components: {
    MyButton: defineAsyncComponent(() => import('remote_app/MyButton')),
  },
  setup() {
    function fun() {
      ElMessage.success('消息')
    }

    return {
      fun,
    }
  },
})
</script>
