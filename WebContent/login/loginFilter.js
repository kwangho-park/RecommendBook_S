

/* web browser에 웹 페이지가 로딩 시 동작하는 함수 */
function loginEventListener() {
	var loginBtn = document.getElementById("loginBtn"); // <input> login button의
    													// dom객체 참조값을 반환

	loginBtn.addEventListener("click", login); // login function을 button의 이벤트
											   // 리스너등록
} // loginEventListener() END

/* login button click 시 실행되는 함수 */
function login() {

	/* <input> tage의 dom객체의 참조값을 셋팅 */
	var idDom = document.getElementById("id");
	var pwDom = document.getElementById("pw");

	/* login 정보 필터링을 위한 instance 생성 및 초기화 */
	// 사용자입력 id => id.value, pw => pw.value
	var loginFilter = createFilter(idDom.value, pwDom.value);

	

	var loginDto;		// 로그인 정보 저장용 DTO

	if (loginFilter.filter()) {		// 로그인정보 필터
		
		loginDto = createDTO(idDom.value, pwDom.value);

		console.log("loginDto id : " + loginDto.getId());
		console.log("loginDto pw : " + loginDto.getPw());
	
		
		/* 로그인 정보를 조회/필터링 function */
		if(selectInfo(loginDto)){
			alert("로그인 성공!");
		}else{
			alert("id 또는 pw가 일치하지 않습니다");
		}
	}
	

} // login() END



/* 로그인정보(id,pw)필터링 function */
function createFilter(id, pw) {

	// filter을 위한 객체 정의
	return {
		filter : function() {

			var result = false;

			if ((id != "") && isNaN(id)) { // isNaN : is + Not a Number :
											// 문자열일경우 true
				if (pw != "" && !isNaN(pw)) {
					result = true;
				} else {
					alert("PW를 숫자로 입력하세요");
				}
			} else {
				alert("ID를 문자로 입력하세요!!");
			}

			return result;
		}
	} // object END

} // createFilter() END

/* web server or DB로 송신을 위한 DTO */
// 실제로 사용하는지는 미지수.... 일단은 closure 연습용!
function createDTO(id, pw) {

	var clientNumber = 1; // 외부 function variable 적용응

	return {
		// geter //
		getId : function() {
			return id;
		},
		getPw : function() {
			return pw;
		},

		// setter //
		setId : function(_id) {
			id = _id;
		},
		setPw : function(_pw) {
			pw = _pw;
		},

		num : clientNumber

	} // object END

}// createDTO() END
