/**
 * Created by Administrator on 2016/6/17.
 */
//���ܣ���ĳ��Ԫ��ʵ�ֶ���
function animate(element, target) {
    //�����һ�δ����Ķ�ʱ��
    if(element.timerId) {
        clearInterval(element.timerId);
    }
    //ÿ�θı��ֵ
    var step = 10;
    //������ʱ��
    element.timerId = setInterval(function () {
        //��ȡ��ǰ��λ��
        var current = element.offsetLeft;

        //��ǰλ�� <  Ŀ��λ��  + step
        //��ǰλ�� > Ŀ��λ��   -step
        if(current > target) {
            step = - Math.abs(step);
        }
        //
        // Math.abs(current - target)    step


        //current 800   target 400
        //-10

        // current 790
        //step = -10


        //�жϵ�ǰֵ�Ƿ�С��Ŀ��ֵ
//                if(current < target) {
        if(Math.abs(current - target) > Math.abs(step)) {
            current += step;
            element.style.left = current + "px";
        }else{
            //������������л���Ŀ��λ��
            clearInterval(element.timerId);
            element.style.left = target + "px";
        }
    }, 5);
}