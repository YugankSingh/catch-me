var inner = document.getElementById("inner")
var outer = document.getElementById("outer")
var divLeft = Math.random() * (window.innerWidth - outer.clientWidth)
var divTop = Math.random() * (window.innerHeight - outer.clientHeight)
var difficulty = 20
let didWeLost = false
outer.style.top = divTop + "px"
outer.style.left = divLeft + "px"

function getClientHeight() {
	ans = outer.clientHeight
	while (!ans) {
		ans = outer.clientHeight
	}
	return ans
}

function moveIt() {
	if (didWeLost) return
	console.log("moveIt")

	var tempDivLeft
	var tempdivTop

	let repeatCounter = 0
	do {
		tempDivLeft = Math.random() * (window.innerWidth - outer.clientHeight)
		tempdivTop = Math.random() * (window.innerHeight - outer.clientHeight)
		if (repeatCounter == 99) {
			console.log(tempDivLeft)
			console.log(tempdivTop)
			console.log(outer.clientHeight)
		}
		repeatCounter++
	} while (repeatCounter > 10000 && shouldRepeat(tempDivLeft, tempdivTop))
	changeColor()
	divLeft = tempDivLeft
	divTop = tempdivTop
	outer.style.top = divTop + "px"
	outer.style.left = divLeft + "px"
}

function weLost() {
	console.log("Lost")
	didWeLost = true
	outer.style.display = "none"
	chnageBackground()
	document.querySelector("#won").style.display = "flex"
	document
		.querySelector("body")
		.style.setProperty("--difficulty", `${difficulty}px`)
	outer.style.top = 0 + "px"
	outer.style.left = 0 + "px"
}
function restart() {
	console.log("restart")
	didWeLost = false
	changeColor()
	document.querySelector("body").style.background = "unset"
	outer.style.display = "initial"
	document.querySelector("#won").style.display = "none"
	difficulty += 5
	document
		.querySelector("body")
		.style.setProperty("--difficulty", `${difficulty}px`)
}
function shouldRepeat(left, top) {
	console.log("repeat")
	let divHeight = outer.clientHeight
	let divWidth = outer.clientWidth
	if (left > divLeft - divWidth && left < divLeft + divWidth) return true
	if (top > divTop - divHeight && top < divTop + divHeight) return true
	return false
}

var colors = [
	"#ff0000",
	"#00ff00",
	"#0000ff",
	"#ff3333",
	"#ffff00",
	"#ff6600",
	"#e6194b",
	"#3cb44b",
	"#ffe119",
	"#4363d8",
	"#f58231",
	"#911eb4",
	"#46f0f0",
	"#f032e6",
	"#bcf60c",
	"#fabebe",
	"#008080",
	"#e6beff",
	"#9a6324",
	"#fffac8",
	"#800000",
	"#aaffc3",
	"#808000",
	"#ffd8b1",
	"#000075",
	"#808080",
	"#ffffff",
	"#000000",
]

function changeColor() {
	// Array containing colors
	// selecting random color
	var random_color = colors[Math.floor(Math.random() * colors.length)]

	var x = document.querySelector("body")
	x.style.backgroundColor = random_color
}

let backgrounds = [
	"https://media2.giphy.com/media/cOtvwSHKaFK3Ul1VVu/200.gif",
	'https://media2.giphy.com/media/SABpzb2ivrS0g4Hgbb/200.gif',
	'https://media.tenor.com/images/d984fe32cf359cd1dbb291c539c42b57/tenor.gif',
	'https://media4.giphy.com/media/Y3qaJQjDcbJPyK7kGk/200.gif',
	'https://media.tenor.com/images/104994a187ee353fe46f8caa46df2634/tenor.gif',
	'https://i.gifer.com/23R2.gif',
]
function chnageBackground() {
	var random_bg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
	let bodyStyle = document.querySelector("body").style
	bodyStyle.background = `url(${random_bg})`

	bodyStyle.backgroundPosition = "center"
	bodyStyle.backgroundRepeat = "no-repeat"
	bodyStyle.backgroundSize = "cover"
}
