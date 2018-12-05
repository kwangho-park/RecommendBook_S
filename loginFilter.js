


  
  var loginBtn;
  
  /* web browser에 웹 페이지가 로딩 시 동작하는 함수 */
  function loginInit(){
	  loginBtn = document.getElementById("loginBtn");
	  
	  loginBtn.addEventListener("click",login);
  } // init() END
  
  function login(){
	    var id = document.getElementById("id");
	    var pw = document.getElementById("pw");
	    
	    
	    // id, pw 필터링 logic
	    // value property : 입력된 값이 저장되어있는 변수
	    
	    if((id.value != "") && isNaN(id.value)){		// isNaN : is + Not a Number : 문자열일경우 true
	    	if(pw.value!="" && !isNaN(pw.value)){
	    		alert("로그인 성공!!");
	    	}else{
	    		alert("PW를 숫자로 입력하세요");
	    	}
	    }else{
	    	alert("ID를 문자로 입력하세요!!");
	    }


  } // login() END