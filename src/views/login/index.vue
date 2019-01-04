<template>
    <div>
      <el-card class="login-form-layout">
        <el-form autocomlete="on"
                  :model="loginForm"
                  :rules="loginRules"
                  ref="loginForm"
                  label-position="left">
          <div>
                there will be have a picture
          </div>
          <h2 class="login-title color-main">这是一个新的登录界面</h2>
          <el-form-item prop="username">
            <el-input name="username"
                      type="text"
                      v-model="loginForm.username"
                      auto-complete="on"
                      placeholder="请输入用户名"
                      ></el-input>
            <span slot="prefix">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
          </el-form-item>
          <el-form-item prop="password">
            <el-input name="password"
                      :type="pwdType"
                      @keyup.enter.native="handleLogin"
                      v-model="loginForm.password"
                      auto-complete="on"
                      placeholder="请输入密码"
            ></el-input>
            <span slot="prefix">
              <svg-cion></svg-cion>
            </span>
            <span slot="suffix">
              <svg-cion icon-class="eye" @click="showPwd"></svg-cion>
            </span>
          </el-form-item>
          <el-form-item style="margin-bottom: 60px">
            <el-button style="width: 100%" type="primary" :loading="loading"
                       @click.native.prevent="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';
    export default {
        name: "login",
        data(){
          const validateUsername = (rule,value,callback) => {
            if(!isvalidUsername(value)){
              callback(new Error('请输入正确的用户名'))
            }else {
              callback()
            }
          };
          const validatePass = (rule,value,callback) =>{
            if(value.length < 3){
              callback(new Error('密码不能小于3'))
            }else {
              callback()
            }
          };
          return {
            loginForm:{
              username:'',
              password:''
            },
            loginRules:{
              username:[{required:true,trigger:'blur',validator:validateUsername
              }],
              password:[{required:true,trigger:'blur',validator:validatePass}]
            },
            loading:false,
            pwdType:'password',
           // login_center_bg
          }
        },
      methods:{
          showPwd(){
            if (this.pwdType === 'password'){
              this.pwdType = ''
            } else
            {
              this.pwdType = 'password'
            }
          },
        handleLogin(){
            this.$refs.loginForm.validate(valid => {
              if(valid){
                this.loading = true;
                this.$store.dispatch('Login',this.loginForm).then(() => {
                  this.loading = false;
                  this.$route.push({path:'/'})
                }).catch(() => {
                  this.loading = false
                })
              }else{
                console.log('参数验证不合法!')
                return false
              }
            })
        }
      }

    }
</script>

<style scoped>
  .login-form-layout{
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }
  .login-title{
    text-align: center;
  }
  .login-center-layout{
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200%;
  }
  .color-main{
    color: #409EFF;
  }

</style>
