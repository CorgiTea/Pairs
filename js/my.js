/*全屏滚动*/
var v = {
	h : $(window).height(),
	w : $(window).width()
}
//------mask
var $mask = $('.mask'),$masko = $mask.children('#loader');
	$mask.css({
		'width':v.w,
		'height':v.h
	});
	$masko.css({
		'margin-top':(v.h-$masko.height())/2-50,
		'margin-left':(v.w-$masko.width())/2
	})
	setTimeout(timer,1000);
	function timer(){
		$mask.animate({
			'margin-top':-v.h
		},1000,'backOut')
	}
//------封装
$.fn.extend({
		'autoL' : function(){
			this.css({
				'left':(v.w-this.width())/2
			});
			return this
		},
		'autoT' : function(){
			this.css({
				'top':(v.h-this.height())/2
			});
			return this
		}
	});
//------------头部
var $nav_list = $('.hc-navbox li') , $head = $('.hc-top-up') , $hc_navbox = $('.hc-navbox');
	$head.css('width',v.w)
	$nav_list.each(function(i,e){
		$(e).children('a:eq(0)').addClass('nav-on');
		$(e).children('a:eq(1)').addClass('nav-off');
		$(e).children('a').hover(function(){
			$nav_list.eq($(this).parent('li').index()).stop(true).animate({
				'top':-30
			},50)
		},function(){
			$nav_list.eq($(this).parent('li').index()).stop(true).animate({
				'top':0
			},50)
		})
	});
//--------底部
var $foot = $('.foot'), $footp = $foot.children();
	$foot.css({
		'width':v.w
	});
	$footp.css({
		'height':$foot.height() / $footp.size(),
		'line-height:':$foot.height() / $footp.size()
	});
var $turn = $('.turn'), $turna = $turn.children();
	$turn.css({
			'width':v.w,
			'height':v.h-$foot.height()-62,
			'top':62
	});
var $yb = $turn.children('a:eq(0)'),$jd = $turn.children('a:eq(1)'),$ybp = $turn.children('p:eq(0)'),$jdp = $turn.children('p:eq(1)');
	$yb.hover(function(){
		$ybp.removeClass('ybgoff').addClass('ybgon');
	},function(){
		$ybp.removeClass('ybgon').addClass('ybgoff');
	})
	$jd.hover(function(){
		$jdp.removeClass('jdgoff').addClass('jdgon');
	},function(){
		$jdp.removeClass('jdgon').addClass('jdgoff');
	})
//-------全屏页面
var $container = $('.container') , $box = $container.children('ul:eq(0)') , 
	$pag = $box.children('li');
	$container.css({
		'width' : v.w,
		'height': v.h
	});
	$box.css({
		'width': v.w
	});
	$pag.css({
		'width': v.w,
		'height': v.h
	});
	$(document).on('mousewheel DOMMuseScroll keyup',function(e){
		var p = e.originalEvent.wheelDelta || -e.originalEvent.detail;
			if(p < 0 || e.keCode == 40){
				num++;
				if(num == $pag.size()) num = $pag.size()-1;
			}
			if(p > 0 || e.keyCode == 38){
				num--;
				if(num == -1) num=0;
			}
			change()
	})
//--------------导航点样式
var $menu = $container.children('ul:eq(1)')
	$pag.each(function(){
		$('<li></li>').appendTo($menu);
	});
var $menuI = $menu.children('li');
var $menuIH = $menuI.height();
	$menu.css({
		'position':'fixed',
		'right':30,
		'top':(v.h-$menuI.size()*$menuIH)/2,
	});
	$menuI.on('click',function(){
		num = $(this).index();
		change();
	})
	$menuI.eq(0).trigger('click');
//-----------头部
var $head = $('.header') ,$span = $head.children('span');
	$head.css({
		'width':v.w
	});
	$span.hover(over,out);
//---------第一屏淡入淡出
	/*JOSN数据*/
