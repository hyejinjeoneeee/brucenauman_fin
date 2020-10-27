$(document).ready(function () {


    var windowWidth = $(window).width()
    var mouseX = 0;

    $(".my-img-1").attr("src", "img/half.png")

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".my-img-1").attr("src", "img/half_1.png");
        }
        if (mouseX > windowWidth / 2) {
            $(".my-img-1").attr("src", "img/half.png");
        }
    })

    $(".my-img-2").attr("src", "img/half.png")

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".my-img-2").attr("src", "img/half.png");
        }
        if (mouseX > windowWidth / 2) {
            $(".my-img-2").attr("src", "img/half_2.png");
        }
    })


})

    // console. log를 하면 console.log($(window).width()) 크롬에서 값 확인 가능 
    // var는 변수
    // if (조건문의 요소) {조건문의 요소가 충족되었을 때 실행이 되는 내용}

    // 화면기준으로 x좌표 위치가 50% 이하일 때, 흰색
    // 화면기준으로 x좌표 위치가 50% 이상일 때, 검정색
    // 위 두가지를 위해서는 브라우저의 크기와 mousex 좌표 값 필요