!function(){
    let view = View('.portfolioContainer')[0]

    let controller = {
        view:null,
        init:function(view){
            this.view = view;
            this.portfolioItems = this.view.querySelectorAll('.portfolioItem')
            this.bindEvent()
        },
        bindEvent:function(){
            this.portfolioItems.forEach((value,key) => {
                value.addEventListener('mouseenter',(e)=>{
                    this.showportfolioInfo(e.currentTarget.querySelector('.portfolioInfo'))
                  
                })
                value.addEventListener('mouseleave',(e)=>{
                    this.hideportfolioInfo( e.currentTarget.querySelector('.portfolioInfo'))                
                })
            });
        },
        showportfolioInfo:function(selector){
            selector.classList.add('active')
        },
        hideportfolioInfo:function(selector){
            selector.classList.remove('active')
        },
    }

    controller.init.call(controller,view)
}.call()