var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
})

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border= "0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border= "0.5px solid #95c11e"
        crsr.style.backgroundColor="95c11e"
    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
        //markers:true
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top 25%",
        end: "top -70%",
        scrub:2

    }
})


gsap.from("#about-us img, #about-us-in", {
    y:90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})