/*

模态框插件
使用时需导入navbar.css和navbar.js文件

使用方法：

- 使用按钮定义`show_modal`类用以显示模态框

- 定义`blackscreen`类用以包裹模态框

- 模态框定义`modalbox`,内嵌关闭按钮定义`hid_modal`

*/



$(function(){
    var
        $backscreen = $('.blackscreen'),
        $modalbox = $('.modalbox'),
        $show_modal = $('.show_modal'),
        $hid_modal = $('.hid_modal');
    $show_modal.click(function(){
        $backscreen.fadeIn('slow');
        $modalbox.fadeIn('slow');
    });
    $hid_modal.click(function(){
        $modalbox.fadeOut('slow');
        $backscreen.fadeOut('slow');
    });
})