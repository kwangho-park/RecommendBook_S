


/* 게시글 출력여부를 판단하는 function */
function printCheck(){
	  
  if(0 < window.sessionStorage.length){		// sessionStorage의 값이 존재하는지 확인	 
	printPost();		  
  }
} // printCheck()
  
  
/* 게시글을 출력하는 function */
function printPost(){
	  
  // 6순위의 dom객체 읽기
  var bookNameDom = document.getElementById("bookName6");
  var writerDom = document.getElementById("writer6");
  var scoreDom = document.getElementById("score6");
  var titleDom = document.getElementById("title6");
	


  var dto = window.sessionStorage.getObj(1);

  // test
  console.log(dto);			// post web page에서 객체가 잘 넘어왔음!
	  							  
	  

  /* session storage의 데이터를 호출하여 각각의 tag내에 출력  */

  // [확인필요]
  // 생성자와 prototype의 차이로 추정...
	  
// bookNameDom.innerHTML = dto.getterBookName();			// 함수가 존재하지 않다는 에러가 발생

	  
  bookNameDom.innerHTML  = dto.bookName;
  writerDom.innerHTML 	= dto.writer;
  scoreDom.innerHTML	= dto.score;
  titleDom.innerHTML	= dto.title;

  // test
  console.log(dto.bookName);
  console.log(dto.writer);
  console.log(dto.score);
  console.log(dto.title);
	  
	  
	  
}


/* session storage 확장 */
//임시저장소(local,session)에 객체를 저장하기 위해 prototype 객체 확장
Storage.prototype.setObj = function(key, obj) {
   return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
   return JSON.parse(this.getItem(key))
}