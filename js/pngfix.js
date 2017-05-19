/*
 
Correctly handle PNG transparency in Win IE 5.5 & 6.
http://homepage.ntlworld.com/bobosola. Updated 18-Jan-2006.

Use in <HEAD> with DEFER keyword wrapped in conditional comments:
<!--[if lt IE 7]>
<script defer type="text/javascript" src="pngfix.js"></script>
<![endif]-->

*/

var arVersion = navigator.appVersion.split("MSIE")
var version = parseFloat(arVersion[1])

if ((version >= 5.5) && (document.body.filters)) 
{
   for(var i=0; i<document.images.length; i++)
   {
      var img = document.images[i]
      var imgName = img.src.toUpperCase()
      if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
      {
         var imgID = (img.id) ? "id='" + img.id + "' " : ""
         var imgClass = (img.className) ? "class='" + img.className + "' " : ""
         var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
         var imgStyle = "display:inline-block;" + img.style.cssText 
         if (img.align == "left") imgStyle = "float:left;" + imgStyle
         if (img.align == "right") imgStyle = "float:right;" + imgStyle
         if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
         var strNewHTML = "<span " + imgID + imgClass + imgTitle
         + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
         + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
         + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
         img.outerHTML = strNewHTML
         i = i-1
      }
   }
}
//------------------------------------
 /*Your ShineTime Welcome Image*/
	 var default_image = 'images/large/default.jpg';
	 var default_caption = 'Welcome to ShineTime';
	 
	 /*Load The Default Image*/
	 loadPhoto(default_image, default_caption);
	 
	 
	 function loadPhoto($url, $caption)
	 {
	 
	 
	    /*Image pre-loader*/
	    showPreloader();
	    var img = new Image();
	    jQuery(img).load( function() 
		{
			jQuery(img).hide();
			hidePreloader();
		
        }).attr({ "src": $url });
	
	    $('#largephoto').css('background-image','url("' + $url + '")');
		$('#largephoto').data('caption', $caption);
	 }

	 
	 /* When a thumbnail is clicked*/
	 $('.thumb_container').click(function()
	 {
	     
		  var handler = $(this).find('.large_image');
		  var newsrc  = handler.attr('src');
		  var newcaption  = handler.attr('rel');
		  loadPhoto(newsrc, newcaption);
	 
	 });
	 
	 /*When the main photo is hovered over*/
	 $('#largephoto').hover(function()
	 {
	    
		var currentCaption  = ($(this).data('caption'));
		var largeCaption = $(this).find('#largecaption');
		
		largeCaption.stop();
		largeCaption.css('opacity','0.9');
		largeCaption.find('.captionContent').html(currentCaption);
		largeCaption.fadeIn()
	
	
		
		 largeCaption.find('.captionShine').stop();
         largeCaption.find('.captionShine').css("background-position","-550px 0"); 
         largeCaption.find('.captionShine').animate({backgroundPosition: '550px 0'},700);
		 
		 Cufon.replace('.captionContent');
		

	 },
	 
	 function()
	 {
	    var largeCaption = $(this).find('#largecaption');
		largeCaption.find('.captionContent').html('');
		largeCaption.fadeOut();
	 
	 });
	
	 
	 
     /* When a thumbnail is hovered over*/
	 $('.thumb_container').hover(function()
	 {  
         $(this).find(".large_thumb").stop().animate({marginLeft:-7, marginTop:-7},200);
		 $(this).find(".large_thumb_shine").stop();
         $(this).find(".large_thumb_shine").css("background-position","-99px 0"); 
         $(this).find(".large_thumb_shine").animate({backgroundPosition: '99px 0'},700);
			 
	 }, function()
	 {
	    $(this).find(".large_thumb").stop().animate({marginLeft:0, marginTop:0},200);
	 });
	 
	 function showPreloader()
	 {
	   $('#loader').css('background-image','url("images/interface/loader.gif")');
	 }
	 
	 function hidePreloader()
	 {
	   $('#loader').css('background-image','url("")');
	 }
   