/*

悬浮拉出菜单插件(延迟)
使用时需导入hoverPullOut.js文件(样式自行定义)

使用方法：

- 最外层定义类名为`hover`

- 内嵌的触发悬浮事件列表条`ul`元素定义`hover_list`类，其子类`li`元素定义`data-id`数字用于对齐触发事件时的显示元素

- 内嵌的隐藏元素使用`pull_list`类进行包裹，在其内嵌的子类`div`中定义`id`格式形如`pull_list1`后跟数字对应触发事件的`li`元素中的`data-id`属性(`pull_list`类及其子类请自行定义`diplay:none`)

*/
$(function(){
    var
        hover_event,
        $hover_li = $('.hover_list li'),
        $pull_list = $('.pull_list');
        $pull_listAll = $('.pull_list>div');
        $hover_li.mouseenter(function(){
            clearTimeout(hover_event);
            hover_event = setTimeout(() => {
                $pull_list.removeClass('hid');
                $pull_listAll.addClass('hid');
                $('#pull_list' + $(this).data('id')).removeClass('hid');
            },100)
        }).mouseleave(function(){
            clearTimeout(hover_event);
            hover_event = setTimeout(() => {
                    $pull_list.addClass('hid');
                    $('#pull_list' + $(this).data('id')).addClass('hid');
            },100);
        })
        $pull_list.mouseenter(function(){
            clearTimeout(hover_event);
        }).mouseleave(function(){
            $pull_list.addClass('hid');
            $pull_listAll.addClass('hid');
        })
})