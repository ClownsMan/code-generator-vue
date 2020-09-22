<template>
  <div>
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
          <a href="javascript:;">删除按钮</a>
        </a-popconfirm>
      </template>
    </a-table>
    <buttonAdd
      ref="buttonAdd"
     :visible="visible"
     @buttonAddCancel="buttonAddCancel"
     @buttonAddOk="buttonAddOk"
    ></buttonAdd>
  </div>
</template>
<script>
import buttonAdd from '../components/buttonAdd';
const columns = [
  {
    title: '按钮名字',
    dataIndex: 'name',
  },
  {
    title: '操作类型',
    dataIndex: 'type',
  },
  {
    title: '跳转路径',
    dataIndex: 'path',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];
export default {
  components: { buttonAdd },
  data() {
    return {
      columns,
      dataSource: [],
      visible: false,
    }
  },
  methods: {
    handleAdd() {
      this.$refs.buttonAdd.form.resetFields();
      this.visible = true;
    },
    buttonAddCancel() {
      this.visible = false;
    },
    buttonAddOk(data) {
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