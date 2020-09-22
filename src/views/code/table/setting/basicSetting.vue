<template>
  <a-form
    :form="form"
    :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }"
  >
    <a-form-item label="页面路径">
      <a-input
        v-decorator="['path', { rules: [{ required: true, message: '请填写页面路径' }] }]"
      />
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
    }
  }
}
</script>