/*

全选，反选插件
使用时需导入check.js文件(样式自行定义)

使用方法：

- 全选`input`元素定义id为`allcheck`

- 反选`input`元素定义id为`invertcheck`

- 其所属选项`input`元素定义class为`checkitem`

*/


$(function(){
    var
        ischecked,
        checknum,
        $allcheck = $('#allcheck'),
        $invertcheck = $('#invertcheck'),
        $checkitem = $('.checkitem');
    function isallchecked (){
        for (checknum = 0; checknum < $checkitem.length; checknum++) {
            if (! $checkitem[checknum].checked) {
                $allcheck.prop('checked',false);
                return
            }
        }
        $allcheck.prop('checked',true);
    }
    $allcheck.click(function(){
        $checkitem.prop('checked',$(this).is(':checked'));
    })
    $invertcheck.click(function(){
        $checkitem.each(function(){
            ischecked = $(this).is(':checked');
            $(this).prop('checked',! ischecked);
        })
        isallchecked();
    })
    $checkitem.click(function(){
        isallchecked();
        $invertcheck.prop('checked',false);
    })
})