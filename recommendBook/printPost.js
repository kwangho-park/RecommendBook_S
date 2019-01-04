

/* 게시글 출력여부를 판단하는 function */
function printCheck(){
	  
  if(sessionStorage.getItem(0) == null || parseInt(sessionStorage.getItem(0)) < 6){		// sessionStorage의 값이 존재하는지 확인	 
	printPost();		  
  }
} // printCheck()
  
  
/* 게시글을 출력하는 function */
function printPost(){

	
  var length = parseInt(sessionStorage.getItem(0));		// 게시글 length값 호출 : 1~5
  
  // 게시글을 노출하는 table의 번호(6~10)
  var count = 6;
  
  
  /* session storage에 저장된 전체 게시글 객체를 호출하는 로직 */
  for(var loop=0; loop<length ; loop++){
	  
	  var number = count + loop;		// 게시글 표출 번호 setting (6 + 0,1,2,3,4)
	  
	  var bookNameDom = document.getElementById("bookName"+number);
	  var writerDom = document.getElementById("writer"+number);
	  var scoreDom = document.getElementById("score"+number);
	  var titleDom = document.getElementById("title"+number);

	  var dto = sessionStorage.getObj(loop + 1);				// session storage 게시글정보 1~5번 
	  
	  bookNameDom.innerHTML = dto.bookName;
	  writerDom.innerHTML 	= dto.writer;
	  scoreDom.innerHTML	= dto.score;
	  titleDom.innerHTML	= dto.title;
	  
  }
} // printPost END




/* session storage 확장 */
//임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
   return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
   return JSON.parse(this.getItem(key))
}