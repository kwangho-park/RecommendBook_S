

/* 게시글을 입력받아'추천도서 검색' session storage에 저장하는 로직 */
// 간이 게시판


// '게시글 등록' button
// [update]전역변수는 오류를 발생시킬 가능성이있기에 함수안으로 넣어야할듯

 
/* web browser에 웹 페이지가 로딩 시 동작하는 function */
function postEventListener(){
	
	// [장기고민] 객체의 주소값을 저장하는 용도와 동작원리는?
	var postBtn = document.getElementById("postBtn");		// <input> post button의 dom객체의 참조값을 반환
	  
	postBtn.addEventListener("click",postBtnEL);		// function을 button의 이벤트 리스너등록 
} // postEventListener() END
 


/* 게시글 등록 버튼 postBtn 클릭시 동작 */
function postBtnEL(){
	
	/* session storage의 잔여공간을 확인 */
	// 0번   : 게시글 정보의 length 값
	// 1-5번 : 게시글 정보 (최대 5개)	
	// 조건  : null아닌 경우 or length값이 5미만인 경우 (length:5 == full)
	if( sessionStorage.getItem(0) == null || parseInt(sessionStorage.getItem(0)) < 5){	 
		
		
		// 사용자가 입력한 게시글 정보가 빈값인경우를 필터링
		if(postFilter()){
			
			// 입력 받은 게시글을 출력 (test용)//
			printPosting();
			
			// session storage에 저장
			post();
		}
		
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
	// 1.메모리에 객체 할당 2.객체초기화 3.prototype에 링크연결 4.객체 주소반환
	var dto = new PostingDTO(bookName.value, writer.value, score.value, title.value);

	
	var add;		// length 값을 증가시키기 위한 변수
	
	
	
	/* 게시글 정보의 length 값 설정*/
	if(sessionStorage.getItem(0) == null){		// 웹 페이지가 최초 로드 시 length값(0번)을 1로 초기화
		sessionStorage.setItem(0, 1);
	}else{
		add = 1 + parseInt(sessionStorage.getItem(0));		// 문자열 -> 숫자 명시적으로 변환필요
															// 명시적인 타입변환이 필요한 이유 : 해당 method의 반환타입 string		
		sessionStorage.setItem(0, add)
	}

	// length값 setting
	var postingLength = sessionStorage.getItem(0);
	
	
	// session storage에 게시글 정보를 저장 (1번~5번)
	sessionStorage.setObj(postingLength,dto);
	

	// debug point
	console.log("length : "+sessionStorage.getItem(0));		// 게시글 정보의 length (string type)
	console.log("1번    : "+sessionStorage.getObj(1)); 		// 첫번째 게시글
	console.log("2번    : "+sessionStorage.getObj(2));
	console.log("3번    : "+sessionStorage.getObj(3));
	console.log("4번    : "+sessionStorage.getObj(4));
	console.log("5번    : "+sessionStorage.getObj(5));			// 마지막 게시글

	
	alert("게시글이 등록되었습니다.");
	
} // post() END








