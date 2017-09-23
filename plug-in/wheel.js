$(function(){var
hover_event,$hover_li=$('.hover_list li'),$pull_list=$('.pull_list');$pull_listAll=$('.pull_list>div');$hover_li.mouseenter(function(){clearTimeout(hover_event);hover_event=setTimeout(()=>{$pull_list.removeClass('hid');$pull_listAll.addClass('hid');$('#pull_list'+$(this).data('id')).removeClass('hid');},100)}).mouseleave(function(){clearTimeout(hover_event);hover_event=setTimeout(()=>{$pull_list.addClass('hid');$('#pull_list'+$(this).data('id')).addClass('hid');},100);})
$pull_list.mouseenter(function(){clearTimeout(hover_event);}).mouseleave(function(){$pull_list.addClass('hid');$pull_listAll.addClass('hid');})
var
$navforjs=$('.navforjs'),$navbtn=$('.nav_btn'),$window=$(window);if($window.width()<768){$navforjs.addClass('navlist').removeClass('init-navlist');}else{$navforjs.removeClass('navlist').addClass('init-navlist');}
$window.resize(function(){if($window.width()<768){$navforjs.addClass('navlist').removeClass('init-navlist').hide();}else{$navforjs.removeClass('navlist').addClass('init-navlist').show();}});$navbtn.click(function(){$navforjs.slideToggle();})
var
$backtop=$('.backtop'),$backtop_btn=$('.backtop_btn'),$window=$(window);$window.scroll(function(){if($window.scrollTop()>100){$backtop.removeClass('hid');}else{$backtop.addClass('hid');}});$backtop_btn.click(function(){$('html,body').animate({scrollTop:"0px"},'slow');})
var
$backscreen=$('.blackscreen'),$modalbox=$('.modalbox'),$show_modal=$('.show_modal'),$hid_modal=$('.hid_modal');$show_modal.click(function(){$backscreen.fadeIn('slow');$modalbox.fadeIn('slow');});$hid_modal.click(function(){$modalbox.fadeOut('slow');$backscreen.fadeOut('slow');});var
ischecked,checknum,$allcheck=$('#allcheck'),$invertcheck=$('#invertcheck'),$checkitem=$('.checkitem');function isallchecked(){for(checknum=0;checknum<$checkitem.length;checknum++){if(!$checkitem[checknum].checked){$allcheck.prop('checked',false);return}}
$allcheck.prop('checked',true);}
$allcheck.click(function(){$checkitem.prop('checked',$(this).is(':checked'));})
$invertcheck.click(function(){$checkitem.each(function(){ischecked=$(this).is(':checked');$(this).prop('checked',!ischecked);})
isallchecked();})
$checkitem.click(function(){isallchecked();$invertcheck.prop('checked',false);})
var
$pic=$('.pic'),$pic_ul=$('.pic ul'),$pic_l=$('.pic_l'),$pic_r=$('.pic_r'),$pic_c=$('.pic_c i'),page=1,page_count=8,pic_width,pic_time,pic_i_color='#db192a',pic_i;$($pic_c[0]).css('color',pic_i_color);$pic_r.click(function(){if(!$pic_ul.is(':animated')){pic_width=$('.pic').css('width');if(page!==page_count){page+=1;$pic_ul.animate({'left':'-='+pic_width},'slow');}else{page=1;$pic_ul.animate({'left':'0px'},'slow');}
$pic_c.css('color','#fff');$pic_c[page-1].style.color='#db192a';}})
$pic_l.click(function(){if(!$pic_ul.is(':animated')){pic_width=$('.pic').css('width');if(page!==1){page-=1;$pic_ul.animate({'left':'+='+pic_width},'slow');}else{page=page_count;$pic_ul.animate({'left':-$('.pic').width()*7+'px'},'slow');}
$pic_c.css('color','#fff');$pic_c[page-1].style.color='#db192a';}})
$pic_c.click(function(){for(pic_i=0;pic_i<$pic_c.length;pic_i++){if($pic_c[pic_i]===this){$pic_ul.animate({'left':-$('.pic').width()*pic_i+'px'},'slow');page=pic_i+1;$pic_c.css('color','#fff');$pic_c[page-1].style.color='#db192a';}}})
function settimescroll(){clearTimeout(pic_time)
$pic_r.click();pic_time=setTimeout(settimescroll,3000);}
pic_time=setTimeout(settimescroll,3000);$pic.mouseenter(function(){clearTimeout(pic_time);}).mouseleave(function(){pic_time=setTimeout(settimescroll,3000);})})