/* 
参数：
obj:执行动画化对象
attr:执行动画样式，left,top,width,height
target:执行动画目标位置
speed:移动的速度（正数向右，负数向左）
callback:回调函数
*/
function move(obj, attr, target, speed, callback) {
  //关闭定时器
  clearInterval(obj.timer);
  // 获取元素目前位置
  var current = parseInt(getStyle(obj, attr));
  //判断正负值
  if (current > target) {
    speed = -speed
  }
  //开启定时器,向对象中添加一个timer属性，保证唯一性
  obj.timer = setInterval(function () {
    var oldValue = parseInt(getStyle(obj, attr));
    var newValue = oldValue + speed;
    //向左移动，判断newValue是否小于target
    //向右移动，判断newValue是否大于target
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target
    }
    //将新值给obj
    obj.style[attr] = newValue + 'px';
    //元素到达target，停止执行动画
    if (newValue == target) {
      clearInterval(obj.timer)
      //回调函数判断
      callback && callback()
    }
  }, 30)
}
function getStyle(obj, name) {
  if (window.getComputedStyle) {
    return getComputedStyle(obj, null)[name];
  } else {
    return obj.currentStyle[name]
  }
}

// css类的操作
function addClass(obj, cn) {
  if (!hasClass(obj, cn)) {
    obj.className += " " + cn
  }
}
function hasClass(obj, cn) {
  var reg = new RegExp("\\b" + cn + "\\b")
  return reg.test(obj.className)
}
function removeClass(obj, cn) {
  var reg = new RegExp("\\b" + cn + "\\b")
  obj.className = obj.className.replace(reg, "").replace(/\s+/g, "")
}
function toggleClass(obj, cn) {
  if (hasClass(obj, cn)) {
    removeClass(obj, cn)
  } else {
    addClass(obj, cn)
  }
}


