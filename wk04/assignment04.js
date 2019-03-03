//img1 link: https://www.chinadiscovery.com/sichuan/jiuzhaigou/jiuzhaigou-valley.html
//img2 link: https://en.jiuzhai.com/nature/wildlife
//img3 link: https://en.jiuzhai.com/index.php/about/six-wonders/85-forests
//img4 link: https://en.jiuzhai.com/index.php/about/six-wonders/81-tibetan-culture
//img5 link: https://www.chinadiscovery.com/chengdu-tours/6-days-jiuzhaigou-chengdu-tour.html
let slideIndex=1;
let imageArray=document.getElementsByClassName("cImagSpan");
var windowObjectReference = null; 

function addEventAddFav()
{
    let addBelowClick=document.getElementsByClassName("cImagSpanBelow");
    let getCanvasNodes=document.getElementsByTagName("canvas");
    let getCanvasSpanNodes=document.getElementsByClassName("cImagShowClass");

    for (let i=0;i<imageArray.length;i++)
    {
        let belowImgClickId=addBelowClick[i].getAttribute("id");
        let getCanvasId=getCanvasNodes[i].getAttribute("id");
        let getCanvasSpanId=getCanvasSpanNodes[i].getAttribute("id");
        if (window.addEventListener)
        {
            addBelowClick[i].addEventListener("click",function foo(){belowImgClick(belowImgClickId)});
        }
        else if(window.attachEvent)
        {
            addBelowClick[i].attachEvent("click",function foo(){belowImgClick(belowImgClickId)});
        }
        imageArray[i].classList.add("addOnloadDislay");
        drawHeart(getCanvasId);
        HeartDisplayOnload(getCanvasSpanId);
        // heartDisplayOnHover();
        
    }
    onloadImgShow();
    midAddFev();
    
}

function imageDisplayClick(num)
{
    
    slideIndex+=num;
    if (slideIndex > imageArray.length)
    {
        slideIndex=1;
        SlideIndexPerious=imageArray.length;
    }
    if (slideIndex<1)
    {
        slideIndex=imageArray.length;
        SlideIndexPerious=1;
    }
    // imageDisplayloop(slideIndex);
    midAddFevFunctionRemove();
    belowOpChangeWithAbove(slideIndex);
    backImgDisplayMove(slideIndex);
    midAddFev();
}
function addImgFav()
{
    let idGet=getMidNode().id;
    let item=document.getElementById(idGet);
    let favBan=document.getElementById("favImgBan");
    let copyNode=item.cloneNode(true);
   // let FavBanChildNode=favBan.children;
   // let FavNodeNum=favBan.childElementCount;
    if (favBan.childElementCount>4)
    {
        window.alert("Your favourite images are more than 5, please delete one")
    }
    else
    {
        copyNode.id=idGet+"-copy";
        copyNode.classList.remove("cImagSpan");
        copyNode.classList.add("addFavSpanClass");
        copyNode.classList.remove("addOnloadStyleZDexTwo");
        let checkResult=checkDuplication(favBan,copyNode);
        addFunctionToSingle(checkResult,copyNode,favBan);

        let ZDexTwoElements=document.getElementsByClassName("addOnloadStyleZDexTwo");
        let ParentNodeId=ZDexTwoElements[0].getAttribute("id");
        let ParentNode=document.getElementById(ParentNodeId);
        let childNodeList=ParentNode.querySelector("canvas");
        let canvasNodeId=childNodeList.getAttribute("id");
        fillHeart(canvasNodeId);
    }


}
function removeImgFav(id)
{
    let nodeChild=document.getElementById(id);
    let nodePar=document.getElementById("favImgBan");
    nodePar.removeChild(nodeChild);
    let childNodeIdArray=id.split("-");
    let canvasId=childNodeIdArray[0]+"-canvas";
    removeFillHeart(canvasId);

}
function belowImgClick(id)
{
    belowOpacityChange(id);
    belowChangeAbove(id);
}

