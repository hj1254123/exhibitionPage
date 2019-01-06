var navScrollBackground = function() {
    var nav = document.querySelector('nav')
    window.addEventListener('scroll', function() {
        var top = document.documentElement.scrollTop
        if (top > 0) {
            nav.classList.add('nav-style')
        } else {
            nav.classList.remove('nav-style')

        }
    })

}

var clickShowUl = function() {
    // 1.获取
    var but = e('#clickButton')
    var ul = e('#clickShow')
    var shade = document.querySelector('.shade')
    var close = e('.close')
    // 2.绑定点击事件
    bindEvent(but, 'click', function() {
        console.log('?');
        toggleClass(ul, 'show')
        toggleClass(shade, 'shadeShow')
    })
    bindEvent(close, 'click', function() {
        toggleClass(ul, 'show')
        toggleClass(shade, 'shadeShow')
    })
    bindEvent(shade, 'click', function() {
        toggleClass(ul, 'show')
        toggleClass(shade, 'shadeShow')
    })
}

//
// 主函数
var __main = function() {
    // 页面滚动改变导航栏样式
    navScrollBackground()
    // 屏幕小于768px时，点击显示/隐藏ul(导航栏)
    clickShowUl()
}

__main()
