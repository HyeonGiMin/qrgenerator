//Phone Number Validtation 및 하이픈(-) 추가
var autoHypenPhone = function(str){
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{              
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }

    return str;
}



$("#inputUserPhone").on('keyup',function(){
  this.value = autoHypenPhone( this.value ) ;  
})


$("#btnUserAdd").on('click',()=>{
    var userName =$("#inputUserName").val();
    var userAge = $("#inputUserAge").val();
    var userPhone = $("#inputUserPhone").val();
    console.log(userPhone)
    console.log(userAge)
    axios({
        method: 'post',
        url: '/users/userReg',
        data: {
            name:userName,
            age:userAge,
            phone:userPhone
        }
    }).then((res)=>{
        console.log(res)
        if(res.data.Success){
            alert("등록 되었습니다")
          location.href="/main"
        }else{
          alert("Login Error")
        }
        
    })
    
})