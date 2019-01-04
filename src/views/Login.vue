<template>
	<el-form :model="form1" ref="form1" label-width="0px" class="login-container">
		<h1 class="title">系统登录</h1>
	    <el-form-item prop="account">
	        <el-input type="text" v-model="form1.account" placeholder=
	        "账号"></el-input>
	    </el-form-item>
	    <el-form-item prop="checkPass">
	        <el-input type="password" v-model="form1.checkPass" 
	        placeholder="密码"></el-input>
	    </el-form-item>
	    <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
	    <el-form-item style="width: 100%;">
	        <el-button type="primary" style="width: 100%;" 
	        @click.native.prevent="onSubmit" :loading="logining">登录</el-button>
	        <!-- <el-button>取消</el-button> -->
	    </el-form-item>
	</el-form>
</template>

<script>
	export default {
		data(){
			return {
				logining:false,
				form1:{
					account:'admin',
					checkPass:'123456'
				},
				checked:true
			}

		},
		methods:{
			onSubmit(){
				alert("哈哈,什么也没有")
			}
		}
	}
</script>
<style>
	.login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }


</style>
