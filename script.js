$(function(){
    var roles = ["cook", "animal lover", "funny person"];
    var count=0;
    var $typeSpan = $("#intro .content h2 span").typist({
        text: roles[count]
    });
    setInterval(() => {
      $typeSpan
        .typistRemove(roles[count++ % roles.length].length)
        .typistPause(2000)
        .typistAdd(roles[count % roles.length]);
    }, 5000);
    $(".navbar");
    $(window).scroll(function(){
        if ($(window).scrollTop()<40) {
            $(".navbar").slideDown(200);          
        } else {
            $(".navbar").slideUp(200);
        }
    });
});