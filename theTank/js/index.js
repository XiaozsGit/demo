var box = document.getElementById('box');
var tank = document.getElementById('tank');
// 设置 tank 的初始方向 0 上 1 右 2 下 3 左
tank.direction = 0; 
document.onkeydown = function (e) {
    // 鼠标按下事件
    if (e.keyCode == 87) {
        // 按下w键时
        tankMove();
        tank.direction = 0;
        tankDirection(tank.direction);
        tankMove();
    } else if (e.keyCode == 68) {
        // 按下d键时
        tank.direction = 1;
        tankDirection(tank.direction);
        tankMove();
    } else if (e.keyCode == 83) {
        // 按下s键时
        tank.direction = 2;
        tankDirection(tank.direction);
        tankMove();
    } else if (e.keyCode == 65) {
        // 按下a键时
        tank.direction = 3;
        tankDirection(tank.direction);
        tankMove();
    };
};

// tank 事件 注意两个 transform 的层叠
// tank 移动
var tankMove = function() {
    var step = 50;
    var index =  tank;
    // tank.style.transform = 'translateX(' + step * tank.direction + 'px)';
    console.dir(tank);
}
// tank 改变方向
var tankDirection = function (direction) {
    tank.style.transform = 'rotateZ(' + 90 * tank.direction + 'deg)';
}