<template>
	<div class="main">
		<div class="dingbu">
			<router-link to="/"><img class="ll" src="../assets/tubiao-1.gif"></router-link>
			<span>找回密码</span>
		</div>
		<div class="zj"></div>
		<section class="zhanghao">
			<input class="name" type="" value="" id="" v-model="username" placeholder="请输入账号">
		</section>
			<section class="yanzheng">
			<input class="yz" type="" value="" id="" v-model="userYanzheng" placeholder="请输入验证码">
			<div class="yzm" v-on:click="yanzhengma">
				获取验证码
			</div>
		</section>
		<div class="zj"></div>
		<div class="da">
		<section class="mima">
			<input type="mimama" v-model="userpassword" id="" value="" name="" placeholder="请输入6-12位的数字或字母的新密码">
			<div class="oo">
			  <button v-show="anniumm" v-on:click="shubiaodianji"><img src="../assets/图标-2.gif" /></button>
			  <button v-show="!anniumm" v-on:click="shubiaodianji"><img src="../assets/图标-1.gif" /></button>
			</div>
		</section>
		</div>
		<div class="qd_button">
			<button v-on:click="wjmima()"><router-link to="/">确定</router-link></button>
		</div>
		</div>
	
</template>

<script>
	 export default{
		 data() {
			 return{
			 username:'',
			 userYanzheng:'',
			 userpassword:'',
			 anniumm: false,
			 }
		 },
		 
		 methods:{
			yanzhengma:function(){
				
			},
			shubiaodianji: function() {
							if(!this.anniumm){
								this.anniumm = true; 
							} else {
								this.anniumm = false; 
							}
			},
			wjmima(){
			this.$http.post('/api/users/wangji',{username:this.username,userYanzheng:this.userYanzheng,userpassword:this.userpassword}).then((data) =>{
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
	margin-top: 30px;
	margin-left:20px;
}
.dingbu> span{
	float: left;
	display: block;
	width: 600px;
	height: 90px;
	text-align: center;
	font-size: 30px;
	font-weight: bold;
	line-height: 90px;
}
.zj{
 float: left;
 width: 100%;
 height: 40px;
 background:#fafafa;
 border: 1px solid #e7e7e7;
}
.zhanghao{
	float: left;
	width: 100%;
	height: 128px;
}
.zhanghao>input{
	float: left;
	width: 100%;
	height: 128px;
	text-indent: 10px;
	font-size: 25px;
	color:#b3b3b3;
	border-left:none ;
	border-left:none ;
	border-top:1px solid #e7e7e7 ;
	border-bottom:  1px solid #e7e7e7;

}
.yanzheng{
  float: left;
  width: 100%;
  height: 128px;
  
  
}
.yanzheng>input{
	float: left;
	width: 70%;
	height: 128px;
	text-indent: 10px;
	font-size: 25px;
	color:#b3b3b3;
	border-left:none ;
	border-top:1px solid #e7e7e7 ;
	border-bottom:  1px solid #e7e7e7;
	border-right:none;
}
.yzm{
	float: left;
	width: 30%;
	height: 128px;
	background:#ff8f5d;
	text-align: center;
	line-height: 128px;
	color: #fff;
	font-size: 25px;
}
.mima{
  float: left;
  width: 100%;
  height: 128px;
  
}
.mima>input{
	float: left;
	width: 80%;
	height: 128px;
	text-indent: 10px;
	font-size: 25px;
	color:#b3b3b3;
	border-left:none ;
	border-top:1px solid #e7e7e7 ;
	border-bottom:  1px solid #e7e7e7;
	border-right:none;
	
}
.oo{
	float: left;
	width: 20%;
	height: 128px;	
	border: 1px solid  #e7e7e7;
	border-left:0 ;
}
.oo>button{
	float: right;
	margin-top: 40px;
	border: 0;
	width: 53px;
	height: 33px;
}
.oo>button>img{
	width: 53px;
	height: 33px;
	
}
.da{
	float: left;
	width: 100%;
	height: 128px;
	
}
.qd_button{
	float: left;
	width: 100%;
	height: 30px;
	margin-top: 80px;
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
