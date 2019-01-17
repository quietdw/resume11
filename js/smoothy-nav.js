! function () {
    let view = View('.topNavBarInner>nav>ul>li>a')

    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.initAnimate()
            for (let i = 0; i < 4; i++) {
                this.view[i].onclick = function (e) {
                    e.preventDefault()

                    let currentHeight = window.scrollY
                    let targetHeight = document.querySelector(e.target.getAttribute('href')).offsetTop - 125

                    let t = Math.abs((targetHeight - currentHeight) / 500)
                    t > 1 ? t = 1 : t
                    var coords = {
                        y: currentHeight
                    }
                    var tween = new TWEEN.Tween(coords)
                        .to({
                            y: targetHeight
                        }, t * 1000)
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .onUpdate(function () {
                            window.scrollTo(0, coords.y)
                        })
                        .start();
                }
            }
        },
        initAnimate: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        }
    }

    controller.init.call(controller, view)


}.call()