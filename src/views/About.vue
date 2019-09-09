    
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-input v-model="value"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    consoleDemo() {
      console.log('test');
    }
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
        this.consoleDemo()
      },
      // handler: 'consoleDemo',
      immediate: true
    }
  },
}
</script>