$(function(){
    let userNo=$("#userNo").attr('name')
    let endPoint ="http://192.168.0.52:15000"
    let url=`${endPoint}/log/${userNo}`
    $('#gcDiv').qrcode({
        render	: "table",
        width : 100,
        height : 100,
        text	: url
    });
})

$("#back").on('click',()=>{
    location.href='/main'
})

