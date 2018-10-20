
var email=document.getElementById("email");
var judgeEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var errEmail=document.getElementById("erremail");
email.onfocus=function()
{
	if(email.value=="请输入你的邮箱")
		email.value="";
}
email.onblur=function()
{
	if(email.value=="")
		email.value="请输入你的邮箱";
}
email.onkeyup=function()
{
	if(!(judgeEmail.test(email.value)))
		errEmail.innerHTML="邮箱格式错误，请重新输入";
	else 
		errEmail.innerHTML="";
}


var eCode=document.getElementById("eCode");
var errCode=document.getElementById("errCode");
var getCode=document.getElementsByTagName("a")[0];
eCode.onfocus=function()
{
	if(eCode.value=="请输入邮箱验证码")
		eCode.value="";
}
eCode.onblur=function()
{
	if(eCode.value=="")
	eCode.value="请输入邮箱验证码";
}
var time=60;
var a;
function countTime()
{
	getCode.innerHTML="重发"+time+"("+"s"+")";
	time--;
	but.disabled=true;
	if(time==0)
		{
			clearInterval(a);
			getCode.innerHTML="获取验证码";
			time=60;
			but.disabled=false;
		}
}
getCode.onclick=function()
{
	if(getCode.style.color!="green")
		{
			getCode.style.color="green";
			a=setInterval(countTime,1000);
		}
}


var passWord=document.getElementById("password");
var pswNew=document.getElementById("pswNew");
var judgePsw=/^[0-9a-zA-Z\.\*\/]{6,16}$/;
var errPsw=document.getElementById("errpsw");

passWord.onfocus=function()
{
	if(passWord.value=="请输入新的密码")
		{
			passWord.value="";
			passWord.style.display="none";
			pswNew.style.display="block";
			pswNew.focus();
		}
}
pswNew.onblur=function()
{
	if(pswNew.value=="")
		{
			pswNew.style.display="none";
			passWord.style.display="block";
			passWord.value="请输入新的密码";
		}
}

pswNew.onkeyup=function()
{
	if(!(judgePsw.test(pswNew.value)))
		errPsw.innerHTML="密码只能是6~16位并包含数字、字母、字符“.*/”";
	else 
		errPsw.innerHTML="";
}


var newPsw=document.getElementById("newpsw");
var pswRe=document.getElementById("pswRe");
var errRepsw=document.getElementById("errRepsw");
newPsw.onfocus=function()
{
	if(newPsw.value=="确认密码")
		{
			newPsw.value="";
			newPsw.style.display="none";
			pswRe.style.display="block";
			pswRe.focus();
		}
}
pswRe.onblur=function()
{
	if(pswRe.value=="")
		{
			pswRe.style.dispaly="none";
			newPsw.style.display="block";
			newPsw.value="确认密码";
		}
}
pswRe.onkeyup=function()
{
	if(pswRe.value!=pswNew.value)
		errRepsw.innerHTML="两次密码输入不一致，请重新确认";
	else
		errRepsw.innerHTML="";
}
