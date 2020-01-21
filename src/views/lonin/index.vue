<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <ValidationObserver ref="from">
      <ValidationProvider name="手机号" rules="required|mobile" immediate>
        <van-field left-icon="contact" placeholder="请输入手机号码" v-model="user.mobile" />
        <!-- <span>{{ errors[0] }}</span> -->
        <!-- errors[0] 获取验证失败的错误消息 -->
      </ValidationProvider>

      <ValidationProvider name="验证码" rules="required|code" immediate>
        <van-field left-icon="setting-o" v-model="user.code" placeholder="请输入验证码">
          <van-count-down
            slot="button"
            @finish="isCountDownShow = false"
            v-if="isCountDownShow"
            :time="1000* 50"
            format="ss s"
          />
          <van-button
            v-else
            round
            slot="button"
            size="small"
            type="primary"
            @click="onSendSmsCode"
          >发送验证码</van-button>
        </van-field>
      </ValidationProvider>
    </ValidationObserver>

    <div class="login-btn-box">
      <van-button type="info" @click="onLogin">登录</van-button>
      <!-- 倒计时 -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>

<script>
import { login, getSmsCode } from "@/api/user";
import { validate } from 'vee-validate'
export default {
  name: "LoginPage",
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: "", //手机号
        code: "" //短信验证码
      },
      isCountDownShow: false // 是否显示
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onLogin() {
      const user = this.user;
      const success = await this.$refs.from.validate();
      if (!success) {
        console.log("表单验证失败");
        const errors = this.$refs.from.errors;
        for (let key in errors) {
          const item = errors[key];
          if (item[0]) {
            this.$toast(item[0]);
            return;
          }
        }
        return;
      }
      this.$toast.loading({
        duration: 0, //持续展示 toast
        message: "登陆中...",
        forbidClick: true //是否禁止背景点击
      })
      try {
        const res = await login(user)
        console.log(res)
        this.$toast.success("登录成功")
      } catch (err){
        console.log("登陆失败", err)
        this.$toast.fail("登陆失败,手机号或验证码不正确")
      }
    },
    async onSendSmsCode() {
      try {
        // 1.验证手机号是否有效
      const { mobile } = this.user;
      const validateResult= await validate(mobile,'required|mobile',{name:'手机号'})
      if (!validateResult.valid) {
        // console.log(validateResult)
        this.$toast(validateResult.errors[0])
        return
      }
        // 2.显示倒计时
        this.isCountDownShow = true;
        // 3.请求发送验证码
        const res = await getSmsCode(mobile);
        console.log(res);
      } catch (err) {
        console.log(err);
        this.$toast("请勿频繁操作")
      }
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  .login-btn-box {
    padding: 27px 16px;
    .van-button {
      width: 100%;
      color: #fff;
    }
  }
  .van-cell {
    align-items: center;
  }
}
</style>
