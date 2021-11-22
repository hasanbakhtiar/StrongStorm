// https://www.w3schools.com/jquERy/jquery_events.asp
// https://www.w3schools.com/jquERy/tryit.asp?filename=tryjquery_fadeto
// https://www.w3schools.com/jquERy/jquery_css_classes.asp  
$(function(){
    // $("button").mouseover(function(){
        $("button").click(function(){
        $('p').css({'background':"red", 'color': '#fff', 'font-size': '30px', 
        'padding':"10px",
        'border-radius':'10px'});

        $(this).toggleClass('red')
        // $('p').css('background',"red");
        // $('p').slideToggle('1s');
        // $('p').fadeOut('1s');

        // $('p').toggle('1s', ()=>{
        //     alert('Hello')
        // });
        // $('*').hide();
        // $("a[target='_blank']").hide();

    //   $(this).hide();
    //   $("#test").hide();
    });
  });