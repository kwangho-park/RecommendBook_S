

var panel;
  	
  	
/* 중복을 최대한 없애는 방법은? */
// [upgrade] 추후에 클릭한 menu의 색상이 유지되는것을 구현
  	

/* 초기화 함수 init()에 의해 실행 */
function menuInit(){
    panel	= document.getElementsByClassName("menuPanel");
    /*
     * panel[0] : 홈 페이지
     * panel[1] : 회원가입
     * panel[2] : 로그인
     * panel[3] : 추천도서 검색
     * panel[4] : 게시글 작성
     * 
     * */
    
	    
	    
	panel[0].addEventListener("mouseover",over0);
	panel[0].addEventListener("mouseout",out0);
		
	panel[1].addEventListener("mouseover",over1);
	panel[1].addEventListener("mouseout",out1);
	
	panel[2].addEventListener("mouseover",over2);
	panel[2].addEventListener("mouseout",out2);
	
	panel[3].addEventListener("mouseover",over3);
	panel[3].addEventListener("mouseout",out3);
	
	panel[4].addEventListener("mouseover",over4);
	panel[4].addEventListener("mouseout",out4);
	
}
  	
function over0(){
  	panel[0].style.backgroundColor = "red";
}
function out0(){	
	 panel[0].style.backgroundColor = "MediumTurquoise";
}
	
function over1(){
  	panel[1].style.backgroundColor = "red";
}
function out1(){	
  	panel[1].style.backgroundColor = "MediumTurquoise";
}

function over2(){
  	panel[2].style.backgroundColor = "red";
}
function out2(){	
  	panel[2].style.backgroundColor = "MediumTurquoise";
}


function over3(){
  	panel[3].style.backgroundColor = "red";
}
function out3(){	
  	panel[3].style.backgroundColor = "MediumTurquoise";
}

function over4(){
  	panel[4].style.backgroundColor = "red";
}
function out4(){	
  	panel[4].style.backgroundColor = "MediumTurquoise";
}
