//实现用户登录
$(document).ready(function () {

    $(".dengru").click(function () {
        var telephone = $("#tele").val();
        var password = $("#pas").val();
        console.log("登录请求");
        $.ajax({
            url:"login",
            contentType:"application/x-www-form-urlencoded",
            type: "post",
            data:{"telephone":telephone,"password":password},
            success:function (data) {
                if (data=="no2"){
                    alert("用户名不存在");
                }else if(data=="no"){
                    alert("密码错误");
                }else{
                    alert("登录成功");
                }
            },
            error:function () {
                console.log(data);
                alert("登录请求错误");
            }
        })
    })
})