var nav = document.getElementById('nav');
var nav_1 = nav.children[0];
var nav_2 = nav.children[1];
var nav_3 = nav.children[2];
var arr = [nav_1, nav_2, nav_3];


// 事件委托 将a的点击事件全部委托给nav 
nav.onclick = function (event) {

  // 判断事件源  是 a 标签 或者是 a 标签的子元素 span 标签
  if (event.target == nav_1 || event.target == nav_1.children[0]) {
    // 移除所有 a 标签里 span 的类名 lighten
    forname(arr, 'lighten');
    // 为 span 标签添加类 lighten
    nav_1.children[0].classList.add('lighten');

  } else if (event.target == nav_2 || event.target == nav_2.children[0]) {
    
    forname(arr, 'lighten');
    nav_2.children[0].classList.add('lighten');
  
  } else if (event.target == nav_3 || event.target == nav_3.children[0]) {
  
    forname(arr, 'lighten');
    nav_3.children[0].classList.add('lighten');
  
  }
}

// 定义一个用于循环遍历数组对象并且去除其  calssname 类名的方法
var forname = function (element, classname) {
  for (var i = 0; i < element.length; i++) {
    element[i].children[0].classList.remove(classname);
  }
}