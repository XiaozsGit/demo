// ----------------------------- 准备工作
// 为每一个li新建一个自定义属性，其值为自身文本值，方便后面使用属性选择器
var box = document.querySelector("div.box");
var ul_length = box.children.length;

var li_innerText = "";
var li_clicked;

// 循环创建自定义属性
for (var i = 0; i < ul_length; i++) {
  for (var j = 0; j < box.children[i].children.length; j++) {
    // 对要设置的属性值进行一定的修饰
    li_innerText = box.children[i].children[j].innerText;
    // console.log(li_innerText.length);
    if (li_innerText.length == 1) {
      // 小写
      li_innerText = li_innerText.toLowerCase();

      //设置自定义属性值
      box.children[i].children[j].setAttribute("innerText", li_innerText);
      continue;
    }
    if (li_innerText == 'Ctrl') {
      //设置自定义属性值
      box.children[i].children[j].setAttribute("innerText", 'Control');
      continue;
    }
    //设置自定义属性值
    box.children[i].children[j].setAttribute("innerText", li_innerText);
    // console.log(box.children[i].children[j].getAttribute('innerText'));
    // console.log(li_innerText);
  }
}

document.onkeydown = function(e) {
  e.preventDefault();
  // console.dir(e);
  console.log(e.key);
  console.log(e.keyCode);
  // 进入 \
  switch (e.keyCode) {
    case 220:
      li_clicked = box.children[1].lastElementChild;
      li_clicked.classList.add("lighten");
      return;
    case 91:
      li_clicked = box.children[4].children[2];
      li_clicked.classList.add("lighten");
      return;
    case 32:
      li_clicked = box.children[4].children[4];
      li_clicked.classList.add("lighten");
      return;
  }
  // 进入右侧 shift
  if (e.code == 'ShiftRight') {
    li_clicked = box.children[3].lastElementChild;
    li_clicked.classList.add("lighten");
    return;
  }
  // 进入右侧 ctrl
  else if (e.code == 'ControlRight') {
    li_clicked = box.children[4].children[6];
    li_clicked.classList.add("lighten");
    return;
  }
  // 进入右侧 Alt
  else if (e.code == 'AltRight') {
    li_clicked = box.children[4].children[5];
    li_clicked.classList.add("lighten");
    return;
  }

  li_clicked = document.querySelector(`li[innerText = "${e.key}"]`);
  li_clicked.classList.add("lighten");
};





document.onkeyup = function(e) {
  
  // 进入 \
  switch (e.keyCode) {
    case 220:
      li_clicked = box.children[1].lastElementChild;
      li_clicked.classList.remove("lighten");
      return;
    case 91:
      li_clicked = box.children[4].children[2];
      li_clicked.classList.remove("lighten");
      return;
    case 32:
      li_clicked = box.children[4].children[4];
      li_clicked.classList.remove("lighten");
      return;
  }
  // 进入右侧 shift
  if (e.code == 'ShiftRight') {
    li_clicked = box.children[3].lastElementChild;
    li_clicked.classList.remove("lighten");
    return;
  }
  // 进入右侧 ctrl
  else if (e.code == 'ControlRight') {
    li_clicked = box.children[4].children[6];
    li_clicked.classList.remove("lighten");
    return;
  }
  // 进入右侧 Alt
  else if (e.code == 'AltRight') {
    li_clicked = box.children[4].children[5];
    li_clicked.classList.remove("lighten");
    return;
  }

  li_clicked = document.querySelector(`li[innerText = "${e.key}"]`);
  li_clicked.classList.remove("lighten");
};

