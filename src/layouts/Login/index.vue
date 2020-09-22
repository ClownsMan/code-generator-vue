<template>
  <div class="login">
    <div class="login-img">
      <!-- 登录框 -->
      <div class="login-info">
        <div
          class="right"
          v-if="show=='login'"
        >
          <div class="login-wrapper">
            <a-form
              :form="form"
              class="login-form"
              @submit="handleSubmit"
            >
              <a-form-item
                label="用户名"
              >
                <a-input
                  class="login-input"
                  size="large"
                  v-decorator="[
                    'userName',
                    { rules: [{ required: true, message: '请输入用户名' }] }
                  ]"
                  placeholder="用户名"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: #889aa4; font-size:14px;"
                  />
                </a-input>
              </a-form-item>
              <a-form-item
                label="密码">
                <a-input
                  class="login-input"
                  size="large"
                  v-decorator="[
                    'password',
                    { rules: [{ required: true, message: '请输入密码' }] }
                  ]"
                  type="password"
                  placeholder="密码"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: #889aa4;font-size:14px;"
                  />
                </a-input>
              </a-form-item>
              <a-form-item :span="12">
                  <a-row>
                    <a-button
                      size="large"
                      type="primary"
                      html-type="submit"
                      class="login-form-button"
                    >
                      登录
                    </a-button>
                  </a-row>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { timeJudge } from '@/utils/utils';
import { mapActions } from 'vuex';
export default {
  data () {
    return {
      dotsShow: false,
      show: 'login',
      imgSrc: '',
      spinning: false, // 是否显示加载状态
      form: null
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  created () { },
  mounted () { },
  methods: {
    handleSubmit() {
      localStorage.setItem('token', '111111111')
      this.$router.push('/home')
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  background: skyblue;

  .login-img {
    width: 100%;
    height: 100%;
    // 登录框
    .login-info {
      background: rgba(255, 255, 255, 0.3);
      box-sizing: border-box;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      .left {
        flex: 1;
        box-sizing: border-box;
        position: relative;
        .left-content {
          padding: 0 60px;
          img {
            width: 160px;
            height: 60px;
            display: block;
            margin: 100px auto 0;
          }
          .login-title {
            font-size: 30px;
            font-weight: 700;
            // color: #fff;
            // color: #eee;
            color: #000;
            margin-top: 20px;
            text-align: center;
            .info {
              font-size: 30px;
            }
          }
        }
      }
      .right {
        flex: 1;
        background: #fff;
        .login-wrapper {
          padding: 30px 50px 0;
          .login-form {
            position: relative;
            .org-icon {
              z-index: 9999;
              position: absolute;
              left: 10px;
              top: 2px;
            }

            .login-form-button {
              margin-top: 10px;
              width: 220px;
              height: 48px;
              border-radius: 20px;
            }
          }
        }
      }
    }
    // 底部
    .login-bottom {
      width: 100%;
      height: 200px;
      position: absolute;
      bottom: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
      }
      ul {
        position: absolute;
        bottom: 10px;
        right: 50px;
        list-style: none;
        li {
          float: left;
          margin-right: 20px;
        }
      }
    }
  }

  .code {
    img {
      height: 35px;
    }
  }

  //tab切换
  .tabBox {
    display: flex;
    justify-content: space-around;
    // margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    margin: 30px 50px 0;
    div {
      width: 33.33%;
      text-align: center;
      padding: 5px;
      cursor: pointer;
    }
  }

  .tabItemActive {
    border-bottom: 1px solid salmon;
  }

  // 加载状态
  .spin {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
