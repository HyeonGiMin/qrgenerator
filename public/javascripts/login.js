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