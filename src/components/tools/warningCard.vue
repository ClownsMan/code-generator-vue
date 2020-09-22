<template>
  <div class="home-warning-wrapper">
    <a-card
      title="预警消息"
      style="height: 100%;"
    >
      <a
        href="#/home/warning"
        slot="extra"
      >更多</a>
      <a-timeline>
        <a-timeline-item
          v-for="item in data"
          :key="item.uuid"
        >
          <a-icon
            type="warning"
            slot="dot"
            style="color:red"
          />
          <p style="color:red">项目超期预警</p>
          <p>{{item.warnContent}}</p>
          <p>{{item.warnTime}}</p>
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      data: [],
    };
  },
  computed: {
    ...mapGetters('loginInfo', {
      orgId: 'getOrgId',
      userId: 'getUserId',
    }),
  },
  mounted() {
    //获取前五条预警消息
    this.getWarnData();
  },
  methods: {
    //获取前五条预警消息
    async getWarnData() {
      let result = await this.http.post(
        '/time/warn/pageInfor',
        {
          projectTimePoSelect: {
            backstageOrganizationUuid: this.$store.getters.companyUuid,
            userUuid: this.$store.getters.userId,
          },
          pagePo: {
            pageSize: '5',
            currentPage: '1',
          },
        }
      );
      if (result.data.code === '11111') {
        this.data = result.data.data.pageData;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.home-warning-wrapper {
  margin-top: 20px;
  height: 300px;
  background: #fff;
  overflow-y: auto;
}
</style>


