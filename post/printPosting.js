
/* 사용자에게 게시글 데이터를 입력받아 표출하는 로직
 * 
 * 객체/상속 연습용 (prototype의 공유로 상속구현)
 * 추후 서버 연동시 활용
 * 도서의 분류에 따라서 취향을 다르게 입력 or 사용자의 선택 사항 (=ExtendDTO의 prototype 객체 활용)
 * 
 * */




/* 분류, 취향, 난이도를 저장하기위한 객체 생성자 함수 */
// postingDTO 으로 생성되는 인스턴스(객체)의 부모 생성자

function ExtendDTO(){}



/* 입력된 게시글 데이터를 출력하는 함수*/
function printPosting(){
	var bookNameDom = document.getElementById("bookName");
	var writerDom = document.getElementById("writer");
	var scoreDom = document.getElementById("score");
	var titleDom = document.getElementById("title");
    
	
	// 사용자가 입력한 게시글의data를 읽음
	var bookName 	= bookNameDom.value;
	var writer 		= writerDom.value;
	var score		= scoreDom.value;
	var title		= titleDom.value;

	/* 자식객체 생성 */
	// 1.메모리에 객체 할당 2.객체초기화 3.prototype에 링크연결 4.객체 주소반환
	var dto = new PostingDTO(bookName, writer, score, title);
	
	
	/* 부모 객체(=prototype) 생성 */
	
	// <select> dom (id = bookType) 객체의 입력값 반환
	var bt = document.getElementById("bookType");
	var f = document.getElementById("favorite");
	var l = document.getElementById("level");
	
	
	// prototype에 property생성 및 저장
	ExtendDTO.prototype.bookType = bt.value;	
	ExtendDTO.prototype.favorte = f.value;	
	ExtendDTO.prototype.level = l.value;	
	
	
	
	/* 상속 */
	// 부모 객체 : ExtendDTO의 prototype, 자식 객체 : PostingDTO 생성자로 생성된 모든 인스턴스(객체)
	PostingDTO.prototype = ExtendDTO.prototype;

	
	// 다이얼로그 출력 후 확인 or 취소 입력값을 반환 (확인 = true, 취소 = false)
	// 현재는 반환값을 미활용..2018.12
	var result = confirm(
			"도서명 : " + dto.bookName + "\n" + 
			"작가 : " + dto.writer + "\n" +
			"점수 : " + dto.score + "\n" + 
			"제목 : " + dto.title + "\n" +
			
			"분류 : " + dto.bookType + "\n" +
			"취향 : " + dto.favorte + "\n" +
			"난이도 : " + dto.level + "\n"
		);
	
	/* [update] */
	// [현상1] 선택하지 않았을때는 <select> dom 객체의 value 값이 undefined 출력..!
	// <select> tag의 <option> attribute selected는 효력이 없음..
	// [현상2] web page가 로드된 직후에 '게시글등록' 버튼의 이벤트에 undefined 가 저장되고 이후에는 정상동작..?!
	
} // printPosting() END

