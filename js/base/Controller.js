//  controller = Controller({
//     ...
// })
// controller.init(view,model)
window.Controller =function(options) {
    var init = options.init

    var object = {
        view: null,
        model:null,
        init: function (view,model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(this,view,model)//options的init，this是object。因遍历了options，所以object里也有option自带的属性
            this.bindEvents()
        },
        bindEvents: function () {},
    }

    for(key in options){
        if(key !=='init'){
            object[key] = options[key]
        }
    }// 将options上个性化的属性添加到object，并返回object

    return object
}