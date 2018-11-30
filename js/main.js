setTimeout(function(){
  
    loadingContainer.classList.remove('active')
  },2000)

window.onscroll = function(){
    (window.scrollY>0)?topNavBar.classList.add('sticky'):topNavBar.classList.remove('sticky')
}

var topNavBarLi = document.querySelectorAll('.topNavBarInner>nav>ul>li')
for(let i=0;i<topNavBarLi.length;i++){
    topNavBarLi[i].onmouseenter=function(e){
        
        var oLi=e.target
        oLi.classList.add('active')
        // var brother = topNavBarLi[i].nextSibling
        // while(topNavBarLi[i].nextSibling!='UL'){
        //     brother = brother.nextSibling
        //     console.log(brother)
        // }
       
    }
    topNavBarLi[i].onmouseleave=function(e){
        
        var oLi=e.target
        oLi.classList.remove('active')
        // var brother = topNavBarLi[i].nextSibling
        // while(topNavBarLi[i].nextSibling!='UL'){
        //     brother = brother.nextSibling
        //     console.log(brother)
        // }
       
    }
}
