
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


/* web browser에 웹 페이지가 로딩 시 동작하는 함수 */
function postInit(){
	postBtn = document.getElementById("postBtn");		// <input> post button의 dom객체의 참조값을 반환
	  
	postBtn.addEventListener("click",post);				// function을 button의 이벤트 리스너등록 
} // init() END
  
  
/* 게시글 등록 버튼 postBtn 클릭시 동작하는 function */
function post(){
    

	var bookNameDom = document.getElementById("bookName");
	var writerDom = document.getElementById("writer");
	var scoreDom = document.getElementById("score");
	var titleDom = document.getElementById("title");
    
	
	/* session storage에 저장되어있는 요소의 갯수를 카운트 */
	// 덮어쓰기를 예방하기위함
	// (구현예정)    
	
	
	/* session storage에 변수 저장 */
	// 사용자가 입력한 게시글 data를 읽음
	var bookName 	= bookNameDom.value;
	var writer 		= writerDom.value;
	var score		= scoreDom.value;
	var title		= titleDom.value;
	
	
	// 1.메모리에 객체 할당 2.객체초기화 3.protorype에 링크연결 4.객체 주소반환
	var dto = new postingDTO(bookName, writer, score, title);

	// test
	console.log(dto.getterBookName());
	console.log(dto.getterWriter());
	console.log(dto.getterScore());
	console.log(dto.getterTitle());
	

	window.sessionStorage.setObj(1,dto);

	
	alert("게시글이 등록되었습니다.");
	    
} // post() END



/* 게시글을 저장/관리하는 객체 생성자 함수 */
// 보유 자원 : getter/setter/객체 (저장용)
function postingDTO(bookName,writer,score,title){
	this.bookName = bookName;
	this.writer = writer;
	this.score = score;
	this.title = title;
	
} // postingDTO() END


// prototype(원형)객체 멤버 추가 */
// setter
postingDTO.prototype.setter = function(bookName){
	this.bookName = bookName;		
}

// getter
postingDTO.prototype.getterBookName = function(){
	return this.bookName;
}

postingDTO.prototype.getterWriter = function(){
	return this.writer;
}

postingDTO.prototype.getterScore = function(){
	return this.score;
}

postingDTO.prototype.getterTitle = function(){
	return this.title;
}



/* session storage 확장 */
// 임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}






