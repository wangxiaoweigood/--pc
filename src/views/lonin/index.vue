<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field left-icon="contact" placeholder="请输入手机号码" v-model="user.mobile" />
      <van-field left-icon="setting-o" v-model="user.code" placeholder="请输入验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn-box">
      <van-button type="info"
      @click="onLogin"
      >登录</van-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>

<script>
import requeat from '@/utils/request'
export default {
  name: "LoginPage",
  components: {},
  props: {},
data () {
  return {
    user: {
      mobile: '', //手机号
      code: '' //短信验证码
    }
  }
},
  computed:{},
  watch:{},
  created(){},
  mounted(){},
  methods:{
   async onLogin(){
      const user = this.user
     const res = await requeat({
        method:'POST',
        url:'/app/v1_0/authorizations',
        // headers:{
        //   'Content-Type':'application/json'
        // },
        // params:{},
        data:user ,
      })
      console.log(res);

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
}
</style>
