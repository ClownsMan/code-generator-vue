<template>
  <a-form
    :form="form"
    :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }"
  >
    <a-form-item label="table接口地址">
      <a-input
        v-decorator="['url', { rules: [{ required: true, message: 'table接口地址' }] }]"
      />
    </a-form-item>
    <a-form-item label="请求方式">
      <a-radio-group
        v-decorator="['method', { rules: [{ required: true, message: '请选择请求方式' }] }]"
      >
        <a-radio :value="'get'">
          GET
        </a-radio>
        <a-radio :value="'post'">
          POST
        </a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="表头">
      <a-button class="editable-add-btn" @click="handleAdd">
        添加
      </a-button>
      <a-table bordered :data-source="dataSource" :columns="columns">
        <template slot="operation" slot-scope="text, record, index">
          <a-popconfirm
            v-if="dataSource.length"
            title="确定删除?"
            @confirm="() => onDelete(index)"
          >
            <a href="javascript:;">删除表头</a>
          </a-popconfirm>
        </template>
      </a-table>
      <tableHeaderAdd
        ref="tableHeaderAdd"
      :visible="visible"
      @tableHeaderAddCancel="tableHeaderAddCancel"
      @tableHeaderAddOk="tableHeaderAddOk"
      ></tableHeaderAdd>
    </a-form-item>
    <a-form-item label="自定义接口参数">
      <a-input />
    </a-form-item>
  </a-form>
</template>

<script>
import tableHeaderAdd from '../components/tableHeaderAdd';
const columns = [
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '表头名称',
    dataIndex: 'name',
  },
  {
    title: '表头字段',
    dataIndex: 'field',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];
export default {
  components: { tableHeaderAdd },
  data() {
    return {
      columns,
      dataSource: [],
      currentItem: {},
      visible: false,
      form: this.$form.createForm(this),
    }
  },
  methods: {
    handleAdd() {
      this.$refs.tableHeaderAdd.form.resetFields();
      this.visible = true;
    },
    tableHeaderAddCancel() {
      this.visible = false;
    },
    tableHeaderAddOk(data) {
      this.visible = false;
      this.currentItem = data;
      this.dataSource.push(data)
    },
    onDelete(idx) {
      this.dataSource.splice(idx, 1)
    }
  }
}
</script>