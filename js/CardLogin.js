var snoText=document.getElementById("sno");
var psw=document.getElementById("password");
var tpsd=document.getElementById("tpsw");
var judgeSno= /201[4-9]\d{8}$/;
var errorThing=document.getElementById("tip");
var loginImg=document.getElementsByTagName("button")[0];

var message = "网络传输有问题，请检查网络连接或刷新页面再次进行操作";

function jSno(sno){
	$.ajax({
		url:'inspect',//路径
		type:'POST',//方法
		cache:false,//是否缓存
		dataType:'json',//返回值的类型
		data:{
			'no':sno      //后端的参数名为no,我们自己传入参数sno
		},
		success:function(getSnoResult){
			if(getSnoResult.status=="success"){
				//执行动作
				errorThing.innerHTML="";
			}
			else
				errorThing.innerHTML=getSnoResult.message;
		},
		error:function(){
			alert(message);
//			if(getSnoResult.status=="success"){
//				errorThing.innerHTML="";
//			}
		}
		
	});
}

var getSnoResult={
	"status":"success",
	"message":"学号不存在，请重新输入"
}




snoText.onkeyup=function(){
	if(!(judgeSno.test(snoText.value)))
		{
			snoText.style.background="url(../img/input_error.png) no-repeat";
			errorThing.innerText="学号填写错误!";
			loginImg.style.backgroundImage="url(../img/button_dis.png)";
		}
	else
		{
			snoText.style.background="url(../img/input_.png) no-repeat";
			errorThing.innerText="";
			
			//jSno(snoText.value);//调用函数
			
			if(psw.value!="")
			{
				loginImg.style.backgroundImage="url(../img/button_pre.png)";
			}
				
				
		}
}
snoText.onfocus=function()
{
	if(snoText.value=="学号")
		snoText.value="";
}
snoText.onblur=function()
{
	if(snoText.value=="")
		snoText.value="学号";
}
tpsw.onfocus=function()
{
	tpsw.style.display="none";
	psw.style.display="block";
	psw.focus();
}
psw.onkeyup=function()
{
	if(psw.value!="")
	{
		loginImg.style.backgroundImage="url(../img/button_pre.png)";
		jSnoPsw(snoText.value,psw.value);
	}
	else
		loginImg.style.backgroundImage="url(../img/button_dis.png)";
}
psw.onblur=function()
{
	if(psw.value=="")
	{
		tpsw.style.display="block";
		psw.style.display="none";
	}

}

function jSnoPsw(sno,psw)
{
	$.ajax({
		url:'validate',//路径
		type:'POST',//方法
		cache:false,//是否缓存
		dataType:'json',//返回值的类型
		data:{
			'no':sno,   //后端的参数名为no,我们自己传入参数sno
			'inputPassword':psw
		},
		success:function(getResult){
			if(getResult.status=="empty"){
				//执行动作
				errorThing.innerHTML="学号输入有误";
			}
			else if(getResult.status=="success")
				errorThing.innerHTML="";
			else
				errorThing.innerHTML="密码错误，请重新输入";
		},
		error:function(){
			alert(message);
			if(getResult.status=="empty"){
				//执行动作
				errorThing.innerHTML="学号输入有误";
			}
			else if(getResult.status=="success")
				errorThing.innerHTML="";
			else
				errorThing.innerHTML=getResult.message;
//			if(getSnoResult.status=="success"){
//				errorThing.innerHTML="";
//			}
		}
	});
}

var getResult={
	"status":"fail",
	"message":"密码错误，请重新输入"
}



var nLogin=document.getElementById("nextLogin");
var nImg=nLogin.getElementsByTagName("img")[0];
var num=0;
nLogin.onclick=function()
{
	num++;
	if(num%2!=0)
		nImg.src="../img/icon.png";
	else
		nImg.src="../img/bg.png";
}