//#region method
function belowOpacityChange(id)
{
    let itemSpan=document.getElementById(id);
    let itemSpanArray=document.getElementsByClassName("cImagSpanBelow");
    for (let i=0;i<itemSpanArray.length;i++)
    {
        if (itemSpanArray[i].classList.contains("addImgOpacityLightClickClass")==true)
        {
            itemSpanArray[i].classList.remove("addImgOpacityLightClickClass");
        }
    }
    itemSpan.classList.add("addImgOpacityLightClickClass");
}
function belowChangeAbove(id)
{
    if (id=="cImag1-Below")
    {
        slideIndex=1;
    }
    else if (id=="cImag2-Below")
    {
        slideIndex=2;
    }
    else if (id=="cImag3-Below")
    {
        slideIndex=3;
    }
    else if (id=="cImag4-Below")
    {
        slideIndex=4;
    }
    else if (id=="cImag5-Below")
    {
        slideIndex=5;
    }
    else if (id=="cImag6-Below")
    {
        slideIndex=6;
    }
    backImgDisplayMove(slideIndex);
    addFavandShowHert();
    
}
function belowOpChangeWithAbove(slideIndex)
{
    let idBelowGet="cImag"+slideIndex+"-Below";
    belowOpacityChange(idBelowGet);
}
function backImgDisplayMove(slideIndex)
{
    for (let i=0;i<imageArray.length;i++)
    {

            imageArray[i].classList.add("addOnloadDislay");
            imageArray[i].classList.remove("addOnloadStyleZDexTwo");
            imageArray[i].classList.remove("addOnloadStyleZDexOneLeft");
            imageArray[i].classList.remove("addOnloadStyleZDexOneRight");
    }

    if (slideIndex>1&&slideIndex<6)
    {
        imageArray[slideIndex-1].classList.add("addOnloadStyleZDexTwo");
        imageArray[slideIndex-2].classList.add("addOnloadStyleZDexOneLeft");
        imageArray[slideIndex].classList.add("addOnloadStyleZDexOneRight");
        imageArray[slideIndex-1].classList.remove("addOnloadDislay");
        imageArray[slideIndex-2].classList.remove("addOnloadDislay");
        imageArray[slideIndex].classList.remove("addOnloadDislay");
    }
    else if (slideIndex==6)
    {
        imageArray[slideIndex-1].classList.add("addOnloadStyleZDexTwo");
        imageArray[slideIndex-2].classList.add("addOnloadStyleZDexOneLeft");
        imageArray[0].classList.add("addOnloadStyleZDexOneRight"); 
        imageArray[slideIndex-1].classList.remove("addOnloadDislay");
        imageArray[slideIndex-2].classList.remove("addOnloadDislay");
        imageArray[0].classList.remove("addOnloadDislay");
    }
    else
    {
        imageArray[slideIndex-1].classList.add("addOnloadStyleZDexTwo");
        imageArray[5].classList.add("addOnloadStyleZDexOneLeft");
        imageArray[slideIndex].classList.add("addOnloadStyleZDexOneRight");
        imageArray[slideIndex-1].classList.remove("addOnloadDislay");
        imageArray[5].classList.remove("addOnloadDislay");
        imageArray[slideIndex].classList.remove("addOnloadDislay");
    }
    
}
function onloadImgShow()
{
    imageArray[0].classList.remove("addOnloadDislay");
    imageArray[4].classList.remove("addOnloadDislay");
    imageArray[1].classList.remove("addOnloadDislay");
    imageArray[0].classList.add("addOnloadStyleZDexTwo");
    imageArray[4].classList.add("addOnloadStyleZDexOneLeft");
    imageArray[1].classList.add("addOnloadStyleZDexOneRight");
}
function midAddFev()
{
    // let midImgShowDiv=getMidNode();
//    midImgShowDiv.addEventListener("click",addImgFav)
    // let id =midImgShowDiv.id;
    // let midCavSpanId=id+"-canvas-span";
    // midImgShowDiv.addEventListener("click",function(){openNewWidow(id)});

    addFavandShowHert();
}
function midAddFevFunctionRemove()
{
    // let midImgShowDiv=document.getElementById("cImagShow");
    // midImgShowDiv.removeEventListener("click",function foo(){addImgFav(num)});
    let midImgShowDiv=getMidNode();
    let midId=midImgShowDiv.getAttribute("id");
    let canvasMidNode=getMidCanvasNode(midId);
//    midImgShowDiv.removeEventListener("click",addImgFav);
    if (window.removeEventListener)
    {
        canvasMidNode.removeEventListener("click",addImgFav);
        midImgShowDiv.removeEventListener("mouseover",heartDisplayOnHover);
        midImgShowDiv.removeEventListener("mouseout",HeartDisplayMouseOut);
    }
    else if (window.detachEvent)
    {
        canvasMidNode.detachEvent("click",addImgFav);
        midImgShowDiv.detachEvent("mouseover",heartDisplayOnHover);
        midImgShowDiv.detachEvent("mouseout",HeartDisplayMouseOut);
    }

}
function getMidNode()
{
    return document.querySelector(".addOnloadStyleZDexTwo");
}
function getMidCanvasNode(midId)
{
    let canvasMidId=midId+"-canvas";
    return document.getElementById(canvasMidId);
}

function openNewWindow()
{
    let id = getMidNode().id;
    let newWindowHref = "";
    if (id=="cImag1"){newWindowHref="cImag01.html";}
    else if (id=="cImag2"){newWindowHref="cImag02.html";}
    else if (id=="cImag3"){newWindowHref="cImag03.html";}
    else if (id=="cImag4"){newWindowHref="cImag04.html";}
    else if (id=="cImag5"){newWindowHref="cImag05.html";}
    else if (id=="cImag6"){newWindowHref="cImag06.html";}
    if(windowObjectReference == null || windowObjectReference.closed){
        windowObjectReference = window.open(newWindowHref,
        "BestViewer", "resizable,scrollbars,status");
        
        windowObjectReference.postMessage("hello there!", "*");
      }else {
          windowObjectReference.focus();
      };
    
}

