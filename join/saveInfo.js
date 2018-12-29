
/* ����� ID, PW�� �����ϱ����� DTO�������Լ�(�θ�) */
function BaseInfoDTO(id, pw){

	// �ڽ� instance���� ȣ�� �� �������ڰ� ������ arguments��ü�� property ����
	this.id = id || arguments[0];
	this.pw = pw || arguments[1];

	
}// BaseInfo() END

/* ����������� �����ϱ����� DTO�������Լ�(�ڽ�) */
function ExtendInfoDTO(id, pw, name, brathday, email, address, joinProcess, advertising){
	

	/* �θ� ������ ������!(���) */
	// id, pw property ����
	BaseInfoDTO.apply(this, arguments);		// arguments ��ü : �������ڰ� ����Ǵ� �迭�� ������ ��ü = �����ϴ� ������?
	// arguments[0] = id��
	// arguments[1] = pw��

	
	this.name = name;
	this.brathday = brathday;
	this.email = email;
	this.address = address;
	
	this.joinProcess = joinProcess;
	this.advertising = advertising;
	
	
}//ExtendInfo() END


/* ����ڰ� �Է��� ������ session storage�� �����ϱ� ���� function */
function saveInfo(){
	
	// <input> dom ��ü�� �������� ��ȯ
	var idDom 		= document.getElementById("id");
	var pwDom 		= document.getElementById("pw");
	var nameDom 	= document.getElementById("name");
	var brathdayDom = document.getElementById("brathday");
	var emailDom 	= document.getElementById("email");
	var addressDom  = document.getElementById("address");
	
	
	/* DTO ��ü ����, �ʱ�ȭ, �Ҵ� */
	// session storage�� �����ϱ����� DTO
	// instance(��ü)�� ���� �� �ʱ�ȭ
	var dto = new ExtendInfoDTO(idDom.value, pwDom.value, nameDom.value, brathdayDom.value, emailDom.value, addressDom.value);
	


	// session storage�� key���� ȸ�������� ���� */
	// 10��   : ȸ�������� �����ϴ� ���� key��
	// 11�� ~ : ���� ȸ�������� ����Ǵ� �� 
	// var key = 10;
	
	
	// ***[update] key���� �����ϰ� ȸ�����Խø��� key���� ������Ű�� ������ �ʿ���
	// 11������ storage�� ����� data�� ī��Ʈ �ؾ� �� ������ ������
	
	
	sessionStorage.setObj(10, dto);
	
	
	// test
	var test = sessionStorage.getObj(10);
	
	console.log(test.id);
	console.log(test.pw);
	console.log(test.name);
	console.log(test.brathday);
	console.log(test.email);
	console.log(test.address);

	

}// saveInfo() END



/* session storage Ȯ�� */
// �ӽ������(local,session)�� ��ü�� �����ϱ� ���� prototype ��ü Ȯ��
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))		// JSON : JS�� �ؽ�Ʈ ����� ������ ��ȯǥ��
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

