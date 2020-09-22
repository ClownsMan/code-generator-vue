<template>
  <a-modal
      title="添加表头"
      :visible="visible"
      @cancel="tableHeaderAddCancel"
      @ok="tableHeaderAddOk"
    >
      <a-form
        :form="form"
        :label-col="{ span: 4 }" :wrapper-col="{ span: 10 }"
      >
        <a-form-item label="类型">
          <a-select
            v-decorator="['type', { rules: [{ required: true, message: '请选择按钮类型' }] }]"
          >
            <a-select-option v-for="item in selectList" :key="item.value" :value="item.value">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="表头名称">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: '请填写按钮名字' }] }]"
          />
        </a-form-item>
        <a-form-item label="表头字段">
          <a-input
            v-decorator="['field', { rules: [{ required: true, message: '请填写按钮名字' }] }]"
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
          value: 'num',
          name: '数字展示'
        },
        {
          value: 'label',
          name: '标签'
        }
      ]
    }
  },
  methods: {
    tableHeaderAddCancel() {
      this.$emit('tableHeaderAddCancel');
    },
    tableHeaderAddOk() {
      const values = this.form.getFieldsValue();
      this.$emit('tableHeaderAddOk', values);
    }
  }
}
</script>