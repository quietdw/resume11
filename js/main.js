setTimeout(function () {

    loadingContainer.classList.remove('active')
}, 2000)

var topNavBarLi = document.querySelectorAll('.topNavBarInner>nav>ul>li')
var topNavBarLiA = document.querySelectorAll('.topNavBarInner>nav>ul>li>a')

for(let i=0;i<3;i++){
    let id = topNavBarLiA[i].getAttribute('href')
    document.querySelector(id).classList.add('slideUp')
}
setTimeout(function () {

    document.querySelector(topNavBarLiA[0].getAttribute('href')).classList.remove('slideUp')
}, 2001)

window.onscroll = function () {
    // var windowHeight = window.scrollY
    (window.scrollY > 0) ? topNavBar.classList.add('sticky'): topNavBar.classList.remove('sticky')

    var minIndex = 0
    for(let i=0;i<3;i++){
        let id = topNavBarLiA[i].getAttribute('href')
        if(Math.abs(window.scrollY-document.querySelector(id).offsetTop) < Math.abs(window.scrollY-document.querySelector(topNavBarLiA[minIndex].getAttribute('href')).offsetTop)){
            minIndex = i
        }
    }

    for(let j=0;j<topNavBarLi.length;j++){
        topNavBarLi[j].classList.remove('highLight')
    }

    topNavBarLi[minIndex].classList.add('highLight')

    document.querySelector(topNavBarLiA[minIndex].getAttribute('href')).classList.remove('slideUp')

}

for (let i = 0; i < topNavBarLi.length; i++) {
    topNavBarLi[i].onmouseenter = function (e) {
        let oLi = e.target
        oLi.classList.add('active')
    }
    topNavBarLi[i].onmouseleave = function (e) {
        let oLi = e.target
        oLi.classList.remove('active')
    }
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < topNavBarLiA.length; i++) {
    topNavBarLiA[i].onclick = function (e) {
        e.preventDefault()

        let currentHeight = window.scrollY
        let targetHeight = document.querySelector(e.target.getAttribute('href')).offsetTop
        let t = Math.abs((targetHeight-currentHeight)/500)
        t>2?t=2:t

        var coords = { y: currentHeight }
        var tween = new TWEEN.Tween(coords) 
        .to({ y: targetHeight}, t*1000) 
        .easing(TWEEN.Easing.Quadratic.Out) 
        .onUpdate(function() { 
            window.scrollTo(0,coords.y-75)
        })
        .start(); 
    }
}
