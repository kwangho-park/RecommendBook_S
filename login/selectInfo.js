

/* 로그인정보 조회/필터링 function */
// 사용자 입력값과 저장된값을 비교
function selectInfo(loginDto){
	
	var result = false; 	
	
	// 사용자가 입력한 id, pw를 호출
	console.log("사용자가 입력한 id : "+loginDto.getId());
	console.log("사용자가 입력한 pw : "+loginDto.getPw());


	var infoLength=0;
	
	/* 사용자정보의 길이 확인 */
	for(var loop1=11 ; !(sessionStorage.getObj(loop1)==null) ; loop1++){		// null이 번호에서 반복 종료
		infoLength += 1;
	}
	
	console.log("저장된 사용자정보의 infoLength : "+infoLength);
	
	
	/* filtering */
	// 사용자가 입력한 정보와 저장된 정보를 비교하는 로직
	for(var loop2=11 ; loop2 < 11+infoLength ; loop2++){		// 11번부터 infoLength의 횟수만큼 반복
		
		var userInfo = sessionStorage.getObj(loop2);
		
		if((loginDto.getId()==userInfo.id) && (loginDto.getPw()==userInfo.pw)){	// 사용자 입력 id/pw 을 저장된 id/pw와 비교
			
			console.log(loop2+"번");
			console.log("저장된 id : " +userInfo.id);
			console.log("저장된 pw : " +userInfo.pw);
			
			result = true;
			break;
		}
	}
	
	return result;
	
}// selectInfo() END




/* session storage 확장 */
// 임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))		// JSON : JS의 텍스트 기반의 데이터 교환표준
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
