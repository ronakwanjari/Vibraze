var nav = document.querySelector("nav")

nav.addEventListener("mouseenter" ,function(){
     var tl= gsap.timline()

    tl.to("nav-bottom",{
        height:"21vh"
     })
     tl.to("nav-part2 h5",{
        display:"block"
     })
})

