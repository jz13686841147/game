//准备工作 获取对象
var box= my$("box");
var screen=box;
var arr = my$('arr');
var ul = screen.children[0];
var ol = screen.children[1];
var arrLeft = arr.children[0];
var arrRight=arr.children[1];
//得到图片的宽度
var imgWidth = screen.offsetWidth;
//点击箭头的时候记录索引
var index = 0;
//6.1 记录序号的索引；
var olIndex = 0;
//记录有多少张图片--真实图片的个数
var count = ul.children.length;
//动态生成ol中的序号
for(var i=0;i<count;i++){
    //动态生成一个li
    var li = document.createElement("li");
    //把li追加到ol中
    ol.appendChild(li);
}
//设置第一个li被选中
ol.children[0].className="current";
//点击序号切换图片
//遍历每一个序号
for(var i = 0 ;i<ol.children.length;i++){
    li = ol.children[i];
    //记录li对应图片的索引
    li.index=i;
    //给li注册单机事件
    li.onclick=function(){
        //控制li的高亮显示
        for(var i = 0 ;i <ol.children.length;i++){
            li=ol.children[i];
            //移除类样式
            li.removeAttribute("class");
        }
        //设置当前li高亮显示
        this.className="current";
        //动画切换图片
        animate(ul,-this.index*imgWidth);
        //7点击序号的时候让索引同步
        index = olIndex=this.index;
    };

}
//点击箭头切换图片
//显示箭头
box.onmouseover=function(){
    arr.style.display="block";
    //鼠标放在box上停止自动播放的定时器
    clearInterval(timerId);
};
box.onmouseout=function(){
    arr.style.display="none";
    //鼠标离开box，开启定时器，继续自动播放
    timerId=setInterval(function(){
        arrRight.click();
    },2000);
};
arrRight.onclick=function(){
    //如果当前是最后一张图片(克隆的第一张图片), 让index = 0 并且偷偷设置ul切换到第一张图片
    if(index===count){
        index=0;
        ul.style.left="0px";
    }
    index++;
    animate(ul,-index*imgWidth);
    //6.2 切换到下一个序号
    if(olIndex<count-1){
        olIndex++;
    }else{
        olIndex=0;
    }
    //清除ol中所有li的高亮
    for(var i=0 ;i<ol.children.length;i++){
        li=ol.children[i];
        li.removeAttribute("class");
    }
    //让当前li高亮显示
    ol.children[olIndex].className="current";
};
arrLeft.onclick=function(){
    if(index===0){
        index=count;
        ul.style.left=-index*imgWidth+"px"
    }
    index--;
    animate(ul,-index*imgWidth);
    //6.3 切换到上一个序号
    if(olIndex>0){
        olIndex--
    }else{
        //如果是第一张吧序号切换成最后一张
        olIndex=count-1;
    }
};
//无缝滚动
//把第一张图片对应的li克隆，追加到ul的最后
var firstLi = ul.children[0];
var cloneli=firstLi.cloneNode(true);
//追加到ul的后面
ul.appendChild(cloneli);
// 自动播放
//开启定时器
var timerId=setInterval(function(){
    //切换下一张图片
    //相当于手动点击按钮
    arrRight.click();
},2000)
