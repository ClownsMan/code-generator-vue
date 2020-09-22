<template>
  <a-form v-if="options" :form="form">
    <a-form-item  label="绑定字段">
      <a-input v-model="formProps.options.field"></a-input>
    </a-form-item>
    <a-form-item  label="标题">
      <a-input v-model="formProps.options.label"></a-input>
    </a-form-item>
    <a-form-item  label="宽度">
      <a-input v-model="formProps.options.width"></a-input>
    </a-form-item>
    <a-form-item  label="占位内容">
      <a-input v-model="formProps.options.placeholder"></a-input>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  props: [ 'options' ],
  computed: {
    formProps() {
      return this.options
    }
  },
  watch: {
    formProps: {
      handler(a, b) {
        this.$emit('currentItemChange', a)
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