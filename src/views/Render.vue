<section>
  <h1>我是render组件</h1>
  <el-button v-if="1">1</el-button> 
  <el-button v-else-if="2">2</el-button> 
  <Button 
    :type="type"
    :text="text"
    @myEvent="parentDemo"
  ><Button>  
</section>

<script>
import Button from './Button.vue'
export default {
  data() {
    return {
      value: 1,
      type: 'success',
      text: 'green'
    };
  },
  methods: {
    parentDemo() {
      console.log(666);
    }
  },
  components: {
    Button
  },
}
</script>

<style lang='scss' scoped>

</style>