

/* 게시글을 입력받아'추천도서 검색' session storage에 저장하는 로직 */
// 간이 게시판
var postBtn;


/* web browser에 웹 페이지가 로딩 시 동작하는 function */
function postEventListener(){
	postBtn = document.getElementById("postBtn");		// <input> post button의 dom객체의 참조값을 반환
	  
	postBtn.addEventListener("click",postBtnEL);		// function을 button의 이벤트 리스너등록 
} // postinit() END
 


//게시글 등록 버튼 postBtn 클릭시 동작
function postBtnEL(){
	
	/* session storage의 잔여공간을 확인 */
	// 저장한도 5개
	if(5>window.sessionStorage.length){
		
		// **입력 받은 게시글을 출력하는 함수를 호출 할 예정 //
		printPosting();
		
		post();
	}else{
		alert("게시글수의 한도에 도달했습니다. 관리자에게 문의하세요!^-^");
	}

} // postBtnEL() END

  
/* 게시글 data를 session storage에 저장하는 function */
function post(){
    

	var bookNameDom = document.getElementById("bookName");
	var writerDom = document.getElementById("writer");
	var scoreDom = document.getElementById("score");
	var titleDom = document.getElementById("title");
    
	
	// 사용자가 입력한 게시글의data를 읽음
	var bookName 	= bookNameDom.value;
	var writer 		= writerDom.value;
	var score		= scoreDom.value;
	var title		= titleDom.value;
	
	
	// 1.메모리에 객체 할당 2.객체초기화 3.prototype에 링크연결 4.객체 주소반환
	var dto = new PostingDTO(bookName, writer, score, title);

	
	/* session storage에 순서부여를 위해 메모리 사이즈 확인 */
	var key = window.sessionStorage.length;		// key : 0~4
	
	// session storage에 저장

	window.sessionStorage.setObj(key,dto);


	console.log(window.sessionStorage.getObj(0));
	console.log(window.sessionStorage.getObj(1)); 
	console.log(window.sessionStorage.getObj(2));
	console.log(window.sessionStorage.getObj(3));
	console.log(window.sessionStorage.getObj(4));

	
	alert("게시글이 등록되었습니다.");
	
} // post() END



/* 게시글을 저장/관리기위한 객체 생성자 함수 */
// 보유 자원 : getter/setter/객체 (저장용)
function PostingDTO(bookName,writer,score,title){
	this.bookName = bookName;
	this.writer = writer;
	this.score = score;
	this.title = title;
	
	// [장기적 고민] but.. 멤버 method는 존재하지않다는 에러발생
	// 객체 멤버와 prototype 멤버 모두 저장 or 호출 불가
	// session storage에 저장하기 위해서  JQuery가 필요함
	this.getterBookName = function(){
		return this.bookName;
	}
} // PostingDTO() END


/* prototype(원형)객체 멤버 추가 */
// getter
// [장기적 고민] session storage에 저장하기 위해서  JQuery가 필요함
PostingDTO.prototype.getterBookName = function(){
	return this.bookName;
}



/* session storage 확장 */
// 임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))		// JSON : JS의 텍스트 기반의 데이터 교환표준
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}






