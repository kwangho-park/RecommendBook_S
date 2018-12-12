



  var loginBtn;
  
  /* web browser에 웹 페이지가 로딩 시 동작하는 함수 */
  function loginInit(){
	  loginBtn = document.getElementById("loginBtn");
	  
	  loginBtn.addEventListener("click",login);
  } // init() END
  
  
  /* login button click 시 실행되는 함수*/
  function login(){
	  
	    /* <input> tage의 dom객체의 참조값을 셋팅 */
	    var idDom = document.getElementById("id");
	    var pwDom = document.getElementById("pw");
	    
	    
	    // 사용자입력 id,pw
	    var id = idDom.value;
	    var pw = pwDom.value;
	    
	    
	    // login 정보 필터링을 위한 객체생성 및 초기화
	    var loginFilter = filter(id, pw);
	    
	    // filtering 결과 출력
	    alert(loginFilter.filter());

  } // login() END
  
  
  /* 로그인정보(id,pw)필터링 function */
  // id, pw = global variable
  function filter(id, pw){
	  
	  // filter을 위한 객체 정의
	  return{
		  filter : function(){
			  
			  var result = false;				// result = local variable

			  if((id != "") && isNaN(id)){		// isNaN : is + Not a Number : 문자열일경우 true
			  	if(pw !="" && !isNaN(pw)){
			  		alert("로그인 성공!!");
			  		result = true;
			  	}else{
			  		alert("PW를 숫자로 입력하세요");
			  	}
			    }else{
			    	alert("ID를 문자로 입력하세요!!");
			    }
			  
			  return result;
		  }
	  }
	  
  } // filter() END