// $(function(){
//     $("button").click(function(){
//       $('.box').toggleClass('yellow');
//     });
//   });

// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_slide


//   $(function(){
//     $("button").click(function(){
//       var div = $("div");  
//       div.animate({left: '100px'}, "slow",);
//       div.animate({fontSize: '3em', background:"red"}, "slow",()=>{
//         alert("hello")
//     });
//     });


//     $("button").click(function(){
//         var h1 = $("h1");  
//         h1.css({color: "red"});
//       });
//   });

// $(function(){
//     $("button").click(function(){
//       $("#p1").css({"color": "red", "background":"green","font-size":'50px'})
//         .fadeIn()
//         .fadeOut()
//         .fadeIn()
//     });
//   });


//   $(function(){
//     $("button").click(function(){
//       $(".redbox")
//         .fadeIn(150)
//         .fadeOut(100)
//         .fadeIn(150)
//     });
//   });

//   $(function(){
//     $("button").click(function(){
//       $(".bluebox")
//         .fadeIn(100)
//         .fadeOut(150)
//         .fadeIn(100)
//     });
//   });
//   https://www.w3schools.com/jquery/jquery_dom_set.asp



$(function(){
    $("#btn1").click(function(){

        let a = $("input").val();
      $(".box").append(`<li>${a}</li>`);
    });

});