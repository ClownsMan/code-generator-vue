<template>
  <a-modal
      title="添加按钮"
      :visible="visible"
      @cancel="buttonAddCancel"
      @ok="buttonAddOk"
    >
      <a-form
        :form="form"
        :label-col="{ span: 4 }" :wrapper-col="{ span: 8 }"
      >
        <a-form-item label="按钮名字">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: '请填写按钮名字' }] }]"
          />
        </a-form-item>
        <a-form-item label="操作类型">
          <a-select
            v-decorator="['type', { rules: [{ required: true, message: '请选择按钮类型' }] }]"
          >
            <a-select-option v-for="item in selectList" :key="item.value" :value="item.value">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="跳转路径">
          <a-input
            v-decorator="['path', { rules: [{ required: true, message: '请填写跳转路径' }] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      selectList: [
        {
          value: 'add',
          name: '添加'
        },
        {
          value: 'export',
          name: '导出'
        },
        {
          value: 'print',
          name: '打印'
        },
      ]
    }
  },
  methods: {
    buttonAddCancel() {
      this.$emit('buttonAddCancel');
    },
    buttonAddOk() {
      const values = this.form.getFieldsValue();
      this.$emit('buttonAddOk', values);
    }
  }
}
</script>