<template>
  <div class="home-project-wrapper">
    <a-card
      title="我的待办"
      style=" height:100%;"
    >
      <a
        href="#"
        slot="extra"
        @click="handleMore"
      >更多</a>
      <a-table
        :rowKey="record => record.uuid"
        :loading="loading"
        :columns="columns"
        :dataSource="tableData"
        :pagination="false"
      >
      </a-table>
    </a-card>
  </div>
</template>
<script>
const columns = [
  {
    title: '序列',
    customRender: (text, record, index) => {
      return index + 1;
    },
  },
  {
    title: '标题',
    dataIndex: 'title',
    scopedSlots: { customRender: 'title' },
  },
  {
    title: '任务类型',
    dataIndex: 'taskTypeName',
    scopedSlots: { customRender: 'taskTypeName' },
  },
  {
    title: '状态',
    dataIndex: 'stateValue',
    scopedSlots: { customRender: 'stateValue' },
  },
];
export default {
  data() {
    return {
      columns,
      tableData: [],
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  computed: {
  },
  methods: {
    //获取数据
    async getData() {
      let result = await this.http.post(
          '/workbench/instance/pageFindInstance/await',
        {
          pageFindInstancePo: {
            orgizationUuid: this.$store.getters.companyUuid,
          },
          pagePo: {
            currentPage: '1',
            pageSize: '5',
          },
        }
      );
      if (result.data.code === '11111') {
        this.tableData = result.data.data.pageData.map(item => {
          if (item.state === '40') {
            item.stateValue = '审批通过';
          } else if (item.state === '41') {
            item.stateValue = '审批未通过';
          } else if (item.state === '42') {
            item.stateValue = '审批中';
          } else if (item.state === '43') {
            item.stateValue = '待审批';
          } else {
            item.stateValue = '作废';
          }
          return item;
        });
        this.loading = false;
      }
    },
    //查看更多
    handleMore() {
      this.$router.push('/workbench/toDoTask');
    },
  },
};
</script>

<style lang="less" scoped>
.home-project-wrapper {
  margin-top: 20px;
  height: 300px;
  background: #fff;
  overflow-y: auto;
}
</style>

