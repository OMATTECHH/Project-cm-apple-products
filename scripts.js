const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item') 
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers') 
const list = document.querySelector('.list')

let timer;
let active = 0
const total = items.length

function update(direction) {
    items[active].classList.remove('active')
    dots[active].classList.remove('active')

    active += direction

    if (active < 0) {
        active = total - 1
    } else if (active >= total) {
        active = 0
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')
    numberIndicator.textContent = String(active + 1).padStart(2, '0')

}

clearInterval(timer);
timer = setInterval(() => {
    update(1)
}, 5000);

prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})
