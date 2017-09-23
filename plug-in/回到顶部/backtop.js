/*

回到顶部按钮插件
使用时需导入hoverPullOut.js文件(样式也可导入backtop.css，其默认按钮在左下方距离两边20px)

使用方法：

- 最外层定义类名为`backtop`

- 内嵌`button`元素定义`backtop_btn`类

默认：

- 回到顶部按钮默认在滚动100px时出现，默认为`slow`慢速回升

*/

$(function(){
    var
        $backtop = $('.backtop'),
        $backtop_btn = $('.backtop_btn'),
        $window = $(window);
    $window.scroll(function(){
        if ($window.scrollTop() > 100) {
            $backtop.removeClass('hid');
        } else {
            $backtop.addClass('hid');
        }
    });
    $backtop_btn.click(function(){
        $('html,body').animate({scrollTop:"0px"},'slow');
    })
})