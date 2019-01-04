

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