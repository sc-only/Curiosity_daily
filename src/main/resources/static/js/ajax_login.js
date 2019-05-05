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

            },
            error:function () {
                console.log(data);
                alert("登录请求错误");
            }
        })
    })
})