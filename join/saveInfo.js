

/* 사용자 정보 저장용 DTO(부모) */
function BaseInfoDTO(id, pw){

	// 자식 instance에서 호출 시 전달인자가 있을때 arguments객체의 property 저장
	this.id = id || arguments[0];
	this.pw = pw || arguments[1];

	
}// BaseInfo() END

/* 사용자 정보 저장용 DTO(자식) */
function ExtendInfoDTO(id, pw, name, brathday, email, address, joinProcess, advertising){
	

	/* 부모 생성자 빌리기!(=상속) */
	// id, pw property 생성
	BaseInfoDTO.apply(this, arguments);		// arguments 객체 : 전달인자가 저장되는 배열과 유사한 객체
	// arguments[0] = id값
	// arguments[1] = pw값

	
	this.name = name;
	this.brathday = brathday;
	this.email = email;
	this.address = address;
	
	this.joinProcess = joinProcess;
	this.advertising = advertising;
	
	
}//ExtendInfo() END


/* 사용자가 입력한 정보를 session storage에 저장하기 위한 function */
function saveInfo(){
	
	// <input> dom 객체의 참조값을 반환
	var idDom 		= document.getElementById("id");
	var pwDom 		= document.getElementById("pw");
	var nameDom 	= document.getElementById("name");
	var brathdayDom = document.getElementById("brathday");
	var emailDom 	= document.getElementById("email");
	var addressDom  = document.getElementById("address");
	
	
	/* DTO 객체 생성, 초기화, 할당 */
	// instance(객체)를 생성 및 초기화
	var dto = new ExtendInfoDTO(idDom.value, pwDom.value, nameDom.value, brathdayDom.value, emailDom.value, addressDom.value);

	
	var infoNum;
	
	// session storage에 number값과 회원정보를 저장 */
	// 10번   : 회원정보를 저장하는 번호
	// 11번 ~ : 실제 회원정보가 저장되는 곳 
	if(sessionStorage.getItem(10) == null){
		sessionStorage.setItem(10,11);
		infoNum = 11;						// 시작번호
		
	}else{
		infoNum = sessionStorage.getItem(10);
		infoNum ++;
		sessionStorage.setItem(10, infoNum);
	}

	// 회원정보를 session storage에 저장
	sessionStorage.setObj(infoNum, dto);
	
	
	// test
	var test = sessionStorage.getObj(infoNum);
	
	console.log("number : "+infoNum);
	
	console.log(sessionStorage.getObj(11));
	console.log(sessionStorage.getObj(12));
	console.log(sessionStorage.getObj(13));
	console.log(sessionStorage.getObj(14));
	console.log(sessionStorage.getObj(15));	



}// saveInfo() END



/* session storage 확장 */
// 임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))		// JSON : JS의 텍스트 기반의 데이터 교환표준
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}