var svc = {
	0 : {
		href :'javascript:;',
		title : '埃菲尔铁塔（法语：La Tour Eiffel；英语：the Eiffel Tower）矗立在塞纳河南岸法国巴黎的战神广场，它是世界著名建筑、法国文化象征之一、巴黎城市地标之一、巴黎最高建筑物。被法国人爱称为“铁娘子” 。',
		alt : '埃菲尔铁塔 （巴黎城市地标之一）',
		src:'img/num1.jpg'
	},
	1 : {
		href :'javascript:;',
		title : '得名于设计它的著名建筑师、结构工程师古斯塔夫·埃菲尔，全部由施耐德铁器（现施耐德电气）建造。',
		alt : '埃菲尔铁塔于1889年建成',
		src:'img/num2.jpg'
	}
	
};
$.Fade('.box',5000,svc);
				
var $Bmenu = $('.box .menu');
	$Bmenu.autoL();
//----------------------默认样式
var $polaroids = $('.polaroids');
	$polaroids.css('height',v.h-62);

//----------------收藏夹
var $fix = $('.fix'),$fix_div = $fix.children('div');
	
	$fix.hover(function(){
		$fix.stop(true).animate({
		'right':-200
		},500);
		$fix_div.on('click',function(){
			if($fix.css('right') < -230+'px'){
				$fix.stop(true).animate({
				'right':0
				},500)
			}else{
				$fix.stop(true).animate({
				'right':-230
				},500)
			}
		});
	},function(){
		$fix.stop(true).animate({
		'right':-230
		},500)
	});
//---------JOSN
var svc = {
	0 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	1 : {
		href:'javascript:;',
		title:'Discus',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	2 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/b1.jpg',
		alt:'Roeland!'
	},
	3 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/b2.jpg',
		alt:'Roeland!'
	},
	4 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/b3.jpg',
		alt:'Roeland!'
	},
	5 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	6 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	7 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	8 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	9 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	10 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	11 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	12 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	13 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	14 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	15 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	16 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	17 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	18 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	19 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num3.jpg',
		alt:'Roeland!'
	},
	20 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	21 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	22 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	23 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	},
	23 : {
		href:'javascript:;',
		title:'Roelan',
		src:'img/num4.jpg',
		alt:'Roeland!'
	}
	
}
var str = '' ;
var $imgBox = $('.polaroids');
	for(i in svc){
		str += '<li><a href="'+svc[i].href+'" title="'+svc[i].title+'"><img data-original="'+svc[i].src+'" alt="'+svc[i].alt+'"></a></li>'
	}
	$imgBox.html(str);
//--------------收藏夹飞入
var $img = $imgBox.children('li').children('a');
	$img.on('click',function(){
		var $this_top = $(this).offset().top,$this_left = $(this).offset().left
		var $clone = $(this).clone(), $fix_div_top = $fix_div.offset().top,$fix_div_left = $fix_div.offset().left;
		$clone.css({
			'position':'absolute',
			'top': $this_top,
			'left': $this_left,
			'z-index':99
		})
		 var $li =$('<li></li>').appendTo($('.fix'));
		$clone.children('img').appendTo($li);
		$clone.appendTo($(this).parents('li:eq(0)')).animate({
			'top':$fix_div_top,
			'left':$fix_div_left,
			'width':10,
			'height':10,
			'border-radius':'50%'
		},700,function(){
			$(this).remove();
			$fix.stop(true).animate({
			'right':-200
			},500,function(){
				$(this).stop(true).animate({
					'right':-230
				})
			})
		})
		
	})
