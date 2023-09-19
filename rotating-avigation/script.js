const menuOpenButton = document.getElementById('open')
const menuCloseButton = document.getElementById('close')

document.addEventListener('DOMContentLoaded', () => {
  menuEventLoader()
})

const menuEventLoader = () => {
  menuOpenButton.addEventListener('click', () => {
    document.getElementsByClassName('container')[0].classList.add('active')
  })
  menuCloseButton.addEventListener('click', () => {
    document
      .getElementsByClassName('container active')[0]
      .classList.remove('active')
  })
}
