/**
 * Created by 顾 磊 on 2016/12/11.
 */
window.onload=function(){

    var iNow=0; //0代表本月
    function run(n){
        var oDate_list=document.getElementById('date_list');
        var oDate=new Date();
        //先舍得一次月份
        oDate.setMonth(oDate.getMonth()+n);
        //今天
        var today=oDate.getDate();
        //本月总天数
        var month=oDate.getMonth();
        oDate.setMonth(month+1,0);//把月份 调整到了下个月
        var allday=oDate.getDate(); //本月的最后一天
        //alert(allday);
        //本月第一天是星期几?
        oDate.setDate(1);//日期调整到本月的1日
        var week=oDate.getDay(); //得到本月第一天的星期几
        //alert(week)

        //星期日在前
        /*for(var i=0; i<week; i++){
         var li=document.createElement('li');
         oDate_list.appendChild(li);
         };*/

        // 星期日在后
        if(week==0){
            week=7;
        };
        //插入空(上个月的)
        date_list.innerHTML="";
        for(var i=1; i<week; i++){
            var li=document.createElement('li');
            oDate_list.appendChild(li);
        }

        //插入本月的所有天数
        for(var j=0; j<allday; j++){
            var li=document.createElement('li');
            li.innerHTML=j+1;
            oDate_list.appendChild(li);
        }
        //着色
        var aLi=oDate_list.children;

        if(n==0){  //本月
        }
        else if(n<0){//前月

        }else{


        }

        if(iNow<0){

            for(var k=0; k<aLi.length; k++){

                aLi[k].className="oldDay";

            }
        }
        else if(iNow==0){
            for(var k=0; k<aLi.length; k++){
                if(aLi[k].innerHTML<today){
                    aLi[k].className="oldDay";
                }
                else if(aLi[k].innerHTML==today){
                    aLi[k].className="toDay";
                }

            }
        }

        var dt = new Date();
        var m=new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var w=new Array("Monday","Tuseday","Wednesday","Thursday","Friday","Saturday","Sunday");
        var d=new Array("st","nd","rd","th");
        mn=dt.getMonth();
        wn=dt.getDay();
        dn=dt.getDate();
        var dns;
        if(((dn)<1) ||((dn)>3)){
            dns=d[3];
        }
        else
        {
            dns=d[(dn)-1];
            if((dn==11)||(dn==12)){
                dns=d[3];
            }
        }

        var t=document.getElementById('tit');
        t.innerHTML=(m[mn]);

    }
    run(iNow);
};