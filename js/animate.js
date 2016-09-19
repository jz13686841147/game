/**
 * Created by Administrator on 2016/6/17.
 */
//功能：让某个元素实现动画
function animate(element, target) {
    //清除上一次创建的定时器
    if(element.timerId) {
        clearInterval(element.timerId);
    }
    //每次改变的值
    var step = 10;
    //开启定时器
    element.timerId = setInterval(function () {
        //获取当前的位置
        var current = element.offsetLeft;

        //当前位置 <  目标位置  + step
        //当前位置 > 目标位置   -step
        if(current > target) {
            step = - Math.abs(step);
        }
        //
        // Math.abs(current - target)    step


        //current 800   target 400
        //-10

        // current 790
        //step = -10


        //判断当前值是否小于目标值
//                if(current < target) {
        if(Math.abs(current - target) > Math.abs(step)) {
            current += step;
            element.style.left = current + "px";
        }else{
            //清除定期器，切换到目标位置
            clearInterval(element.timerId);
            element.style.left = target + "px";
        }
    }, 5);
}