/*

轮播插件
使用时需导入setTimeplay.js文件(样式自行定义)

使用方法：

- 外层限制框定义类名为`pic`

- 图片条`ul`元素需定义类名'pic ul'

- 左页按钮，右页按钮分别定义`pic_l`以及`pic_r`

- 中间小圆点组，常以`i`元素引入字体圆点表示，此时需定义其父类名`pic_c`

默认:
- 默认滚动事件为3秒
- 默认总页数为8页，需更改可改以下`page_count`变量
- 小圆点组的被选定颜色为`pic_i_color`变量，默认静止时为`#fff`

*/


$(function(){
    var
        $pic = $('.pic'),//外层限制框
        $pic_ul = $('.pic ul'),//图片条
        $pic_l = $('.pic_l'),//左页按钮(btn_obj)
        $pic_r = $('.pic_r'),//右页按钮(btn_obj)
        $pic_c = $('.pic_c i'),//中间小圆点组
        page = 1,//初始化页数
        page_count = 8,//总页数
        pic_width,//单图片宽度
        pic_time,//图片轮播setTimeout事件
        pic_i_color = '#db192a',//小圆点组的被选定颜色
        pic_i;//用于小按钮for循环语句的索引
    /* 左右按钮事件 */
    $($pic_c[0]).css('color',pic_i_color);
    $pic_r.click(function(){
        if (! $pic_ul.is(':animated')) {
            pic_width = $('.pic').css('width');
            if (page !== page_count) {
                page += 1;
                $pic_ul.animate({'left':'-='+ pic_width},'slow');
            } else {
                page = 1;
                $pic_ul.animate({'left':'0px'},'slow');
            }
            $pic_c.css('color','#fff');
            $pic_c[page-1].style.color = '#db192a';
        }
    })
    $pic_l.click(function(){
        if (! $pic_ul.is(':animated')) {
            pic_width = $('.pic').css('width');
            if (page !== 1) {
                page -= 1;
                $pic_ul.animate({'left':'+='+ pic_width},'slow');
            } else {
                page = page_count;
                $pic_ul.animate({'left':-$('.pic').width()*7 + 'px'},'slow');
            }
            $pic_c.css('color','#fff');
            $pic_c[page-1].style.color = '#db192a';
        }
    })
    /* 小按钮 */
    $pic_c.click(function(){
        for (pic_i=0;pic_i<$pic_c.length;pic_i++) {
            if ($pic_c[pic_i] === this) {
                $pic_ul.animate({'left':-$('.pic').width()*pic_i + 'px'},'slow');
                page = pic_i+1;
                $pic_c.css('color','#fff');
                $pic_c[page-1].style.color = '#db192a';//修改被选定颜色
            }
        }
    })
    //轮播
    function settimescroll(){
        clearTimeout(pic_time)
        $pic_r.click();
        pic_time = setTimeout(settimescroll,3000);
    }
    pic_time = setTimeout(settimescroll,3000);
    //悬停以致停止轮播
    $pic.mouseenter(function(){
        clearTimeout(pic_time);
    }).mouseleave(function(){
        pic_time = setTimeout(settimescroll,3000);
    })
})




