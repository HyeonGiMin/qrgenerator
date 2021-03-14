$("#btnAdminAdd").on('click',()=>{
    var adminID =$("#inputAdminId").val();
    var adminPassword = $("#inputAdminPassword").val();
    var adminName = $("#inputAdminName").val();
    axios({
        method: 'post',
        url: '/users/adminReg',
        data: {
            id:adminID,
            password:adminPassword,
            name:adminName
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

$("#btnBackMain").on('click',()=>{
    location.href='/main'
})