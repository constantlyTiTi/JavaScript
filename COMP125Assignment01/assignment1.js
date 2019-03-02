
// Men	    Metric	BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
//          Imperial	BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
// Women	Metric	BMR = 655.1 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )
//          Imperial	BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )

//#region function
function tabChange(id)
{
    var i=document.getElementById("ImperialCalculatorSpecific").style;
    var j=document.getElementById("metricCalculatorSpecific").style;
    var k=document.getElementById("activityFieldset").style;
    var bodyDivcolor=document.getElementById("bodyDiv");
    var n=document.getElementById("intakeDisplay").style;
    var metricTabColor=document.getElementById("metricTab");
    var imperialTabColor=document.getElementById("imperialTab");
    // var inputTag=document.getElementsByTagName("input");
    if (id=="metricTab")
    {
        metricPageShow(i,j,k,n);  
        bodyDivcolor.classList.add("colorMetric");
        bodyDivcolor.classList.remove("colorBisque");
        bodyDivcolor.classList.remove("colorImperial");
        metricTabColor.classList.add("colorMetric");
        metricTabColor.classList.remove("addTabAfterClickClassMetric");
        imperialTabColor.classList.remove("colorImperial");
        imperialTabColor.classList.add("addTabAfterClickClassImperial");
       
        document.getElementById("form").reset();
        document.getElementById("output").innerHTML=null;
        document.getElementById("intake").innerHTML=null;
        metricTab();      
    }
    else
    {
        imperailPageShow(i,j,k,n);  
        imperialTabColor.classList.add("colorImperial");
        metricTabColor.classList.remove("colorMetric");
        metricTabColor.classList.add("addTabAfterClickClassMetric");
        imperialTabColor.classList.remove("addTabAfterClickClassImperial");
        imperialTabColor.classList.remove("imperialTabClass");
        bodyDivcolor.classList.add("colorImperial");
        bodyDivcolor.classList.remove("colorMetric");
        bodyDivcolor.classList.remove("colorBisque");
        
        // bodyDivcolor.backgroundColor="rgb(250,250,210)";
        // imperialTabColor.backgroundColor="rgb(250,250,210)";
        document.getElementById("form").reset();
        document.getElementById("output").innerHTML=null;
        document.getElementById("intake").innerHTML=null;
        imperialTab();
              
    }
}
// function tabColorAdd(id)
// {
//     // var metricTabColor=document.getElementById("metricTab");
//     // var imperialTabColor=document.getElementById("imperialTab");
//     //imperialTabColor.classList.remove("addTabAfterClickClassImperial");
//     //metricTabColor.classList.remove("addTabAfterClickClassMetric");
//     document.getElementById(id).classList.add("addTabHoverClass");
//     // if (id=="imperialTab")
//     // {
//     //    if (metricTabColor.backgroundColor=="rgb(255,239,213)")
//     //    {
//         // imperialTabColor.classList.remove("addTabAfterClickClassImperial");
//     //    }
//     // }
//     // else
//     // {
//         // metricTabColor.classList.remove("addTabAfterClickClassMetric");
//     // }
    
