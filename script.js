var nav = document.querySelector("nav")

nav,addEventListener("mouseenter",function(){
    var tl =  gsap.timeline()

    tl,to("#nav-buttom",{
        height:"21vh"
    })
    

})