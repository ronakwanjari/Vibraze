function navanimation() {
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let rl =  gsap.timeline()

    rl.to("#nav-bottom",{
        height:"23vh"
    })
    rl.to(".nav-part2 h5",{
        display:"block"
    })
    rl.from(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.6,
        }
    })
})

nav.addEventListener("mouseleave",function(){
     let rl =  gsap.timeline()
     rl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
     })
     rl.to(".nav-part h5",{
        display:"none",
        duration:0.1
     })
      rl.to("#nav-bottom ",{
        height:0,
        duration:0.2
     })
})
}
navanimation()
