/*      
  sssssss     MM       MM       MM       MM        VV            VV         2222222
ss           MM  MM  MM MM     MM  MM  MM MM       VV            VV        22     22
ss           MM    MM   MM     MM    MM   MM        VV          VV        22       22
  ssss       MM         MM     MM         MM         VV        VV          22      22
      ss     MM         MM     MM         MM          VV      VV                  22
       ss    MM         MM     MM         MM           VV    VV                  22
      ss     MM         MM     MM         MM            VV  VV                 22
ssssss       MM         MM     MM         MM             VVV                222222222
 
THIS IS CompanyMain.js for SMM V2
*/

/** 
 * Mobile Nav
 * 
 * Hubspot Standard Toggle Menu
*/
 
 
 
/*
function loadXMLDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("smm-transport").innerHTML=xmlhttp.responseText;
        }
      }
    xmlhttp.open("GET","http://struto-co.hs-sites.com/smm-test-editor",true);
    xmlhttp.send();
}
*/

function menuOnRizeResponse() {
    
    var widthLogoWrap = 300;
    var MenuWrap = 1200;
    var MenuAndLogo = 0;
    var winSize = 0;
        
    MenuAndLogo = widthLogoWrap + MenuWrap;
    firstWinSize = MenuAndLogo;
    secondWinSize = firstWinSize - 60;
    thirdWinSize = secondWinSize - 60;
    fourthWinSize = thirdWinSize - 60;
    fifthWinSize = fourthWinSize - 120;
    sixthWinSize = fifthWinSize - 180;
    seventhWinSize = sixthWinSize - 60;
    eighthWinSize = seventhWinSize - 60;
    
    var firstLastItem = window.matchMedia("(max-width: " + firstWinSize + "px)");
                if (firstLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(2)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-a");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(2)").hide();
                
                    
                } else {
                    $(".smm-target-menu-item:nth-last-child(2)").show();
                    $("li.smm-inner-menu-item-a").remove();
                }
            
    var secondLastItem = window.matchMedia("(max-width: " + secondWinSize + "px)");
                if (secondLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(3)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-b");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(3)").hide();
                
                    
                } else {
                    $(".smm-target-menu-item:nth-last-child(3)").show();
                    $("li.smm-inner-menu-item-b").remove();
                }
                
    var thirdLastItem = window.matchMedia("(max-width: " + thirdWinSize + "px)");
                if (thirdLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(4)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-c");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(4)").hide();
                
                    
                } else {
                    $(".smm-target-menu-item:nth-last-child(4)").show();
                    $("li.smm-inner-menu-item-c").remove();
                }
    
    var fourthLastItem = window.matchMedia("(max-width: " + fourthWinSize + "px)");
                if (fourthLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(5)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-d");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(5)").hide();
                
                    
                } else {
                    $(".smm-target-menu-item:nth-last-child(5)").show();
                    $("li.smm-inner-menu-item-d").remove();
                }
                
    var fifthLastItem = window.matchMedia("(max-width: " + fifthWinSize + "px)");
                if (fifthLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(6)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-e");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(6)").hide();
                   
                } else {
                    $(".smm-target-menu-item:nth-last-child(6)").show();
                    $("li.smm-inner-menu-item-e").remove();
                } 
                
    var sixthLastItem = window.matchMedia("(max-width: " + sixthWinSize + "px)");
                if (sixthLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(7)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-f");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(7)").hide();
                   
                } else {
                    $(".smm-target-menu-item:nth-last-child(7)").show();
                    $("li.smm-inner-menu-item-f").remove();
                } 
                
    var seventhLastItem = window.matchMedia("(max-width: " + seventhWinSize + "px)");
                if (seventhLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(8)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-g");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(8)").hide();
                   
                } else {
                    $(".smm-target-menu-item:nth-last-child(8)").show();
                    $("li.smm-inner-menu-item-g").remove();
                }
                
 var eighthLastItem = window.matchMedia("(max-width: " + eighthWinSize + "px)");
                if (eighthLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(9)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-h");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(9)").hide();
                   
                } else {
                    $(".smm-target-menu-item:nth-last-child(9)").show();
                    $("li.smm-inner-menu-item-h").remove();
                }     
    
}
         
 
    