//-----------手风琴
//jQuery.extend({
//	'hand':function(obj){
//		var str = '';
//			for(i in svc2){
//				str += '<li><span>'+svc2[i].cont+'</span><img src="'+svc2[i].src+'" alt="" /></li>'
//			}
//			$(obj).html(str)
//		var $hand = $(obj) , $handI = $hand.children('li');
//		$hand.css({
//			'height':v.h
//		})
//	window.onload=function(){
//		$(obj+'>li').click(function(){
//			$(this).each(function(i,e){
//				var $size = $handI.size()-1;
//				var $siblingsW = $(e).siblings().width();
//				console.log($(e).width())
//				$(e).css({
//					'width':v.w-$size*$siblingsW
//				}).siblings().css({
//					'width':(v.w-$(e).outerWidth())/$size
//				});
//
//			})
////					$(this).css('width',720).siblings('li').css('width',50);
////					$(this).children(':first').css({
////						'width':'200px',
////						}).parent().siblings('li').children('span').css({
////						'width':'20px'
////					});
//		})
//	}//onload结束
//				$(obj+'>li').eq(0).trigger('click');
//		}
//})
//--------------------------------------------------------------
jQuery.extend({
	'hand':function(obj){
		var str = '';
			for(i in svc2){
				str += '<li><span class="ui handui  shou shu">'+svc2[i].cont+'</span><img src="'+svc2[i].src+'" alt="" /></li>'
			}
			$(obj).html(str)
			var $hand = $(obj) , $handI = $hand.children('li');
		$hand.css({
			'height':v.h-100
		})
		$handI.click(function(){
					$(this).animate({
						'width':900
					}).siblings('li').animate({
						'width':60
					});
					$handI.children('span').eq($(this).index()).addClass('on').removeClass('shu').parent().siblings().children('span').addClass('shu').removeClass('on');
				})
				$handI.eq(0).trigger('click');
}
	})
var svc2 = {
	0:{
		cont:' 罗兰·巴尔特《埃菲尔铁塔》 <br/>在接近它时，铁塔不再像是正在勃发中的植物新芽，反而像是绽放中的花卉。往上攀登时宛如进入由空气和钢铁构成的花朵之内，其中有挺直的纤维，参差的花瓣，密密麻麻倾斜的花蕊，铺伸的枝叶，以及把如此复杂有序的物体拉向穹空的运动本身。',
		src:"img/y1.jpg"
	},
	1:{
		cont:' 罗兰·巴尔特《埃菲尔铁塔》 <br/>建筑物永远既是梦想物又是功能的体现者，既是某种空幻之表现，又是某种被使用的工具。',
		src:"img/b3.jpg"
	},
	2:{
		cont:' 罗兰·巴尔特《埃菲尔铁塔》 <br/>铁塔有一种潜在的动物性。此外，摄影方法还发现了铁塔的一个新的真理：它是有性别的。',
		src:"img/b4.jpg"
	},
	3:{
		cont:' 罗兰·巴尔特《埃菲尔铁塔》 <br/>铁塔以其存在本身对立于造型艺术美的世俗观念，表明存在有一种即将政府未来世界的新价值：功能美。实际上，虽然铁塔是“无用的”东西它却从技术世界借取了其必要性观念念它是美的，因为它是从必要性秩序中产生的。这将肯定是—次巨大的革命。把—个个纪念碑式建筑物矗立于空中的设想，不可能由一位建筑师，而应由一位工程师来完成。铁塔赋予此物体（建筑）以纯技术性力量，以使其（至少部分地）能够驾驭艺术。其必然的结果不再是艺术之消失（像当时请愿人所认为的那样）而将是艺术之改变；它将 按新的规范，或者说以新的理由，为世人所承认。',
		src:"img/y4.jpg"
	},
	4:{
		cont:' 罗兰·巴尔特《埃菲尔铁塔》 <br/>只有一个神秘的理由可以说明为什么铁塔成为自杀之地。这个理由来自铁塔所具有的一切象征特地。因为铁塔是一种纯景象，是绝对的象征，是无限的变形，然而尽管——或由于——它解放了无数生命的形象，铁塔也呼唤着人类经验中的最后一种形象：死亡。',
		src:"img/b6.jpg"
	},
	5:{
		cont:' 罗兰·巴尔特《埃菲尔铁塔》 <br/>在铁塔眼前横陈的第二种历史是中世纪（第一个是史前史的因素）。考克多曾说过，铁塔就是左岸的圣母院……它与铁塔成双成对，在象征的层面上相互匹配，可以说这已成为旅游的民俗学所认可。',
		src:"img/b5.jpg"
	},
}

	$.hand('.hand');
