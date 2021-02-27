$("#submit_Login").on('click',()=>{
    var id=  $("#InputUser").val()
    var password = $("#PasswordUser").val();
    axios({
        method: 'post',
        url: '/users',
        data: {
            id: id,
            password: password
        }
    }).then((res)=>{
        console.log(res.data)
        console.log(res.data.Success)
        if(res.data.Success){
          location.href="/main"
        }else{
          alert("Login Error")
        }
        
    })
 })

 $("#addUser").on('click',()=>{
     alert("!!!")
    location.href="/reg"
 })
 
 $("#regist").on('click',()=>{
    var userName =$("#addName").val();
    var userAge = $("#addAge").val();
    var userPhone = $("#addPhone").val();
    axios({
        method: 'post',
        url: '/users/reg',
        data: {
            name:userName,
            phone:userAge,
            age:userPhone
        }
    }).then((res)=>{
        if(res.data.Success){
            alert("등록 되었습니다")
          location.href="/main"
        }else{
          alert("Login Error")
        }
        
    })
    
})

$(document).on("click", ".QRGen", function() {
    let userNo=$(this).attr("name");
    console.log(userNo)
    let url = `/qr/${userNo}`
    location.href=url;

  })