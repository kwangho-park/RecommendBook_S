
/*
   - 간이 게시판 구현 방법
   
     1. '게시글작성' page에서 사용자가 입력한 값중 bookName, writer, score, title 을  sessionStorage에 키값을 부여 후 저장
     	= 생성자 함수로 객체(기본+확장)를 만들어서 session storage에 저장
     	
     2. [ok] '추천도서 검색' page가 web browser에 로딩 시 init() 을 통해 sessionStorage에 저장된 데이터 유무를 확인하는 function실행 (length값이 1이상일때 존재하는것으로 판단)
  	 3. [ok] 데이터가 존재하지 않을 경우 동작하지 않음	 
     4. 데이터가 존재 할 경우 출력하는 function을 실행하며 전체를 반복하면서 저장되어있는 데이터를 배열에 저장
     5. 배열에 저장한 데이터는 HTML tag의 innerHTML property를 사용하여 출력
     	= tag의 id attribute만 지정해 놓으면 내용이 없는 것처럼 보이는것을 활용
     	= 없었다가 생긴것처럼
     	= 5줄정도만 tag 작성
     	
     6. sessionStorage에 데이터를 저장하고 불러 올 때 객체를 활용해서 5개의 게시글까지 등록 할 수 있도록 업데이트 예정
  	 
*/




var postBtn;


/* web browser에 웹 페이지가 로딩 시 동작하는 function */
function postEventListener(){
	postBtn = document.getElementById("postBtn");		// <input> post button의 dom객체의 참조값을 반환
	  
	postBtn.addEventListener("click",writeCheck);		// function을 button의 이벤트 리스너등록 
} // postinit() END
 


/* 게시글 작성 전 session storage에 잔여 공간을 확인하는 function*/
//게시글 등록 버튼 postBtn 클릭시 동작
function writeCheck(){
	
	/* session storage의 데이터를 관리하기위한 로직 */
	// 저장한도 5개
	if(5>window.sessionStorage.length){
		post();
	}else{
		alert("게시글수의 한도에 도달했습니다. 관리자에게 문의하세요!^-^");
	}

} // writeCheck() END

  
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
	
	
	// 1.메모리에 객체 할당 2.객체초기화 3.protorype에 링크연결 4.객체 주소반환
	var dto = new postingDTO(bookName, writer, score, title);

	
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
function postingDTO(bookName,writer,score,title){
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
} // postingDTO() END


/* prototype(원형)객체 멤버 추가 */
// getter
// [장기적 고민] session storage에 저장하기 위해서  JQuery가 필요함
postingDTO.prototype.getterBookName = function(){
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






