
/* 회원정보를 필터링(구별)하는 javascript 로직 */

/* [upgrade] 추후 유지보수의 편의성을 위해 외부 js파일로 분류예정 */

/* 필터링 정의(임시) */
/*
id = 문자열
password = 숫자
name = 문자열
email = 이메일 형식 (정규식 활용)   - 미구현 2018.12.03
address = 문자열
 */

var joinBtn;

/* join page가 웹 브라우저에 로딩될때 실행되는 메소드 (=초기화) */
function joinEventListener() {
	joinBtn = document.getElementById("joinBtn");

	joinBtn.onclick = join;
}

/* join button click 시 실행되는 함수 */
function join() {

	/* <input> 의 dom객체의 참조값을 반환 */
	var idDom = document.getElementById("id");
	var pwDom = document.getElementById("pw");
	var nameDom = document.getElementById("name");
	var brathdayDom = document.getElementById("brathday"); // 사용자 입력 시 <input>
															// attribute(date)에서
															// 필터링
	
	var emailDom = document.getElementById("email"); // 필터링 적용 필요
	var addressDom = document.getElementById("address");

	/* [??] 이메일의 유효성을 검사하는 정규식 */
	// 정규식에 대해 공부한 이후 진행
	// var resultEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
	// var resultEmail =
	// /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

	// 객체 생성 및 참조값 할당
	// 사용자에게 입력받은 data를 filter method에게 전달
	var login = createFilter(idDom.value, pwDom.value, nameDom.value, brathdayDom.value);

	/* 회원가입정보를 필터링하는 함수 호출 */ 
	login.filter();


} // join() END


  


/* 회원가입 정보 필터링 function */
// id, pw, name, brathday
// closure method로 구현 할 필요가 없을듯 ..
function createFilter(id, pw, name, brathday) {

	return {
		filter : function() { // filter property의 closure method

			// 회원정보 filtering 알고리즘
			// isNaN 라이브러리 메소드 : not a number : 숫자가 아닐경우 true반환
			if ((id != "") && (isNaN(id))) { // id : 공백과 숫자일경우 실행x

				if ((pw != "") && (!isNaN(pw))) { // pw : 공백과 문자일경우 실행x
					if ((name != "") && (isNaN(name))) { // name : 공백과 숫자일경우
															// 실행x
						if (brathday != "") { // brathday : 공백일경우 실행x
							
							/* session storage에 저장하는 함수호출 */
							saveInfo();
							
							alert("회원가입이 완료 되었습니다 !!");
						} else {
							alert("생년월일을 입력해주실래요??^^");
						}
					} else {
						alert("이름을 문자로 입력해주실래요??^^");
					}
				} else {
					alert("pw을 숫자로 입력해주실래요??^^");
				}
			} else {
				alert("id를 문자로 입력해주실래요?^^");
			}
		} // filter() END
	} // return object END
} // createFilter() END
