!function () {
    let view = View('#topNavBar')[0]
    // let view = document.querySelector('#topNavBar')

    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()

        },
        bindEvents: function () {
            (window.scrollY > 0) ? this.active(): this.unactive()
            window.addEventListener('scroll', () =>{
                (window.scrollY > 0) ? this.active(): this.unactive()
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        unactive: function () {
            this.view.classList.remove('sticky')
        }
    }

    controller.init.call(controller, view)

}.call()