!function () {
    let view = View('#topNavBar')[0]
    // let view = document.querySelector('#topNavBar')

    let controller = {
        view: null,
        menuBtn: null,
        smallSizeNav:null,
        clickflag:true,
        init: function (view) {
            this.view = view
            this.menuBtn = this.view.querySelector('.menuBtn')
            this.smallSizeNav = this.view.querySelector('.smallSize')
            this.bindEvents()
            
        },
        bindEvents: function () {
            (window.scrollY > 0) ? this.active(): this.unactive()
            window.addEventListener('scroll', () =>{
                (window.scrollY > 0) ? this.active(): this.unactive()
            })
            this.menuBtn.addEventListener('click',()=>{
                if(this.clickflag){
                    this.showSmallSizeNav()
                    this.clickflag = !this.clickflag
                }else{
                    this.hideSmallSizeNav()
                    this.clickflag = !this.clickflag
                }
            })
            
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        unactive: function () {
            this.view.classList.remove('sticky')
        },
        showSmallSizeNav:function(){
            this.smallSizeNav.classList.add('active')
        },
        hideSmallSizeNav:function(){
            this.smallSizeNav.classList.remove('active')
        }
    }

    controller.init.call(controller, view)

}.call()