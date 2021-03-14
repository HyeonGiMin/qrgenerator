
$(function(){
    $(document).on("click",".UserMod",function(){
   
      var tr = $(this).parent().parent();
      var td = tr.children();
      console.log(td)
      let modal= $('#modifyModal')
      console.log(td.eq(0).text())
      console.log(td.eq(1).text())
      console.log(td.eq(2).text())
      console.log(td.eq(3).text())
  
      $("#modifyModalUserNo").val(td.eq(0).text())
      $("#modifyModalUserName").val(td.eq(1).text())
      $("#modifyModalUserAge").val(td.eq(2).text())
      $("#modifyModalUserPhone").val(td.eq(3).text())
    })
  })
  $("#modifyModalUserButton").on('click',()=>{
      var url = "/users/modify/regUser"
      var up;
      up=confirm("회원 정보를 수정하시겠습니까???")
      if(up){
        $.ajax({
            type: "POST",
            dataType: "json",
            url: url,
            data:{
              no: $("#modifyModalUserNo").val(),
              name:$("#modifyModalUserName").val(),
              age:$("#modifyModalUserAge").val(),
              phone:$("#modifyModalUserPhone").val()
            },
            success: function(data){
                if(data.result_code==200){
                    alert("회원 수정 완료하였습니다!")
                    location.reload(true)
                  //   $("#modifyModalClose").trigger('click')
                }
                else if(data.result_code==500){
                  alert("오류 발생! 다시 시도해 주세요!")
                }
            }
        });
      }
  })