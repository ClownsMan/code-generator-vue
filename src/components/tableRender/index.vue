<template>
  <div>
    <!-- table -->
    <a-tabs
      @change="handleChange"
      :animated="false"
    >
      <a-tab-pane
        v-for="item in tabData"
        :tab="item.name"
        :key="item.key"
      >
        <a-table
          :columns="columns"
          :dataSource="tableData"
          :rowKey="record => record.uuid"
          :loading="loading"
          :pagination="{
            pageSize:pageSize,
            current:currentPage,
            total:total
          }"
          @change="changePage"
        >
          <span
            slot="operation"
            slot-scope="text, record"
            class="authority-btn"
          >
            <a @click="addOrEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <zc-operation
              :title="record.state==='10'?'确定禁用？':'确定启用？'"
              :text="record.state==='10'?'禁用':'启用'"
              @onConfirm="handleStop(record)"
            />
            <a-divider type="vertical" />
            <zc-operation
              text="删除"
              title="确定删除？"
              @onConfirm="operationComfirm(record)"
            />
            <a-divider type="vertical" />
            <a @click="handleLookCorpo(record)">企业联系人</a>
          </span>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  props: {
    GeneratInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    columns() {
      return this.GeneratInfo.table.columns
    },
    url() {
      return this.GeneratInfo.table.url
    },
    tabData() {
      return this.GeneratInfo.status.filterStatus
    }
  },
  data() {
    return {
      tableData: [],
      loading: false,
      pageSize: 10,
      currentPage: 1,
      total: 0,
      tabkey: 'await',
    }
  },
  created() {
    // this.getTableData()
  },
  methods: {
    // 获取分页数据
    getTableData() {
      this.loading = true;
      let res = this.http.post(this.url,
      {
        operation: this.tabkey,
        pagePo: {
          pageSize: String(this.pageSize),
          currentPage: String(this.currentPage),
        },
      }
    );
      if(res.data.code === '11111') {
        this.tableData = res.data.data.pageData;
        this.total = result.data.data.allRow;
        this.loading = false;
      }
    },
    // 切换页数
    changePage() {

    },
    // 切换状态
    handleChange() {

    }
  }
}
</script>