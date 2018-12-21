!function () {
    let view = document.querySelectorAll('.topNavBarInner>nav>ul>li')

    var controller = {
        view:null,
        init:function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents:function(){
            let view = this.view
            for (let i = 0; i < view.length; i++) {
                view[i].onmouseenter = function (e) {
                    let oLi = e.target
                    oLi.classList.add('active')
                }
                view[i].onmouseleave = function (e) {
                    let oLi = e.target
                    oLi.classList.remove('active')
                }
            }
        },

    }
    

    controller.init.call(controller,view)
}.call()