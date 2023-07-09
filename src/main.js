document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
})
// Set the date we're counting down to
var countDownDate = new Date('Jul 19, 2023 15:37:25').getTime()
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  if (days < 10) {
    days = '0' + days
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  // Display the result in the element with id="demo"
  document.getElementById('countdown').innerHTML = `<ul>
  <li>${days}</li>:
  <li>${hours}</li>:
  <li>${minutes}</li>:
  <li>${seconds}</li>
</ul>
`

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById('countdown').innerHTML = 'EXPIRED'
  }
}, 1000)

// Parte do modal
const btn_1 = document.querySelector('#btn_1')
const btn_2 = document.querySelector('#btn_2')
const form = document.querySelector('#form_subscribe')
const full = document.querySelector('.full')
btn_1.addEventListener('click', () => {
  form.classList.add('form_active')
  full.classList.add('active')
})

btn_2.addEventListener('submit', () => {
  form.classList.remove('form_active')
  full.classList.remove('active')
})

full.addEventListener('click', () => {
  form.classList.toggle('form_active')
  full.classList.remove('active')
})


