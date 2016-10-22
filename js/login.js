// JavaScript Document
    $(function() {
		$(".input-close").hide();
		displayPwd();
		displayClearBtn();
		setTimeout(displayClearBtn, 200 ); //延迟显示,应对浏览器记住密码
	});	

	//是否显示清除按钮
	function displayClearBtn(){
		if(document.getElementById("username").value != ''){
			$("#username").siblings(".input-close").show();
		}
		if(document.getElementById("password").value != ''){
			$(".ciphertext").siblings(".input-close").show();
		}
		if($("#codeLevel").val()!="" && $("#codeLevel").val()!='0'){
			if($("#validateCode").val()!=""){
				$("#validateCode").siblings(".input-close").show();
			}
		}
	}

	//清除input内容
    $('.input-close').click(function(e){  
		$(e.target).parent().find(":input").val("");
		$(e.target).hide();
		$($(e.target).parent().find(":input")).each(function(i){
			if(this.id=="ptext" || this.id=="password"){
				$("#password").val('');
				$("#ptext").val('');
			}
         });
    });  
	
	//设置password字段的值	
	$('.txt-password').bind('input',function(){
		$('#password').val($(this).val());
	});
	
	//显隐密码切换
	function displayPwd(){
    	$(".tp-btn").toggle(
          function(){
            $(this).addClass("btn-on");
			var textInput = $(this).siblings(".plaintext");
    		var pwdInput = $(this).siblings(".ciphertext");
			pwdInput.hide();
			textInput.val(pwdInput.val()).show().focusEnd();
          },
          function(){
		  	$(this).removeClass("btn-on");
		  	var textInput = $(this).siblings(".plaintext ");
    		var pwdInput = $(this).siblings(".ciphertext");
            textInput.hide();
			pwdInput.val(textInput.val()).show().focusEnd();
          }
    	);
	}

	//监控用户输入
	$(":input").bind('input propertychange', function() {
		if($(this).val()!=""){
			$(this).siblings(".input-close").show();
		}else{
			$(this).siblings(".input-close").hide();
		}
    });
$(window).load(function() {
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
})
$(document).ready(function(){
	$("form").submit(function(e){
	  	var username = $.trim($("#username").val());
		var password = $.trim($("#password").val());
		if(username == ''){
			layer.tips('请输入用户名/邮箱/手机号码','#username', {tips: 1});
			return false;
		}else if(password == ''){
			layer.tips('请输入登录密码','#password', {tips: 1});
			return false;
		}
	});
});
			//验证用户名和密码
  $(document).ready(function(e) {
	  $("input[name=button]").click(function(){
		  var name=$("input[name=username]").val();
		  var pwd=$("input[name=password]").val();
		  var repwd=/^\w{5,15}$/;
		  if(repwd.test(name))
		    {
				 $(".amdin").text("");
				  
			}
		  else
			  {
				 $(".man2").text("用户名错误  请重新输入6-16位字符");
			  }
			   if(repwd.test(pwd))
				{
				  $(".man1").text(""); 
				 }
			  else
				  {
						$(".man1").text("密码有误或格式错误  请重新输入");
				  }
		  
		  });
  });
