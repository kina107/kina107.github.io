$(document).ready(function () {

    $(".accordion__question").click(function () {
        let index = $(this).data("index");
        console.log(index);
        $(".button").removeClass("active");
        $(".button").eq(index).toggleClass("active");        
        $(".accordion__answer").removeClass("open").eq(index).toggleClass("open");
        $(".arrow-up").eq(index).toggleClass("up");
    })
})