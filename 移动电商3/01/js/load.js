
var content = document.getElementById('content');
console.dir(content.children);
var load = content.children[0];
var logon = content.children[1];
var content_load = content.children[2];
var content_logon = content.children[3];

console.log(load.className);

// 添加登陆按钮点击事件
load.onclick = function () {
  // console.log(this.className);
  logon.className = "logon";
  load.className = "load2";
  // console.log(this.className);
  content_load.style.display = 'block';
  content_logon.style.display = 'none';
  content.classList.add('content2');
}
logon.onclick = function () {
  // console.log(this.className);
  load.className = "load";
  logon.className = "logon2";
  // console.log(this.className);
  content_logon.style.display = 'block';
  content_load.style.display = 'none';
  content.classList.remove('content2');

}