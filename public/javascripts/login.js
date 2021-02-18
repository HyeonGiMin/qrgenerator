$("#submit").on('click',()=>{
    var id=  $("#id").val()
    var password = $("#password").val();
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
    var regUser={
     
    }
    axios({
        method: 'post',
        url: '/users',
        data: {
            name:$("#name").val(),
            phone:$("#phone").val(),
            age:$("#age").val()
        }
    }).then((res)=>{
        alert("등록 되었습니다")
        if(res.data.Success){
          location.href="/main"
        }else{
          alert("Login Error")
        }
        
    })
    
})

$("#regist").on('click',()=>{
    
})