/*

响应式导航栏插件
使用时需导入modal.js文件

使用方法：

- 外层定义导航栏`navbar`类

- `navbar`类内嵌`navheader`,作为定义导航栏标题(使用`h1`标签定义)以及缩小按钮
    -  缩小按钮，定义`navbtn`类

- `navbar`类内嵌`init-navlist`类，作为包裹`ul`元素的`div`类

默认样式：
- 响应宽度界限为：768px
- 导航栏高：50px;背景色：#ddd;左右内边距：15px;字体:14px => 具体可更改`navbar`类样式
- 若定义导航栏标题，标题水平向左
- 缩小按钮水平向右，高：36px，左右内边距：10px  => 具体可更改`navbtn`类样式

*/

$(function(){
    var
        $navforjs = $('.navforjs'),
        $navbtn = $('.nav_btn'),
        $window = $(window);
    if ($window.width()<768) {
        $navforjs.addClass('navlist').removeClass('init-navlist');
    } else {
        $navforjs.removeClass('navlist').addClass('init-navlist');
    }
    $window.resize(function(){
            if ($window.width()<768) {
                $navforjs.addClass('navlist').removeClass('init-navlist').hide();
            } else {
                $navforjs.removeClass('navlist').addClass('init-navlist').show();
            }
    });
    $navbtn.click(function(){
        $navforjs.slideToggle();
    })
})