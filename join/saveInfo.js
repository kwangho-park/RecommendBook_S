
/* 사용자 ID, PW를 저장하기위한 DTO생성자(부모 생성자함수) */
function BaseInfo(){
	this.id = null;
	this.pw = null;
}// BaseInfo() END

/* 사용자정보를 저장하기위한 DTO생성자(자식 생성자함수) */
// 이름, 생년월일, 이메일, 주소, 가입경로, 광고메일
function ExtendInfo(){
	
	/* 부모 생성자 빌리기! */
	// id, pw property 생성
	BaseInfo.apply(this, arguments);
	
	this.name = null;
	this.brathday = null;
	this.email = null;
	this.address = null;
	
	this.joinProcess = null;
	this.advertising = null;
}//ExtendInfo() END


function saveInfo(){
	
	/* DTO 객체 생성, 초기화, 할당 */
	// session storage에 저장하기위한 DTO
	var userInfo = new ExtendInfo();
	
	// <input> dom 객체의 참조값을 반환

	var id 		= document.getElementById("id");
	var pw 		= document.getElementById("pw");
	var name 	= document.getElementById("name");
	var brathday= document.getElementById("brathday");
	var email 	= document.getElementById("email");
	var address = document.getElementById("address");
	
	
	// session storage에 전달하는 DTO setting
	userInfo.id = id.value;
	userInfo.pw = pw.value;
	userInfo.name = name.value;
	userInfo.brathday = brathday.value;
	userInfo.email = email.value;
	userInfo.address = address.value;
	
	
	// 임시 확인용 출력
	alert(
			"input information !! "+"\n"+
			"id : 		"+ userInfo.id + "\n"+
			"pw : 		"+ userInfo.pw + "\n"+
			"name : 	"+ userInfo.name + "\n"+
			"brathday : "+ userInfo.brathday + "\n"+
			"email : 	"+ userInfo.email + "\n"+
			"address : 	"+ userInfo.address + "\n"
			);

}// saveInfo() END