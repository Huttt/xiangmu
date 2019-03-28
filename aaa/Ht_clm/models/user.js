var mongoose=require('../common/db')
//用户数据库
var user=new mongoose.Schema({
	username:String,
	password:String,
	userEamil:String,
	userYanzheng:String,
})
user.statics.findByUsername=function(name,callBack){
	this.find({username:name},callBack);
}
//登录匹配是不是拥有的用户名和密码并且没有处于封零
user.statics.findUserLogin=function(name,password,callBack){
	this.find({username:name,password:password,},callBack)
}
user.statics.findUserEamil=function(email,name,Password,callBack){
	 this.find({userEamil:email,username:name,password:password},callBack)
}
user.statics.findUserWj=function(userYanzheng,name,Password,callBack){
	 this.find({userYanzheng:userYanzheng,username:name,password:password},callBack)
}


var userModel=mongoose.model('user',user);
module.exports=userModel;
