!function () {
    let view = View('.topNavBarInner>nav>ul>li')

    let controller = {
        view:null,
        aTargs:null,
        init:function(view){
            this.view = view
            this.aTargs = document.querySelectorAll('.topNavBarInner>nav>ul>li>a')
            this.initATargs()
            this.setDelay()
            this.bindEvent()
        },
        initATargs:function(){
            for (let i = 0; i < 3; i++) {
                let id = this.aTargs[i].getAttribute('href')
                document.querySelector(id).classList.add('slideUp')
            }
        },
        findAndRemoveOffset:function(){
                var minIndex = 0
                for (let i = 0; i < 3; i++) {
                    let id = this.aTargs[i].getAttribute('href')
                    if (Math.abs(window.scrollY - document.querySelector(id).offsetTop) < Math.abs(window.scrollY - document.querySelector(this.aTargs[minIndex].getAttribute('href')).offsetTop)) {
                        minIndex = i
                    }
                }
        
                for (let j = 0; j < this.view.length; j++) {
                    this.view[j].classList.remove('highLight')
                }
        
                this.view[minIndex].classList.add('highLight')
        
                document.querySelector(this.aTargs[minIndex].getAttribute('href')).classList.remove('slideUp')
        },
        setDelay:function(){
            setTimeout(()=>{
                document.querySelector(this.aTargs[0].getAttribute('href')).classList.remove('slideUp')
            }, 0)
        },
        bindEvent:function(){
            window.addEventListener('scroll',()=>{
                this.findAndRemoveOffset()
            })
        }
    }

    controller.init.call(controller,view)

}.call()