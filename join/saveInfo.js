
/* ����� ID, PW�� �����ϱ����� DTO������(�θ� �������Լ�) */
function BaseInfo(){
	this.id = null;
	this.pw = null;
}// BaseInfo() END

/* ����������� �����ϱ����� DTO������(�ڽ� �������Լ�) */
// �̸�, �������, �̸���, �ּ�, ���԰��, �������
function ExtendInfo(){
	
	/* �θ� ������ ������! */
	// id, pw property ����
	BaseInfo.apply(this, arguments);
	
	this.name = null;
	this.brathday = null;
	this.email = null;
	this.address = null;
	
	this.joinProcess = null;
	this.advertising = null;
}//ExtendInfo() END


function saveInfo(){
	
	/* DTO ��ü ����, �ʱ�ȭ, �Ҵ� */
	// session storage�� �����ϱ����� DTO
	var userInfo = new ExtendInfo();
	
	// <input> dom ��ü�� �������� ��ȯ

	var id 		= document.getElementById("id");
	var pw 		= document.getElementById("pw");
	var name 	= document.getElementById("name");
	var brathday= document.getElementById("brathday");
	var email 	= document.getElementById("email");
	var address = document.getElementById("address");
	
	
	// session storage�� �����ϴ� DTO setting
	userInfo.id = id.value;
	userInfo.pw = pw.value;
	userInfo.name = name.value;
	userInfo.brathday = brathday.value;
	userInfo.email = email.value;
	userInfo.address = address.value;
	
	
	// �ӽ� Ȯ�ο� ���
	alert(
			"input information !! "+"\n"+
			"id : 		"+ userInfo.id + "\n"+
			"pw : 		"+ userInfo.pw + "\n"+
			"name : 	"+ userInfo.name + "\n"+
			"brathday : "+ userInfo.brathday + "\n"+
			"email : 	"+ userInfo.email + "\n"+
			"address : 	"+ userInfo.address + "\n"
			);

}// saveInfo() END