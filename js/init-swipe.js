!function () {

    let view = View('#slide-container')[0]

    let controller = {
        view: null,
        mySwiper: null,
        swiperOptions: {
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            scrollbar: {
                el: '.swiper-scrollbar',
            },
        },
        init: function (view) {
            this.view = view
            this.initSlide()
        },
        initSlide: function () {
            this.mySwiper = new Swiper(this.view.querySelector('.swiper-container'),this.swiperOptions )
        },
    }

    controller.init.call(controller, view)

}.call()