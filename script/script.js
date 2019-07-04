const cursor = document.querySelector('.cursor');
const hoverLinks = document.querySelectorAll('a');
    
    

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px;")
    })
    
    for(let i=0; i<hoverLinks; i++){
        hoverLinks[i].addEventListener('mouseover', function() {
    cursor.style.width=0+'px'
    })
    }

    var t1 = new TimelineMax({paused : true});

            t1.to(".block", 1.2, {
                  width: "25%",
                  ease: Power4.easeInOut
            });

            t1.staggerFrom(".menu ul li", 0.8, {y: 40, opacity: 0, ease: Power2.easeOut}, 0.2);

            t1.reverse();
            $(document).on("click", ".menu-btn", function() {
                  t1.reversed(!t1.reversed());
                  document.querySelector('.menu-overlay').classList.toggle('.is-hidden')
            });

            
    