function checkDuplication(baseNode,childNode)
{
    let checkContainNodes=baseNode.children;
    if (checkContainNodes.length!=0)
    {
        for (let i=0;i<checkContainNodes.length;i++)
        {
            if (childNode.getAttribute("id")==checkContainNodes[i].getAttribute("id"))
            {
                return true;
            }
        }
    }
    return false;
}
function addFunctionToSingle(checkResult,copyNode,favBan)
{
    if (!checkResult)
    {
        favBan.appendChild(copyNode);
        if (window.addEventListener)
        {
            copyNode.addEventListener("click",function foo(){removeImgFav(copyNode.id)});
        }
        else if(window.attachEvent)
        {
            copyNode.attachEvent("click",function foo(){removeImgFav(copyNode.id)});
        }
    }
    else
    {
        window.alert("this picture has been added");
    }
}
function drawHeart(canvasId)
{
        canvas = document.getElementById(canvasId);
        let context = canvas.getContext("2d");
        let w = 15, h = 15;
        context.strokeStyle = "#FFFFFF";
        context.strokeWeight = 5;
        context.shadowOffsetX = 2.0;
        context.shadowOffsetY = 2.0;
        context.lineWidth = 2.0;
        let d = Math.min(w, h);
        let k = 10;
        context.moveTo(k, k + d / 4);
        context.quadraticCurveTo(k, k, k + d / 4, k);
        context.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
        context.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
        context.quadraticCurveTo(k + d, k, k + d, k + d / 4);
        context.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
        context.lineTo(k + d / 2, k + d);
        context.lineTo(k + d / 4, k + d * 3/4);
        context.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
        context.stroke();
}
function fillHeart(canvasId)
{
    canvas = document.getElementById(canvasId);
    let context = canvas.getContext("2d");
    context.fillStyle = "#FF0000";
    context.fill();
   // context.strokeStyle = "#000000";
}
function removeFillHeart(canvasId)
{
    canvas = document.getElementById(canvasId);
    let context = canvas.getContext("2d");
    context.clearRect(0,0,30,30);
    drawHeart(canvasId);
   // context.strokeStyle = "#FFFFFF";
}
function HeartDisplayOnload(midCavSpanId)
{
    let heart=document.getElementById(midCavSpanId);
    heart.classList.add("addHearDisplaynone");
    zoomNoteOnload();
}
function heartDisplayOnHover()
{
    let heart=document.getElementById(getHeartSpanId());
    heart.classList.remove("addHearDisplaynone");
    zoomNoteShow();
}
function HeartDisplayMouseOut()
{
    let heart=document.getElementById(getHeartSpanId());
    heart.classList.add("addHearDisplaynone");
    zoomNoteOnload();
}
function getHeartSpanId()
{
    let midImgShowDiv=getMidNode();
    let id =midImgShowDiv.getAttribute("id");
    let midCavSpanId=id+"-canvas-span";
    return midCavSpanId;
}
function zoomNoteOnload()
{
    let zoomNode=document.getElementById("zoomImgNoteId");
    zoomNode.classList.add("addZoomNoteOnload");
    zoomNode.classList.remove("addZoomNoteShow");
}
function zoomNoteShow()
{
    let zoomNode=document.getElementById("zoomImgNoteId");
    zoomNode.classList.add("addZoomNoteShow"); 
    zoomNode.classList.remove("addZoomNoteOnload");  
}

function receiveMessage(event)
{
  // Do we trust the sender of this message?  (might be
  // different from what we originally opened, for example).
  if (event.data === 0)
    return;
  addImgFav(event.data);
}
if (window.addEventListener)
{
    window.addEventListener("message", receiveMessage, false);
}
else if (window.attachEvent)
{
    window.attachEvent("message", receiveMessage, false);
}
function addFavandShowHert()
{
 //   let midId=midImgShowDiv.getAttribute("id");
    
    let midImgShowDiv=getMidNode();
    //    midImgShowDiv.addEventListener("click",addImgFav)
    let id =midImgShowDiv.id;
    let canvasMidNode=getMidCanvasNode(id);
    if (window.addEventListener)
    {
        canvasMidNode.addEventListener("click",addImgFav);
        midImgShowDiv.addEventListener("mouseover",heartDisplayOnHover);
        midImgShowDiv.addEventListener("mouseout",HeartDisplayMouseOut);
    }
    else if(window.attachEvent)
    {
        canvasMidNode.attachEvent("click",addImgFav);
        midImgShowDiv.attachEvent("mouseover",heartDisplayOnHover);
        midImgShowDiv.attachEvent("mouseout",HeartDisplayMouseOut);
    }
}
//#endregion