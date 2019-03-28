<template>
	<div class="main">
	<div class="dingbu">
		<span><router-link to="/"><img src="../assets/tubiao-1.gif" class="ll"></router-link></span>
		<span class="wenzi">注册</span>
		</div>
		<div class="zhongjian">
		</div>
		<div class="input_jh">
			<input class="Eamil" type="text" v-model="userEamil" placeholder="请输入绑定的邮箱">
			<input class="name" type="text" v-model="username" placeholder="请输入账号">
		</div>
		<div class="zhongjian">
		</div>
		<div class="_button">
		<div class="input_mm">
	     <input class="mima" type="text" v-model="userpassword" placeholder="请设置6-12位的数字或字母密码"> 
		 <div class="ii">
	       <button v-show="anniumm" @click="shubiaodianji"><img src="../assets/图标-1.gif" /></button>
		   <button v-show="!anniumm" @click="shubiaodianji"><img src="../assets/图标-2.gif" /></button>
			 </div>
			</div>
		</div>
		<div class="qd_button">
			<button v-on:click="register()"><router-link to="/">确定</router-link></button>
		</div>
	</div>
</template>

<script>
	 export default{
		 data(){
			 return{
				userEamil: '', 
				username: '',
				userpassword: '',
				anniumm: true,
			 }
		 },
		 methods: {
			 shubiaodianji: function() {
				if(!this.anniumm){
					this.anniumm = true; 
				} else {
					this.anniumm = false; 
				}
			 },
			 register(){
			 				 this.$http.post('/api/users/zhuce',{userEamil:this.userEamil,username:this.username,userpassword:this.userpassword}).then((data) =>{
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

<style scoped>
*{
	padding: 0;
	margin: 0;
}

.main{
	float: left;
	width: 100%;
}
.dingbu{
	float: left;
	width: 100%;
	height: 90px;
}
.ll{
	float: left;
	width: 38px;
	height: 36px;
	margin-top: 25px;
	margin-left:20px;
}
.wenzi{
	float: left;
	display: block;
	width: 500px;
	height: 90px;
	line-height: 85px;
	text-align: center;
	text-indent: 100px;
	font-size: 30px;
	color:#3b3b3b;
	font-weight: bold;
}
.zhongjian{
	float: left;
	width: 100%;
	height: 45px;
	border: 1px solid #e7e7e7;
	background:#fafafa;
}
.input_jh{
	float: left;
	width: 100%;
	height: 244px;
	
}
.Eamil{
	float: left;
	width: 100%;
	height:121px;
	text-indent: 10px;
	border: 1px solid #fafafa;
	font-size: 25px;
	color:#d7d7d7;
}
.name{
		float: left;
	width: 100%;
	height:121px;
	text-indent: 10px;
	border: 1px solid #fafafa;
	font-size: 25px;
	color:#d7d7d7;
}
.input_mm{
	float: left;
	width: 100%;
	height: 125px;
}
.mima{
	float: left;
	width: 80%;
	height: 125px;
	text-indent: 10px;
		color:#d7d7d7;
	font-size: 25px;
	border: 1px solid #fafafa;
	border-right: 0;
	/* background: url(../assets/图标-1.gif) right 5px center no-repeat; */
}
.ii{
 	float: left;
	width: 20%;
	height: 125px;
}

.ii>button {
	float: right;
	margin-top: 40px;
	border: 0;
	width: 53px;
	height: 33px;
}

.ii>button>img {
	width: 53px;
	height: 33px;
}
.qd_button{
	float: left;
	width: 100%;
	height: 30px;
}
.qd_button>button{
	height: 80px;
	width: 80%;
	margin-left: 10%;
	font-size: 35px;
	background:#ff8f5d;
	border: 0;
	color: #fff;
	border-radius: 10px;
}



</style>
