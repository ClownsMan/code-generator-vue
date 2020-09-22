<template>
  <div class="home-task-wrapper">
    <a-card
      title="任务统计"
      class="home-task-card"
    >
      <div class="home-task-flex">
        <div
          style="cursor:pointer;"
          class="task-flex-item"
          @click="toProjectCost"
        >
          <p>我的未完成工程造价项目</p>
          <p>{{costNumber}}个</p>
        </div>
        <div
          style="cursor:pointer;"
          class="task-flex-item"
          @click="toCastMarkSignUp">
          <p>我的未完成招标代理项目</p>
          <p>{{bidNumber}}个</p>
        </div>
        <div class="task-flex-item">
          <p>我的未完成工程监理项目</p>
          <p>0个</p>
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      costNumber: 0,
      bidNumber: 0,
    };
  },
  async created() {
    // 我的未完成工程造价项目
    this.getProjectProgress('01', 'costNumber');
    this.getCastMarkSignUp('01','bidNumber');
  },
  methods: {
    // 获取未完成项目列表
    async getProjectProgress(state, number) {
      let result = await this.http.post(
        '/project/listProject',
        {
          backstageOrganizationUuid: this.$store.getters.companyUuid,
          userUuid: this.$store.getters.userId,
          pageType: state,
        }
      );
      if (result.data.code === '11111') {
        this[number] = result.data.data.length;
        // console.log(this[number]);
      }
    },
    // 我的未完成招标代理项目
    async getCastMarkSignUp(state, number) {
      let result = await this.http.post(
        '/bidApply/getProjectNumber',
        {
          backOrganizationUuid: this.$store.getters.companyUuid
        }
      );
      if (result.data.code === '11111') {
        this[number] = result.data.data;
      }
    },
    // 跳转
    toProjectCost() {
      this.$router.push('/projectCost');
    },
    toCastMarkSignUp(){
      this.$router.push('/projectCastMark/castMarkSignUp');
    }
  },
};
</script>
<style lang="less" scoped>
.home-task-wrapper {
  height: 260px;
  .home-task-card {
    height: 100%;
    .home-task-flex {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 10px;
    }
    .task-flex-item {
      padding-top: 36px;
      flex: 1;
      border-right: 1px solid #ccc;
      text-align: center;
      &:last-child {
        border-right: none;
      }
      p {
        &:last-child {
          color: rgba(0, 0, 0, 0.65);
          font-size: 20px;
          font-weight: 500;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>

