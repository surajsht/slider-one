let sliderItem = document.querySelectorAll(".slider-item")
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")

sliderItem[0].classList.add("active")

let counter = 0

next.addEventListener("click", function () {
  counter++

  if (counter > sliderItem.length - 1) {
    counter = 0
  }

  toggleClass()
})

prev.addEventListener("click", function () {
  counter--

  if (counter < 0) {
    counter = sliderItem.length - 1
  }

  toggleClass()
})

function toggleClass() {
  sliderItem.forEach(function (item) {
    item.classList.remove("active")
  })

  sliderItem[counter].classList.add("active")
}
