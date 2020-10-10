$(function(){
    var roles = ["animal lover", "funny person", "cook"];
    var count=0;
    setInterval(() => {
        $("#intro .content h2 span").fadeOut("slow", function(){
            $(this).text(roles[count++ % roles.length]);
            $(this).fadeIn("slow")
        });
    }, 2500);
});