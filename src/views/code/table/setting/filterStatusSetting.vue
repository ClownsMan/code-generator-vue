<template>
  <a-form
    :form="form"
    :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }"
  >
    <a-form-item label="类型">
      <a-select
        v-decorator="['type', { rules: [{ required: true, message: '请选择按钮类型' }] }]"
      >
        <a-select-option v-for="item in statusType" :key="item.value" :value="item.value">
          {{ item.name }}
        </a-select-option>
      </a-select>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      statusType: [
        {
          name: '数据处理',
          value: 'data'
        },
        {
          name: '普通审批',
          value: 'approval'
        },
        {
          name: '处理审批',
          value: 'handlerApproval'
        },
      ],
      form: this.$form.createForm(this),
    }
  }
}
</script>