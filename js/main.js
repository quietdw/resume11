setTimeout(function () {

    loadingContainer.classList.remove('active')
}, 0)

window.onscroll = function () {
    (window.scrollY > 0) ? topNavBar.classList.add('sticky'): topNavBar.classList.remove('sticky')
}

var topNavBarLi = document.querySelectorAll('.topNavBarInner>nav>ul>li')
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

var topNavBarLiA = document.querySelectorAll('.topNavBarInner>nav>ul>li>a')
for (let i = 0; i < topNavBarLi.length; i++) {
    topNavBarLi[i].onclick = function (e) {
        e.preventDefault()
        let oA = e.target
        let aHref = oA.getAttribute('href')
        let oTarget = document.querySelector(aHref)
        let scrollH = oTarget.offsetTop
        console.log(scrollH)
        window.scrollTo(0,scrollH-75)
        //window.document.scrollTop=scrollHeight + 'px'
    }
}