// }
// function tabColorRemove(id)
// {
//     //var metricTabColor=document.getElementById("metricTab");
//    // var imperialTabColor=document.getElementById("imperialTab");
//     document.getElementById(id).classList.remove("addTabHoverClass");
//     //imperialTabColor.classList.remove("addTabAfterClickClassImperial");
//     //metricTabColor.classList.remove("addTabAfterClickClassMetric");
//     // if (id=="imperialTab")
//     // {
//     //    if (metricTabColor.backgroundColor=="rgb(255,239,213)")
//     //    {
//         // imperialTabColor.classList.add("addTabAfterClickClassImperial");
//     //    }
//     // }
//     // else
//     // {
//         // metricTabColor.classList.add("addTabAfterClickClassMetric");
//     // }
// }
function calculateCalerie()
{
    var age=Number(document.getElementById("age").value)+0;
    var sex=document.getElementById("sex").value;
    var bmr;
    var bmrFixed;
    var intakeValue;
    var heightMeter=Number(document.getElementById("heightMeter").value)+0;
    var heightCM=Number(document.getElementById("heightCM").value)+0;
    var weightKg=Number(document.getElementById("weightKg").value)+0;
    var heightFeet=Number(document.getElementById("heightFeet").value)+0;
    var heightInches=Number(document.getElementById("heightInches").value)+0;
    var weightStone=Number(document.getElementById("weightStone").value)+0;
    var weightPounds=Number(document.getElementById("weightPounds").value)+0;
    var intakeRatio=document.getElementsByTagName("input");
    var bodyColor=document.getElementById("bodyDiv").classList;
        if (bodyColor.contains("colorBisque")||bodyColor.contains("colorMetric"))
        {    
            bmr=metricCalculator(heightMeter,heightCM,weightKg,age,sex,bmr);

        }
        else
        {
            bmr=imperialCalculator(heightFeet,heightInches,weightPounds,weightStone,age,sex,bmr);
        }
        bmrFixed=bmr.toFixed(2);
        document.getElementById("output").innerHTML=bmrFixed;
        for (var i=0;i<intakeRatio.length;i++)
        {
            if (intakeRatio[i].name=="activity"&&intakeRatio[i].checked==true)
            {
                document.getElementById("intake").innerHTML=intakeResult(intakeRatio[i].id,intakeValue,bmrFixed).toFixed(2);
            }
        }
    return false;
}
//#endregion
//#region  method
function metricCalculator(heightMeter,heightCM,weightKg,age,sex,bmr)
{
    if(sex=="female")
    {
        bmr= 655.1+( 9.563*weightKg)+( 1.850*(heightMeter*100+heightCM))-( 4.676*age);
    }
    else
    {
        bmr = 66.5+( 13.75*weightKg)+( 5.003 *(heightMeter*100+heightCM))-( 6.755*age);
    }
    return bmr;
}
function imperialCalculator(heightFeet,heightInches,weightPounds,weightStone,age,sex,bmr)
{
    if(sex=="female")
    {
        bmr= 655.1+4.35*(weightStone*14+weightPounds)+4.7*(heightFeet*12+heightInches)-4.7*age;
    }
    else
    {
        bmr = 66+6.2* (weightStone*14+weightPounds)+12.7*(heightFeet*12+heightInches)-6.76* age;
    }
    return bmr;
}
function imperailPageShow(imperialDisplay,metricDisplay,activityDisplay,intakeDisplay)
{
    imperialDisplay.display="block";
    metricDisplay.display="none";
    activityDisplay.display="block";
    intakeDisplay.display="inline-block";
}
function metricPageShow(imperialDisplay,metricDisplay,activityDisplay,intakeDisplay)
{
    imperialDisplay.display="none";
    metricDisplay.display="block";
    activityDisplay.display="none"; 
    intakeDisplay.display="none";
}
function intakeResult(id,intakeValue,bmr)
{
    if (id=="sedentary"||id=="lightlyActive")
    {
        intakeValue=bmr*1.53;
    }
    else if(id=="moderatelyActive")
    {
        intakeValue=bmr*1.76;
    }
    else
    {
        intakeValue=2.25;
    }
    return intakeValue;
}
function metricTab()
{
    document.getElementById("heightMeter").required=true;
    document.getElementById("heightCM").required=true;
    document.getElementById("weightKg").required=true;
    document.getElementById("heightFeet").required=false;
    document.getElementById("heightInches").required=false;
    document.getElementById("weightStone").required=false;
    document.getElementById("weightPounds").required=false;
    document.getElementById("sedentary").required=false;
}
function imperialTab()
{
    document.getElementById("heightMeter").required=false;
    document.getElementById("heightCM").required=false;
    document.getElementById("weightKg").required=false;
    document.getElementById("heightFeet").required=true;
    document.getElementById("heightInches").required=true;
    document.getElementById("weightStone").required=true;
    document.getElementById("weightPounds").required=true;
    document.getElementById("sedentary").required=true;
}
//#endregion
