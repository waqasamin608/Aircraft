$(document).ready(function(){thisLang="en";// remove for translation support
var a=!1;// == news reel - static/carousel switching ============================
$(window).scroll(function(){0<$("#newsroom").length&&$("#newsroom").isOnScreen()&&!a&&(a=!0,$.ajax({url:"https://assets.gulfstreamnews.com/releases.json",data:{format:"json"},error:function error(){console.error("An error occurred fetching the news articles.")},success:function success(a){if(1<a[0][thisLang].length){var b=0,c=0;do{var d=a[0][thisLang][c].id,e=a[0][thisLang][c].langs[thisLang];e.dotcom&&($(".newsroom_0"+b+"_title").text(e.headline),$(".newsroom_0"+b+"_date").text(e.pubTime_translated),$(".newsroom_0"+b+"_link").attr("href","https://gulfstreamnews.com/"+thisLang+"/news/?id="+d),e.images&&e.images.length&&(e.images[0].thumbnail?$(".newsroom_0"+b+"_image").attr("src",e.images[0].thumb).attr("alt",e.images[0].thumb_alt):$(".newsroom_0"+b+"_image").attr("src",e.images[0].preview).attr("alt",e.images[0].preview_alt)),b+=1),c+=1}while(2>=b)}},type:"GET"}))}),$(window).resize(function(){var a=$("#newsroom .news-block__reel");// news reel is a carousel only on mobile; destroy on larger if it exists
if(0<a.length)if(w<sm){a.flickity({cellAlign:"left",contain:!0,prevNextButtons:!1,pageDots:!1});var b=$("#newsroom .news-block__reel").data("flickity")}else"undefined"!=typeof b&&a.flickity("destroy")}).resize()});