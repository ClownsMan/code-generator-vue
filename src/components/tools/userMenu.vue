<template>
  <div>
    <!-- 预警 -->
    <span
     class="action"
     @click="toWarning"
    >
      <a-icon
        type="alert"
        style="cursor: pointer;"
      />
    </span>
    <!-- 通知公告 -->
    <span class="action">
      <a-popover
        title="消息中心"
        style="text-align: center;"
        placement="bottom"
      >
        <template slot="content">
          <div
            v-for="(item, index) in messageList"
            :key="index"
            @click="goToRead(JSON.stringify(item))"
            style="cursor:pointer;"
          >
            <p style="color: red;padding: 0 20px;box-sizing: border-box;">
              {{ item.title }}
            </p>
          </div>
          <div>
            <a-button
              type="dashed"
              @click="handleMoreMessage"
              size="large"
              style="width: 200px;height: 40px;margin: 0 auto;display:block;font-size:14px;"
            >查看更多</a-button>
          </div>
        </template>
        <a-badge :count="messageNum">
          <a-icon
            type="bell"
            style="cursor:pointer;"
          />
        </a-badge>
      </a-popover>
    </span>
    <div class="avatar">
      <img
        src="https://file.cmorning.cn/Hzybzx/userLogo.jpg"
        alt=""
      />
    </div>
    <a-dropdown class="userDropdown">
      <a
        class="ant-dropdown-link"
        href="#"
      >
        {{info.userName}}
        <a-icon type="down" />
      </a>
      <a-menu
        slot="overlay"
        style="width:200px;paddingTop:16px;"
      >
        <a-menu-item key="1">
          <span @click="toUserSetting">
            <a-icon type="user" />
            个人设置
          </span>
        </a-menu-item>
        <a-menu-item
          key="2"
        >
          <a-icon type="shop" />切换企业
        </a-menu-item>
        <a-menu-item
          key="3"
          @click="logout"
        >
            <a-icon type="export" />
            退出账号
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      info: state => state.user.info,
    }),
  },
  methods: {
    // 登出
    logout() {
      this.$store.dispatch('LOGOUT').then(res => {
        // 一种是刷新页面退出
        // window.location.reload()
        // 一种是清空了token， 角色后退出， 数据清除不是很干净，vuex仍有残留信息
        let route = this.$route.path;
        this.$router.replace(`/user/login?redirect=${route}`)
      })
    },
    // 跳转到预警中心
    toWarning () {
      this.$router.push('/home/warning');
    },
    // 跳转消息页面并且打开消息
    async goToRead (options) {
      const data = JSON.parse(options);
      let res = await this.http.post(
        '/msg/body/lookMsg',
        {
          backstageOrganizationUuid: this.$store.getters.companyUuid,
          sysUserUuid: this.$store.getters.userId,
          msgBodyUuid: query.msgBodyUuid,
          stateUuid: query.stateUuid,
        }
      );
      if (res.data.code === '11111') {
        await this.getMsgList({
          msgBodyPoSelect: {
            backstageOrganizationUuid: this.$store.getters.companyUuid,
            userUuid: this.$store.getters.userId,
            title: '',
            type: '',
            author: '',
            createTime: '',
            readState: 20,
          },
          pagePo: {
            currentPage: 1,
            pageSize: 5,
          },
        });
        this.$router.push({
          path: '/message',
          query: {
            msgBodyUuid: data.uuid,
            stateUuid: data.msgStateUuid,
            backstageOrganizationUuid: data.backstageOrganizationUuid,
            from: 'first',
            title: data.title,
            content: data.content,
          },
        });
      }
      // this.$router.push('/message');
    },
    //查看消息
    handleMoreMessage () {
      this.$router.push('/message');
    },
    // 跳转用户设置页面
    toUserSetting() {
      this.$router.push('/userSetting');
    }
  }
}
</script>

<style lang="less" scoped>

</style>