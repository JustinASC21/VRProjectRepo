// ref to cones

// ref to cube 1
AFRAME.registerComponent("magic-sand", {
    init: function() {
        var sandBody = this.el;
        COLORS = [
            'red','gold','pink','orange','lightgreen'
        ]
        sandBody.addEventListener("click",function() {
            let cones = document.querySelectorAll("a-cone");
            for (let i = 0; i < cones.length; i ++) {

                cones[i].setAttribute("color",COLORS[Math.floor(Math.random()*COLORS.length)]);
            }
        })
    }
})