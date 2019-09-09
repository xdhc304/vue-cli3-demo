<script>
export default {
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    text: {
      type: String,
      default: 'demo'
    }
  },
  render(h) {
    return h('div', {
      class: {
        btn: true,
        'btn-success': this.type === 'success',
        'btn-danger': this.type === 'danger',
        'btn-warning': this.type === 'warning'
      },
      domProps: {
        innerText: this.text
      },
      on: {
        click: this.demoClick
      }
    })
  },
  methods: {
    demoClick() {
      this.$emit('myEvent');
    }
  },
}
</script>

<style scoped>
  .btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center
  }
  .btn-success {
    background: green;
  }
  .btn-danger {
    background: red;
  }
  .btn-warning {
    background: orange;
  }
  .normal {
    background: blue;
  }
</style>
