



/* web browser에 web page를 로딩 시 초기화하는 함수 */
function init() {
	var bookType = document.getElementById("bookType");
	var favorite = document.getElementById("favorite");
	var level = document.getElementById("level");

	var searchBtn = document.getElementById("searchBtn");

	searchBtn.addEventListener("click", search); // 도서검색 button 클릭시 동작하는
													// event listener (함수)추가
}

/* 도서검색 버튼 클릭시 동작하는 함수 */
function search() {

	alert("당신이 선택한 도서분류는 " + bookType.value + " 입니다");
	alert("당신이 선택한 취향은 " + favorite.value + " 입니다");
	alert("당신이 선택한 난이도는 " + level.value + " 입니다");
}
