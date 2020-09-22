<!-- 用户激活  -->
<template>
  <div>
    <a-form
      :form="form"
      layout="horizontal"
      class="authority-form"
    >
      <a-card title="用户激活">
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item
              label='姓名'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input
                v-decorator="[
                    'name',
                    {

                rules:
                [{
                required:true,message: '请输入姓名!'
                }],
                }
                ]"
                placeholder="请输入姓名"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label='用户账号'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input
                v-decorator="[
                    'userName',
                    {
                    rules: [{ required: true, message: '请输入用户账号!' }],
                    }
                ]"
                placeholder="请输入用户账号"
                autocomplete="new-userName"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label='密码'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input
                v-decorator="[
                    'password',
                    {
                    rules: [
                        {
                            required: true, message: '请输入密码!'
                        },
                        {
                            validator: validateToNextPassword,
                        },
                    ],
                    }
                ]"
                type="password"
                placeholder="请输入密码"
                autocomplete="new-password"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label='确认密码'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input
                v-decorator="[
                'confirm',
                {
                    rules: [
                    {
                        required: true,
                        message: '请确认你的密码',
                    },
                    {
                        validator: compareToFirstPassword,
                    },
                    ],
                },
                ]"
                type="password"
                placeholder="请确认你的密码"
                @blur="handleConfirmBlur"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label='出生年月'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-date-picker
                v-decorator="[
                    'birthDate',
                    {
                    rules: [{ required: true, message: '请选择日期!' }],
                    }
                ]"
                placeholder="请选择日期"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label='性别'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-radio-group v-decorator="[
                    'gender',
                    {
                    rules: [{ required: true,}],
                    initialValue:'yy',
                    }
                ]">
                <a-radio value="yy">男</a-radio>
                <a-radio value="xx">女</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label='邮箱'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input
                v-decorator="[
                'email',
                { rules: [{
            type: 'email', message: '请输入正确的邮箱!',
                },{ required: true, message: '请输入邮箱' }] }
                ]"
                placeholder="请输入邮箱"
              >
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label='备注'
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-textarea
                placeholder="请输入"
                :autosize="{ minRows: 3}"
                v-decorator="[
                    'remark',
                    {
                    rules: [{ required: false}],
                    }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
    <zc-form-button
      @onSubmit="handleSubmit"
      @onCancel="onCancel"
    ></zc-form-button>
  </div>
</template>

<script>
import { policy, authorization } from '@/utils/upload';
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  data () {
    return {

    };
  },
  computed: {
    ...mapGetters('loginInfo', {
      orgId: 'getOrgId',
      userId: 'getUserId',
    }),
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  async created () {

  },
  methods: {
    moment,
    // 提交
    handleSubmit (e) {
      // e.preventDefault();

      this.form.validateFields(async (err, values) => {
        if (!err) {
          let userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : false;
          values.phone = userInfo ? userInfo.phone : '';
          values.birthDate = values.birthDate
            ? values.birthDate.format('YYYY-MM-DD HH:mm:ss')
            : '';
          delete values.confirm;
          let reslut = await this.http.post(`${this._global._cost}/pms/user/v1/userInfoActivation`,
            {
              ...values,
            });
          //获取token  name
          if (reslut.data.code === '11111') {
            this.$message.info('操作成功');
            this.$router.push('/home');
          }
        }
      });
    },
    // 取消
    async onCancel () {
      this.$router.push('/home');
    },
    handleConfirmBlur (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次密码不一致');
      } else {
        callback();
      }
    },
    validateToNextPassword (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    normFile (e) {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>
<style lang='less' scoped>
</style>
