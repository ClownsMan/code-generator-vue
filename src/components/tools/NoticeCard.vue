<template>
  <div class="home-notice-wrapper">
    <a-card
      title="通知公告"
      class="home-notice-card"
    >
      <a
        href="#/notice"
        slot="extra"
      >更多</a>
      <a-table
        :rowKey="record => record.uuid"
        :columns="columns"
        :loading="loading"
        :dataSource="messageData"
        :pagination="false"
        class="home"
      >
      </a-table>
    </a-card>
  </div>
</template>
<script>
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    scopedSlots: { customRender: 'title' },
  },
  {
    title: '发布时间',
    dataIndex: 'createTime',
    scopedSlots: { customRender: 'createTime' },
  },
];
export default {
  data() {
    return {
      columns,
      messageData: [],
    };
  },
  mounted() {
    this.getMsgList({
      msgBodyPoSelect: {
        backstageOrganizationUuid: this.$store.getters.companyUuid,
        userUuid: this.$store.getters.userId,
      },
      pagePo: {
        currentPage: '1',
        pageSize: '2',
      },
    });
  },
  methods: {
    //获取消息中心
    async getMsgList(params) {
      this.loading = true;
      let result = await this.http.post(
        '/notice/body/listPage',
        params
      );
      if (result.data.code === '11111') {
        this.loading = false;
        this.messageData = result.data.data.pageData;
        this.messageData.forEach(item => {
          if (item.priority === 10) {
            item.priority = '低';
          } else if (item.priority === 20) {
            item.priority = '中';
          } else {
            item.priority = '高';
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home-notice-wrapper {
  height: 260px;
  overflow-y: auto;
  // .home-notice-card {
  //   height: 100%;
  // }
}
</style>

