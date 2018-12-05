


  /* 회원정보를 필터링(구별)하는 javascript 로직 */
 	
  /* [upgrade] 추후 유지보수의 편의성을 위해 외부 js파일로 분류예정 */
  
  	/* 필터링 정의(임시) */
  	/*
	name = 문자열
	id = 문자열
	password = 숫자
	email = 이메일 형식 (정규식 활용)   - 미구현 2018.12.03
	address = 문자열
	*/
  
  var joinBtn;
  
  /* join page가 웹 브라우저에 로딩될때 실행되는 메소드 (=초기화) */	
  function filterInit(){
	  joinBtn = document.getElementById("joinBtn");
	  
	  joinBtn.onclick = filter;  
  }	
  
  function filter(){
		
		var id = document.getElementById("id");
		var pw = document.getElementById("password");
		var name = document.getElementById("name");
		var brathday = document.getElementById("brathday");		// 사용자 입력 시 <input> attribute(date)에서 필터링
		var email = document.getElementById("email");			// 필터링 적용 필요
		var address = document.getElementById("address");		

		
		/* [??] 이메일의 유효성을 검사하는 정규식 */
		// 정규식에 대해 공부한 이후 진행
//		var resultEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;		
//		var resultEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

		

		// 회원정보 filtering 알고리즘
		// isNaN 라이브러리 메소드 : not a number : 숫자가 아닐경우 true반환
		if((id.value !="")&&(isNaN(id.value)) ){					// id : 공백과 숫자일경우 실행x
			if((pw.value != "")&&(!isNaN(pw.value)) ){				// pw : 공백과 문자일경우 실행x
				if((name.value !="")&&(isNaN(name.value)) ){		// name : 공백과 숫자일경우 실행x
					if(brathday.value != ""){						// brathday : 공백일경우 실행x
						alert("회원가입이 완료 되었습니다 !!");
					}else{
						alert("생년월일을 입력해주실래요??^^");	
					}
				}else{
					alert("이름을 문자로 입력해주실래요??^^");	
				}
			}else{
				alert("pw을 숫자로 입력해주실래요??^^");				
			}
		}else{
			alert("id를 문자로 입력해주실래요?^^");	
		}
  
  } // filter() END
  