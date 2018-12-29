
/* 사용자 ID, PW를 저장하기위한 DTO생성자함수(부모) */
function BaseInfoDTO(id, pw){

	// 자식 instance에서 호출 시 전달인자가 있을때 arguments객체의 property 저장
	this.id = id || arguments[0];
	this.pw = pw || arguments[1];

	
}// BaseInfo() END

/* 사용자정보를 저장하기위한 DTO생성자함수(자식) */
function ExtendInfoDTO(id, pw, name, brathday, email, address, joinProcess, advertising){
	

	/* 부모 생성자 빌리기!(상속) */
	// id, pw property 생성
	BaseInfoDTO.apply(this, arguments);		// arguments 객체 : 전달인자가 저장되는 배열과 유사한 객체 = 전달하는 이유는?
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
	// session storage에 저장하기위한 DTO
	// instance(객체)를 생성 및 초기화
	var dto = new ExtendInfoDTO(idDom.value, pwDom.value, nameDom.value, brathdayDom.value, emailDom.value, addressDom.value);
	


	// session storage에 key값과 회원정보를 저장 */
	// 10번   : 회원정보를 저장하는 기준 key값
	// 11번 ~ : 실제 회원정보가 저장되는 곳 
	// var key = 10;
	
	
	// ***[update] key값을 저장하고 회원가입시마다 key값을 증가시키는 로직이 필요함
	// 11번부터 storage에 저장된 data를 카운트 해야 할 것으로 추정됨
	
	
	sessionStorage.setObj(10, dto);
	
	
	// test
	var test = sessionStorage.getObj(10);
	
	console.log(test.id);
	console.log(test.pw);
	console.log(test.name);
	console.log(test.brathday);
	console.log(test.email);
	console.log(test.address);

	

}// saveInfo() END



/* session storage 확장 */
// 임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))		// JSON : JS의 텍스트 기반의 데이터 교환표준
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