//-----------无缝滚动
var svc3 = {
	0:{
		cont:'威廉王子夫妇访问巴黎 埃菲尔铁塔前浪漫合影'
	},
	1:{
		cont:'“垂直马拉松”!百名选手竞速埃菲尔铁塔 。'
	},
	2:{
		cont:'珍贵照片展现埃菲尔铁塔历时两年的建造过程'
	},
	3:{
		cont:'巴黎迎来好天气 埃菲尔铁塔下花团锦簇'
	}
}
var str = '';
var $newbox = $('.hc-newbox'),$newboxUL = $('.hc-newbox>ul') ;
	for(i in svc3){
		str += '<li>'+svc3[i].cont+'</li>'
	}
	$newboxUL.html(str)
var $newboxI = $newboxUL.children('li'),$newboxIH = $newboxI.eq(0).height()
	$newbox.hover(function(){
		$newboxUL.stop(true);
	},function(){
		$newboxUL.delay(200).animate({
			'margin-top':-$newboxIH
		},2000,function(){
			$(this).children(':first').appendTo($(this));
			$(this).css('margin-top',0)
			$newbox.trigger('mouseout')
		})
	})
	$newbox.trigger('mouseout');
//--------------登录注册
var $loginmask = $('.loginmask');
	$loginmask.css({
		'width':v.w,
		'height':v.h
	});
var $log = $('.log1'),$logbtn = $log.children().children('.btn');
var $singUp = $log.children('li:eq(1)'),$login = $log.children('li:eq(0)');
	$log.autoL().autoT();
//=================================================正则
var $singUpok = $singUp.children('.btn'),$not1 = $singUp.children(':not(:first)');
var $loginok = $login.children('.btn');
var $singUPuser = $singUp.children(':text'),$singUPpass = $singUp.children(':password');
var $loginuser = $login.children(':text'),$loginpass = $login.children(':password');
var reg_user = /^[A-z]\w{5,14}$/ ;
var reg_pass = /^\d{6,10}$/ ;
$loginuser.on('focus',focus);
$singUPuser.on('focus',focus);
$loginpass.on('focus',focus);
$singUPpass.on('focus',focus);
function focus(){
	if(!$(this).attr('placeholder')==''){
		$(this).attr('placeholder','')
	} ;
}
$loginuser.on('blur',blur,checkUser1);
$singUPuser.on('blur',blur,checkUser);
$loginpass.on('blur',blur2,checkPass1);
$singUPpass.on('blur',blur2,checkPass);
function blur(){
	if($(this).attr('placeholder')==''){
		$(this).attr('placeholder','登录帐号')
	} 
}
function blur2(){
	if($(this).attr('placeholder')==''){
		$(this).attr('placeholder','登录密码')
	} 
}
function checkUser(){
	if(!reg_user.test($singUPuser.val())){
		$singUPuser.val('');
		$singUPuser.attr('placeholder','老铁，麻烦认真写！')
		return false;
	}
	return true;
			
};
function checkUser1(){
	if(!reg_user.test($loginuser.val())){
		$loginuser.val('');
		$loginuser.attr('placeholder','可能是个假用户名！')
		return false;
	}
	return true;
};
function checkPass(){
	if(!reg_pass.test($singUPpass.val())){
		$singUPpass.val('');
		$singUPpass.attr('placeholder','长得帅也是需要密码的。');
		return false;
	};
	return true;
}
function checkPass1(){
	if(!reg_pass.test($loginpass.val())){
		$loginpass.val('');
		$loginpass.attr('placeholder','密码也是个假密码？');
		return false;
	};
	return true;
}
//=================================================正则结束
//确定登录
$singUpok.on('click',function(){
	if(checkUser($singUPuser) && checkPass($singUPpass)){
		$.cookie('username',$singUPuser.val(),{
			expires:3,path:'/'
		});
		$.cookie('password',$singUPpass.val(),{
			expires:3,path:'/'
		});
		$not1.hide();
		$('<img src="img/check49.png" alt="注册成功" />').appendTo($singUp)
	};
	//清空输入框
		$singUPuser.val('');
		$singUPpass.val('');
})//$singUpok click结束
$loginok.on('click',function(){
	if($.cookie('username')==$loginuser.val() && $.cookie('password')==$loginpass.val()){
			$log.animate({
				'top':-$log.height()
			})
			$loginmask.animate({
				'top':-v.h
			});
			$('.navbar-right').empty();
			$('<span class="user-on">'+$.cookie('username')+'</span>').appendTo($('.navbar-right'));
			location.reload()
	}else{
		$log.children().children(':first').text('黑户ミ(ﾉ゜д゜)ﾉ请右转谢谢！')
	};
})

