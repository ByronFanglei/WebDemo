;(function(dom) {
  let imgdoms = dom.getElementsByClassName('item-img'),
      contentdom = dom.getElementsByClassName('content'),
      imgdom = dom.getElementsByTagName('img')
      imgdomsLen = imgdoms.length,
      _arrLen = [],
      space = 10,
      Allwidth = 1200,
      ItemNumber = 5



  const init = function() {
    contentdom[0].style.width = `${Allwidth}px`
    setImgPage()
  }

  const setImgPage = function() {
    const itemWidth = setWidth(Allwidth, ItemNumber, space)
    for(let i = 0; i < imgdomsLen; i++) {
      imgdoms[i].style.width = `${itemWidth}px`
      
      if (i < ItemNumber) {
        _arrLen.push(imgdoms[i].offsetHeight)
        imgdoms[i].style.top = `0px`

        if ((i + 1) % ItemNumber === 1) {
          imgdoms[i].style.left = `0px`
        } else {
          imgdoms[i].style.left = `${i * (itemWidth + space)}px`
        }
      } else {
        let minNum = Math.min(..._arrLen)
        let minIndex = _arrLen.findIndex(item => item === minNum)
        imgdoms[i].style.top = `${minNum + space}px`
        imgdoms[i].style.left = `${imgdoms[minIndex].offsetLeft}px`
        _arrLen[minIndex] = imgdoms[i].offsetHeight + minNum + space
      }
      imgdom[i].style.opacity = '1'
    }
  }
  /**
   * 计算单个图片的宽度
   * @param {number} Allwidth
   * @param {number} ItemNumber
   * @param {number} space
   * @returns {number}
   */
  const setWidth = function (Allwidth, ItemNumber, space) {
    const remain = Allwidth - ((parseInt(ItemNumber) - 1) * space)
    const itemWidth = ~~(remain / ItemNumber)
    return itemWidth
  }

  window.onload = function() {
    init()
  }

})(document)