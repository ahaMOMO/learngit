var emailText=document.getElementById("email");
var CodeText=document.getElementById("idCode");
var newPsw=document.getElementById("newpsw");
var pswNew=document.getElementById("pswNew");
var rePsw=document.getElementById("repsw");
var pswRe=document.getElementById("pswRe");
var but=document.getElementsByTagName("button")[0];
var time=60;
var a;
function countTime()
{
	but.innerHTML="重发"+time+"("+"s"+")";
	time--;
	but.disabled=true;
	if(time==0)
		{
			clearInterval(a);
			but.innerHTML="获取验证码";
			time=60;
			but.disabled=false;
		}
}

but.onclick=function()
{
	if(but.style.color=="white")
		{
			a=setInterval(countTime,1000)
		}
}

emailText.onfocus=function()
{
	if(emailText.value=="请输入你的邮箱")
		emailText.value="";
	
}
emailText.onblur=function()
{
	if(emailText.value=="")
		emailText.value="请输入你的邮箱";
}

var judgeEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var errEmail=document.getElementById("erremail");
emailText.onkeyup=function()
{
		
	if(emailText.value=="")
		{
			but.style.color="#999";
			but.style.background="url(../img/idCode.png) no-repeat";
			but.innerHTML="获取验证码";
			clearInterval(a);
		}
	else
	{
		if(!(judgeEmail.test(emailText.value)))
		{
			errEmail.innerHTML="邮箱格式错误，请重新输入";
			but.style.color="#999";
			but.style.background="url(../img/idCode.png) no-repeat";
			emailText.style.background="url(../img/in_error.png) no-repeat";
			
		}
		else
			{
				errEmail.innerHTML="";
				but.style.color="white";
				but.style.background="url(../img/idCode_pre.png) no-repeat";
				emailText.style.background="url(../img/in.png) no-repeat";
				clearInterval(a);
				time=60;
				but.disabled=false;
				but.innerHTML="获取验证码";
			}
	}
}


CodeText.onfocus=function()
{
	if(CodeText.value=="请输入邮箱验证码")
		CodeText.value="";
}
CodeText.onblur=function()
{
	if(CodeText.value=="")
		CodeText.value="请输入邮箱验证码";
}


var judgePsw=/^[0-9a-zA-Z\.\*\/]{6,16}$/;
var errPsw=document.getElementById("errpsw");
newPsw.onfocus=function()
{
	if(newPsw.value=="请输入新的密码")
		{
			newPsw.value="";
			newPsw.style.display="none";
			pswNew.style.display="block";
			pswNew.focus();
		}
}
pswNew.onkeyup=function()
{
	if(!(judgePsw.test(pswNew.value)))
	{
		errPsw.innerHTML="密码只能是6~16位并包含数字、字母、字符“.*/”";
		pswNew.style.background="url(../img/in_error.png) no-repeat";
	}
	else{
		errPsw.innerHTML="";
		pswNew.style.background="url(../img/in.png) no-repeat";
	}
}


pswNew.onblur=function()
{
	if(pswNew.value=="")
	{
		pswNew.style.display="none";
		newPsw.style.display="block";
		newPsw.value="请输入新的密码";
	}
}

var errRepsw=document.getElementById("errRepsw");
rePsw.onfocus=function()
{
	if(rePsw.value=="请再次确认密码")
		{
			rePsw.value="";
			rePsw.style.display="none";
			pswRe.style.display="block";
			pswRe.focus();
		}
}
pswRe.onblur=function()
{
	if(pswRe.value=="")
	{
		pswRe.style.display="none";
		rePsw.style.display="block";
		rePsw.value="请再次确认密码";
	}
}

pswRe.onkeyup=function()
{
	if(pswRe.value!=pswNew.value)
	{
		errRepsw.innerHTML="两次密码输入不一致，请重新确认";
		pswRe.style.background="url(../img/in_error.png)";
	}
	else{
		errRepsw.innerHTML="";
		pswRe.style.background="url(../img/in.png) no-repeat";
	}
}



