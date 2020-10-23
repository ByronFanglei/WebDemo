import Banner from './banner.jpg'
import './banner.scss'

console.log(Banner)

var img = new Image()
img.src = Banner
img.classList.add('banner')

var dom = document.getElementById('root')
dom.append(img)