$(function() {
    
    $('.custom-menu-primary').addClass('js-enabled');
    $('.custom-menu-primary .hs-menu-flow-horizontal').before('<a class="mobile-trigger close"><span></span><i></i></a>');
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after('<a class="child-trigger"><span></span></a>');
    $('a.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-flow-horizontal').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('a.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
    });

    $('a.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
    
     //Add classes for ease manupulation of menu mecanism    
    $(".smm-desktop-menu .hs-menu-wrapper.hs-menu-flow-horizontal>ul").addClass("smm-target-menu");
    $("ul.smm-target-menu > li.hs-menu-depth-1").addClass("smm-target-menu-item");
    $(".smm-target-menu-item:last > ul").addClass("smm-bucket");
    $(".custom-menu-primary.smm-desktop-menu ul li.hs-menu-depth-1.hs-item-has-children").append("<span class='fa fa-angle-down'></span>");


    //Onload menu
    menuOnRizeResponse();
    
    //Every thing desktop otherwise mobile
    $(window).on('load resize', function () {
        
        //Resize menu
        menuOnRizeResponse();
        
       // More conditianal
      //$(".smm-target-menu-item:last-child").css("display", "none");
     //Check if more button exist then show otherwise hide it 

        
    });
     
    setTimeout(function() { $(".smm-master-header").show(); }, 500 );
    /* loadXMLDoc(); */
      
    $(window).on('load resize', function () {      
        //Auto height on mobile menu dropdown 
        var wHeight = $(window).height();
        wHeight -= $(".smm-master-header").height();
        $('.smm-mobile-menu .hs-menu-wrapper ul:first-child').css({
            'height' : wHeight + 'px'    
        });
    });
    // Append EXIT Button on mobile menu dropdown
    $('<li class="hs-menu-item hs-menu-depth-1 smm-item-close"><a href="javascript:;"><i class="flaticon-close6"></i></a></li>').appendTo('.smm-mobile-menu .hs-menu-wrapper ul:first-child');
        
    $('.smm-item-close > a, .smm-mobile-menu .hs-menu-wrapper ul:first-child').click(function() { 
        $(".custom-menu-primary .hs-menu-wrapper").slideToggle(250);  
        $('body').toggleClass('mobile-open');
        $('a.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        
        return false;
    });

    
    //Fall Back Auto Drop
    var widthLogoWrap = $(".smm-logo-wrapper").width();                
        widthLogoWrap += 10;     
    var totalWidth = 0;
    $('.smm-target-menu-item').each(function(index) {
        totalWidth += parseInt($(this).width(), 10);
    });  
    var MenuWrap = totalWidth + $(".smm-right-corner").width();
            
    /***** Hide Header on on scroll down *******************************************************/
    /*******************************************************************************************/
                   
    //var autoDropScreen = window.matchMedia("(min-width: 768px)");
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.smm-master-header').outerHeight();
                    
    $(window).scroll(function(event){
        didScroll = true;
    });
                    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
                didScroll = false;
        }
    }, 250);
                    
    function hasScrolled() {
        var st = $(this).scrollTop();
                        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
                        
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
               // $('.smm-master-header').slideUp(200);
                $('.smm-master-header').removeClass("nav-down").addClass("nav-up");             
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {                   
                    $('.smm-master-header').addClass("nav-down").removeClass("nav-up");
                               //$('.smm-master-header').slideDown();
                }
            }    
            lastScrollTop = st;
        }
     

    $(".smm-footer-script").parentsUntil(".footer-container").hide();
    
    /***** SMM GSSE SEARCH Integrated *******************************************************/
    /****************************************************************************************/
    var bigScreenMedia = window.matchMedia("(min-width: 768px)");
    if (bigScreenMedia.matches){
            $('.desktop-search-icon').click(function(){
                //$(".hs-menu-wrapper.hs-menu-flow-horizontal>ul li a, .desktop-search-icon, .smm-right.smm-cta, .smm-desktop-menu ul li.hs-item-has-children span.fa").fadeOut("slow");
                $('.smm-sse-search').toggleClass('smm-sse-open');
                $('.smm-menu-wrapper').toggleClass('smm-sse-menu-close');
                $('.gsc-input').focus();
                $("body").prepend('<div class="smm-sse-bg"></div>');
                $("body").addClass('smm-sse-noscroll');
            });
    }
    var htmlSSE = '';
        htmlSSE = '<li class="hs-menu-item hs-menu-depth-1 mobile-search-icon-li">';
        htmlSSE += '<a class="mobile-search-icon">';
        htmlSSE += '<span class="fa fa-search" style="display: inline"></span> Search Struto.co.uk</a></li>';
    $(".custom-menu-primary.smm-mobile-menu .hs-menu-flow-horizontal>ul").prepend(htmlSSE);
     $('.mobile-search-icon').click(function(){
        $('.smm-sse-search').toggleClass('smm-sse-open');
        $('.smm-menu-wrapper').toggleClass('smm-sse-menu-close');
        $('.gsc-input').focus();
        $("body").prepend('<div class="smm-sse-bg"></div>');
        $("body").addClass('smm-sse-noscroll');
    });
     $(window).on('load', function () {
        //$("input.gsc-search-button").removeAttr("src").get(0).type='button';
        
        //Search placeholder
        $(".gsc-input").attr("placeholder", "Search struto.co.uk");

        $('.gsc-search-button').click(function() {
            $(".smm-sse-search").removeClass("smm-sse-open");
            $(".smm-menu-wrapper").removeClass("smm-sse-menu-close");
            $(".hs-menu-wrapper.hs-menu-flow-horizontal>ul li a, .desktop-search-icon, .smm-right.smm-cta, .smm-desktop-menu ul li.hs-item-has-children span.fa").fadeIn("slow");
            $("div.smm-sse-bg").fadeOut("slow").remove();
            $("body").removeClass('smm-sse-noscroll');
       });
       
       $(".gsc-input").keypress(function(){
          $(".panel-sse-message").addClass("sse-open").removeClass("sse-close");
          $(".panel-sse-links").removeClass("sse-open").addClass("sse-close");
       });
       
       //Remove Menu Seearch Icon on search result
       $('.smm-sse-result-template').find('.desktop-search-icon').remove();
        //This is for 404 auto search
        //$('input.gsc-input').val(decodeURIComponent(location.pathname.split('/').join(' ').split('.').join(' ').split('-').join(' ').split('_').join('')));
        //$('.st-template-404').find('input.gsc-search-button').click();
    });
    
});
