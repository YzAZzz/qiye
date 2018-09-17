/*
* @Author: Administrator
* @Date:   2018-05-08 14:05:35
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-16 18:45:46
*/
window.onload = function(){
    let aa = document.querySelector(".neirong .boxlist")
    let bb = document.querySelectorAll(".neirong .boxlist img")
    let index = 0
    let next = 0
    let widths = parseInt(getComputedStyle(aa,null).width)
    let dot = document.querySelectorAll('.neirong .top .box .yuan')
    let box = document.querySelectorAll('.neirong .top .box')
    console.log(dot);

    setInterval(move,2000)
    for (i=0;i<box.length;i++){
        box[i].onclick=function () {
            for (j=0;j<dot.length;j++){
                dot[j].classList.toggle='hots'
            }
        }
    }
    function move(){
        next++
        if (next === bb.length) {
            next = 0
        }



        bb[next].style.left = widths + "px"
        animate(bb[index],{left:-widths})
        animate(bb[next],{left:0})

        index = next
    }

}