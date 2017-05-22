jQuery.extend({
	'Fade':function(obj,time,svc){
	/*把创建的元素加入到xbox中*/
	var $xbox = $(obj+'>.xbox');
	var str = '';
	for(var i in svc){
		str += '<a href="'+svc[i].href+'" title="'+svc[i].title+'" alt="'+svc[i].alt+'"><img src="'+svc[i].src+'"/></a>'
	}
	$xbox.html(str);
	//---------------淡入淡出----------------
	
	var $aLen = $xbox.children('a');
	var $menu =	$(obj).children('.menu');
		$aLen.each(function(i,e){
			$('<li></li>').appendTo($menu);
		});
		$menu.children(':first').addClass('slt');
		$aLen.eq(0).fadeIn().siblings('a').fadeOut();
		$menu.on('click','li',change);
	//------------------轮播---------------------
	var num = 0;
	var $menuI = $menu.children('li');
//	var $txto = $(obj).children('.text').height();
	var $p1 = $(obj).children('p:eq(0)') , $p2 = $(obj).children('p:eq(1)');
	var $img = $aLen.children('img');
//	var $txth = $txt.height()
	$p1.text($aLen.eq(0).attr('title'));
	$p2.text($aLen.eq(0).attr('alt'));
	function change(){
		$menuI.eq(num).addClass('slt').siblings('li').removeClass('slt');
		$aLen.stop(true).eq(num).fadeIn(1000).siblings('a').fadeOut(1000);
		$p1.text($aLen.eq(num).attr('title'));
		$p2.text($aLen.eq(num).attr('alt'));
	}
	var a =1 ;
	function move(){
		if(num==$aLen.size()-1) a=-1;
		if(num==0) a=1;
		num+=a
		change();
	}
	var timer = setInterval(move,time);
	var $box = $(obj);
		$box.on({
			'mouseover':function(){
				clearInterval(timer);
			},
			'mouseout':function(){
				timer = setInterval(move,time);
			}
		})
	//-------------------左右点击-----------------
	$menuI.on('click',function(){
			num = $(this).index();
			change();
	})
}

})	