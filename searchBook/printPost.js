


/* 게시글 출력여부를 판단하는 function */
function printCheck(){
	  
  if(0 != window.sessionStorage.length){		// sessionStorage의 값이 존재하는지 확인	 
	printPost();		  
  }
} // printCheck()
  
  
/* 게시글을 출력하는 function */
function printPost(){

	
  var length = window.sessionStorage.length;
  
  // 게시글을 노출하는 table의 dom객체 카운트 (6~10)
  var count = 6;
  
  /* session storage에 저장된 게시글 객체를 전부 호출하는 로직 */
  for(var loop=0; loop<length ; loop++){
	  
	  var number = count + loop;
	  
	  var bookNameDom = document.getElementById("bookName"+number);
	  var writerDom = document.getElementById("writer"+number);
	  var scoreDom = document.getElementById("score"+number);
	  var titleDom = document.getElementById("title"+number);

	  var dto = window.sessionStorage.getObj(loop);
	  
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