const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025 ']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
	//Get random number
	const randNum = getRandNumber();
	document.body.style.backgroundColor = colors[randNum]
	color.textContent = colors[randNum]
	console.log(randNum)
})

function getRandNumber() {
	return Math.floor(Math.random() * colors.length) + 1
}
