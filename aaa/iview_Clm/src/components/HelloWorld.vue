<template>
<div class="mm">
<div class="main">
	<div class="beij">
		<div class="log">
		<!-- 	<img src="../assets/log-1.gif" style="margin-top: 20vw;" width="100%" height="auto" > -->
		</div>
		<div class="denglu">
	      <Input class="dengluinput usernames" v-model="username" placeholder="请输入账号" />
		  <Input class="dengluinput passwords" v-model="password" placeholder="请输入密码" />
		</div>
		<div class="denglubutton">
			<button v-on:click="login()">登录</button>
		</div>
	</div>
	<div class="abs_button"> 
		<div><router-link class="aa" to="iview_zc">注册</router-link></div>
		<div><router-link class="aa" to="iview_wj">忘记密码</router-link></div>
	</div>
</div>
</div>
</template>
<script>
		export default {
		data() {
			return {
				username: '',
				password: '',
			}
		},
		methods: {
		login() {
		this.$http.post('/api/users/login',{username: this.username,password:this.password}).then((data) => {
	    if(data.body.status==1){
	      alert(data.body.message)
	    }else{
	    	alert(data.body.message)
	    }
	  })
			}
		}
		}
</script>

<style  >

*{
  padding: 0px;
  margin: 0px;
}
.mm{
	width: 100%;
	height: 1000px;
	background:url(../assets/背景图片-1.gif) repeat-x;
	background-size: 100% auto;
}

.main{
	float: left;
	width: 100%;
}
.beij{
	float: left;
	width: 100%;
	
}
.log{
	float: left;
	width: 100%;
	height: 115px;
	
}
.denglu{
	float: left;
	width: 100%;
	height: 200px;
	margin-top: 220px;
}
.denglu{
	float: left;
	width: 100%;
	
}

.dengluinput {
	float: left;
	margin-top: 10px;
	margin-left: 10%;
	width: 80%;

}

.dengluinput .ivu-input {
	text-indent: 50px;
	height: 70px;
	font-size: 30px;
	color: #fff;
	border-top: none;
	border-right: none;
	border-left: no;
	
}

.usernames .ivu-input {
	background: url(../assets/shabihutao1.gif) left 5px center no-repeat;
	background-size: auto 80%;
}

.passwords .ivu-input {
	background: url(../assets/shabihutao2.gif) left 5px center no-repeat;
	background-size: auto 80%;
}

.denglubutton {
	height: 30px;
	float: left;
	width: 100%;
}

.denglubutton>button{
	height: 80px;
	width: 80%;
	margin-left: 10%;
	font-size: 35px;
	background: #space;
	border: 0;
	color: #fff;
	border-radius: 10px;
}

.abs_button {
	position: absolute;
	bottom: 0;
	left: 2.5%;
	line-height: 100px;
	height: 100px;
	width: 95%;
}

.abs_button>div {
	width: 50%;
	float: left;
	text-indent: 30px;
	text-decoration: none;
	font-size: 30px;
	
}

.abs_button>div:nth-child(2) {
	text-align: right;
	text-indent: 30px;
	font-size: 30px;
    text-decoration: none;
}
.aa{
	color: #fff;
}


</style>
