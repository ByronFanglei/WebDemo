import Banner from './banner.jpg'
import style from'./banner.scss'

function createAvatar() {
  var img = new Image()
  img.src = Banner
  img.classList.add(style.banner)

  var dom = document.getElementById('root')
  dom.append(img)
}

export default createAvatar
