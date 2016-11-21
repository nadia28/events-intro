var myButton = document.querySelector("#myButton")
var heading = document.querySelector("h1")
var toggle = null

function yell() {
  toggle = !toggle
  heading.innerText = toggle
}
function whisper() {
  myButton.innerText = "SHHHHHHHHH....."
}
myButton.addEventListener('click', yell)
heading.addEventListener('mouseover', whisper)


// myButton.addEventListener('click', function() {})
// anonimous function () { (to avoid bugs, these functions are not execcive)//
