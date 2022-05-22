const activeButton = document.querySelector('.active')
const openWindow = document.querySelector('.window')
// When this variable is equal to true, it won't accept the event listener of the window
let notPressed = true

// When this event happens the elements of the page will change
activeButton.addEventListener('click', () => {
  notPressed = false
  activeButton.classList.toggle('light-off')
  openWindow.classList.add('window-on')
  document.body.classList.toggle('background-off')
  document.body.firstElementChild.textContent = "Turn on the light"
})


// When this event happens the elements of the page will return to the original style
window.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !notPressed) {
    activeButton.classList.toggle('light-off')
    openWindow.classList.remove('window-on')
    document.body.classList.remove('background-off')
    document.body.firstElementChild.textContent = "Turn off the light"
  }
})