$('.exit').on('click',function(){
	$log.animate({
				'top':-$log.height()
			})
			$loginmask.fadeOut()
})
$('body').on('click','.hove',function(){
	$log.animate({
		'top':(v.h-$log.height())/2
	})
	$loginmask.fadeIn()
})
	//检查是否存在cookie
	var $hover = $('.navbar-right').children(), $log2 = $('.log2');
	$('<li class="new"><p class="p1">账户管理</p><p class="p1 btn ext yes">退出帐号</p><p class="p1 btn ext no">我后悔了</p><p class="p1 btn ext del">退出并删除帐号</p></li><li><img src="img/sign-up.png" alt="管理" class="guanli"/></li>').appendTo($log2);
		$hover.on('click',function(){
			if(!$.cookie('username')=='' && !$.cookie('password')==''){
				$log.css({
					'top':-$log.height()
				})
				$loginmask.css({
					'top':-v.h
				})
				$('.navbar-right').empty();
				$('<span class="user-on">'+$.cookie('username')+'</span>').appendTo($('.navbar-right'));

			}
				$('.user-on').on('click',function(){
					$log2.animate({
						'top':(v.h-$log.height())/2,
					})
					$loginmask.animate({
						'top':0
					});
					$log.css('display','none');
					$log2.css('display','block');
					$('body').on('click','.yes',function(){
						$loginmask.fadeOut()
						$log2.animate({
							'top':-$log2.height()
						});
						$('.navbar-right').empty();
//						$log.empty().append($('<li><p class="p1">LOGIN</p><input type="text" / class="input" placeholder="登录帐号" ><input type="password"  class="input" placeholder="登录密码"/><p class="p1 btn">LOGIN</p></li><li><p class="p1">SIGN UP</p><img src="img/x.png" alt=""  class="exit"/><input type="text" / class="input" placeholder="注册帐号" ><input type="password"  class="input" placeholder="注册密码"/><p class="p1 btn">SIGN UP</p></li>'));
						$('<a href="javascript:;" class="hove">个人中心</a>').appendTo($('.navbar-right'));
						$('.hove').on('click',function(){
							$log.css('display','block');
							$log2.css('display','none');
						})
					});
					$('body').on('click','.no',function(){
						$loginmask.fadeOut()
						$log2.animate({
							'top':-$log2.height()
						});
					});
					$('body').on('click','.del',function(){
						$loginmask.fadeOut()
						$log2.animate({
							'top':-$log2.height()
						});
						$.cookie('username',null,{expires:-1,path:'/'});
						$.cookie('password',null,{expires:-1,path:'/'});
						$('.navbar-right').empty();
						$('<a href="javascript:;" class="hove">个人中心</a>').appendTo($('.navbar-right'));
						$('.hove').on('click',function(){
							$log.css('display','block');
							$log2.css('display','none');
						})
					});
				})
		})
	$hover.trigger('click')
//---------方法区
var num = 0;
	function change(){
		$menuI.eq(num).addClass('slt').siblings().removeClass('slt');
		$box.stop(true).animate({
			'margin-top': -v.h*num
		},400)
	};
	function over(){
			$(this).addClass('slt').siblings().removeClass('slt');
	};
	function out(){
			$(this).removeClass('slt');
	};



