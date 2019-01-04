

/*
 * 필터링 종류 : 전체 공백을 필터링
 * (도서명, 작가명, 제목, 게시글, 추천점수)
 * bookType(분류), favorite(취향), level(난이도) 는 초기값이 주어지기 때문에 " "필터링 안해도됨
 * */


/* 전역 함수 선언 및 정의 */
function postFilter(){
	
	var result = false;
	
	/* 사용자 입력값을 읽기 위한 web page의 dom객체 얻기*/
	var bookNameDom = document.getElementById("bookName");
	var writerDom = document.getElementById("writer");
	var titleDom = document.getElementById("title");
	var contentDom = document.getElementById("content");
	
	var scoreDom = document.getElementById("score");

	/* dom객체에 저장된 사용자의 입력값 호출 */
	// 변수에 담아야 debugging 시 break point 사용가능 !!!
	var bookName = bookNameDom.value;
	var writer = writerDom.value;
	var title = titleDom.value;
	var content = contentDom.value;
	
	var score = scoreDom.value;
	
	// filtering logic
	if(bookName != ""){
		if(writer != ""){
			if(title !=""){
				if(content != ""){
					if(score !=""){
						result = true;
					}else{ alert("추천점수를 입력해주세요")}
				}else{ alert("내용을 입력해주세요")}
			}else{ alert("제목을 입력해주세요")}
		}else{ alert("작가명을 입력해주세요")}
	}else{ alert("도서명을 입력해주세요"); }
	
	return result;
	
} // postFiter() END
















