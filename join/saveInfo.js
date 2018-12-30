

/* ����� ���� ����� DTO(�θ�) */
function BaseInfoDTO(id, pw){

	// �ڽ� instance���� ȣ�� �� �������ڰ� ������ arguments��ü�� property ����
	this.id = id || arguments[0];
	this.pw = pw || arguments[1];

	
}// BaseInfo() END

/* ����� ���� ����� DTO(�ڽ�) */
function ExtendInfoDTO(id, pw, name, brathday, email, address, joinProcess, advertising){
	

	/* �θ� ������ ������!(=���) */
	// id, pw property ����
	BaseInfoDTO.apply(this, arguments);		// arguments ��ü : �������ڰ� ����Ǵ� �迭�� ������ ��ü
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
	// instance(��ü)�� ���� �� �ʱ�ȭ
	var dto = new ExtendInfoDTO(idDom.value, pwDom.value, nameDom.value, brathdayDom.value, emailDom.value, addressDom.value);

	
	var infoNum;
	
	// session storage�� number���� ȸ�������� ���� */
	// 10��   : ȸ�������� �����ϴ� ��ȣ
	// 11�� ~ : ���� ȸ�������� ����Ǵ� �� 
	if(sessionStorage.getItem(10) == null){
		sessionStorage.setItem(10,11);
		infoNum = 11;						// ���۹�ȣ
		
	}else{
		infoNum = sessionStorage.getItem(10);
		infoNum ++;
		sessionStorage.setItem(10, infoNum);
	}

	// ȸ�������� session storage�� ����
	sessionStorage.setObj(infoNum, dto);
	
	
	// test
	var test = sessionStorage.getObj(infoNum);
	
	console.log("number : "+infoNum);
	
	console.log(sessionStorage.getObj(11));
	console.log(sessionStorage.getObj(12));
	console.log(sessionStorage.getObj(13));
	console.log(sessionStorage.getObj(14));
	console.log(sessionStorage.getObj(15));	



}// saveInfo() END



/* session storage Ȯ�� */
// �ӽ������(local,session)�� ��ü�� �����ϱ� ���� prototype ��ü Ȯ��
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))		// JSON : JS�� �ؽ�Ʈ ����� ������ ��ȯǥ��
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}