<template>
  <a-form v-if="options" :form="form">
    <a-form-item  label="标签对齐方式">
      <a-radio-group v-model="formBasics.labelType">
        <a-radio-button value="horizontal">
          Horizontal
        </a-radio-button>
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="inline">
          Inline
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item  label="标签宽度">
      <a-input v-model="formBasics.labelWidth"></a-input>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  props: [ 'options' ],
  computed: {
    formBasics() {
      return this.options
    }
  },
  watch: {
    formBasics: {
      handler(a, b) {
        this.$emit('formChange', a)
      },
      deep: true
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
    }
  }
}
</script>
<style lang="less" scoped>

</style>