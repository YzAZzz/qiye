/*
* @Author: Administrator
* @Date:   2018-05-09 18:48:14
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-10 08:52:03
*/
window.onload = function(){
	let list = document.querySelectorAll(".bottom1 .hidden .Bbox .boxlist")
	let hid = document.querySelector(".bottom1 .hidden")
	let bbox = document.querySelector('.bottom1.hidden .Bbox')
	let next = 0;
	let index = 0
    let widths = parseInt(getComputedStyle(bbox,null).width)
	let dotleft = document.querySelector(".kuang .banner .bottom1 .box")
		setInterval(move,1000)
	function move() {
		next++
        list[next].style.left = widths + "px"
        animate(list[index],{left:-widths})
        animate(list[next],{left:0})
        index = next
    }
}