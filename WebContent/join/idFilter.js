/*
 * 1. 사용자가 입력한 id를 인자로 전달받음
 * 2. session storage에 전체 id 값을 호출하면서 비교 (반복문)
 * */


/* id를 필터링하는 function */
// session storage에 저장된 id값을 비교
function idFilter(){
	
	var result = false;
	
	var inputId = arguments[0]; 	// arguments 객체 연습용
	
	var userInfo;					// session storage에 저장된 객체를 관리하기위한 참조변수 선언
	
	var userNum;					// session storage 10번의 값을 형변환해주기 위한 변수 (=조건문 활용)
	

	// session storage 구성
	// 10번 : 회원정보의 번호를 부여하며 가장 최근에 저장한 번호가 존재 (초기값 null) (type = string)
	// 11번~ : 회원정보가 저장된 곳 (type = object)
	
	/* session storage에 저장된 id와 비교*/
	if(sessionStorage.getItem(10) == null){		// null 일경우 비교 할 값이 없음
		console.log("저장된 사용자 정보가 없습니다")
		result = true;
	}else{
		
		userNum = parseInt(sessionStorage.getItem(10));	// 비교를 위해 명시적 형변환

		
		// id를 비교하는 로직
		for(var loop=11 ; loop < userNum + 1 ; loop++){
			userInfo = sessionStorage.getObj(loop);		// session storage에 저장된 객체 얻기

			if(inputId == userInfo.id){
				result = false;
				break;
				
			}else{
				result = true;
			}
		}
	}
	
	return result;
	
}// idFilter() END





/* session storage 확장 */
//임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
 return this.setItem(key, JSON.stringify(obj))		// JSON : JS의 텍스트 기반의 데이터 교환표준
}
Storage.prototype.getObj = function(key) {
 return JSON.parse(this.getItem(key))
}