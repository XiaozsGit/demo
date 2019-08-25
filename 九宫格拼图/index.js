var canver = document.querySelector(".canver");
var arr = [];
var index = 1;
var flag = true;
for (var i = 0; i < 3; i++) {
  arr[i] = [];
  for (var j = 0; j < 3; j++) {
    arr[i][j] = 1;
  }
}
arr[2][2] = 0;

while (true) {
  var x = Math.floor(Math.random() * 8);

  if (canver.children[x].innerHTML == "") {
    canver.children[x].innerHTML = index;
    index++;
  }
  if (index == 9) {
    break;
  }
}

canver.addEventListener("click", function(e) {
  if (flag) {
    var left = e.target.offsetLeft;
    var top = e.target.offsetTop;
    var x = parseInt(e.target.dataset.x);
    var y = parseInt(e.target.dataset.y);
    flag = false;
    // 方块移动一步
    if (x >= 1 && arr[x - 1][y] == 0) {
      // 向上。
      top = top - 120;
      e.target.style.top = `${top}px`;
      arr[x - 1][y] = 1;
      arr[x][y] = 0;
      e.target.dataset.x = x - 1;
      // flag = false;
    } else if (y >= 1 && arr[x][y - 1] == 0) {
      // 向左
      left = left - 120;
      e.target.style.left = `${left}px`;
      arr[x][y - 1] = 1;
      arr[x][y] = 0;
      e.target.dataset.y = y - 1;
      // flag = false;
    } else if (x <= 1 && arr[x + 1][y] == 0) {
      // 向下
      top = top + 120;
      e.target.style.top = `${top}px`;
      arr[x + 1][y] = 1;
      arr[x][y] = 0;
      e.target.dataset.x = x + 1;
      // flag = false;
    } else if (y <= 1 && arr[x][y + 1] == 0) {
      // 向右
      left = left + 120;
      e.target.style.left = `${left}px`;
      arr[x][y + 1] = 1;
      arr[x][y] = 0;
      e.target.dataset.y = y + 1;
    }
    setTimeout(function() {
      flag = true;
      // 判断是否获胜
      if (arr[2][2] == 0 && end_index()) {
        console.log(1);
        alert("您获胜了！");
      }
    }, 300);
  }
});

// -------------------------------------------- 判断最终位置
function end_index() {
  var index_arr = [1, 2, 3, 4, 5, 6, 7, 8];
  var index = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (i == 2 && j == 2) {
        break;
      }
      try {
        if (
          index_arr[index] !==
          parseInt(
            document.querySelector(`div[data-x = "${i}"][data-y = "${j}"]`)
              .innerHTML
          )
        ) {
          return false;
        }
      } catch (error) {}
      index++;
    }
  }
  return true;
}
