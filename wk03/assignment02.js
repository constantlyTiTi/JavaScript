
function display()
{
    var rowInput=document.getElementById("tableRowInput").value;
    var colInput=document.getElementById("tableColInput").value;
    var tableShowDiv=document.getElementById("tableShowDiv");
    tableShowDiv.innerHTML=null;
    tablearray=getInputs();
    if (rowInput!=""&&colInput!=""&&Number(rowInput)>0&&Number(colInput)>0)
    {
    tableCreate(tablearray);
    tableShowDiv.style.color="black";
    }
    else
    {
        tableShowDiv.innerHTML="Please Enter Valid Values to both Row and Column"
        tableShowDiv.style.color="red";
        console.log("null entered value");
    }
}
function insertValue()
{
    var inputValue=document.getElementById("valueInsertInput").value;
    var rawChange=document.getElementById("rolChange").value;
    var colChange=document.getElementById("colChange").value;
    var idStringArray=document.getElementsByTagName("td");
    for (var i=0;i<idStringArray.length;i++)
    {
        var idString=idStringArray[i].id;
        var idSplitSting=idString.split("-");
        if (idSplitSting[0]==rawChange&&idSplitSting[1]==colChange)
        {
            document.getElementById(idString).innerHTML=inputValue;
        }
    }

}

function tableCreate(tablearray)
{
    var trNum=tablearray[0];
    var tdNum=tablearray[1];
    var table=document.createElement("TABLE");
    var tBody=document.createElement("TBODY");
    var tableDiv=document.getElementById("tableShowDiv");
    var thead=document.createElement("THEAD");
    var theadTr=document.createElement("TR");
    var theadTd=document.createElement("TD");
    var titleInput=document.getElementById("tableTitleInput").value;
        table.appendChild(thead)
        table.appendChild(tBody);
        tableDiv.appendChild(table);
        table.width="700px";
        thead.appendChild(theadTr);
        theadTr.appendChild(theadTd);
        theadTd.innerHTML=titleInput+" (Row,Col)";
        theadTd.colSpan=tablearray[1];
    for (var i=0;i<trNum;i++)
    {
        var trCreate=document.createElement("TR");
        tBody.appendChild(trCreate);
        if(i%2==0)
        {
            trCreate.style.backgroundColor="lightgray";
        }
        else
        {
            trCreate.style.backgroundColor="whitesmoke";    
        }
        for(var j=0;j<tdNum;j++)
        {
        var tdCreate=document.createElement("TD");
        trCreate.appendChild(tdCreate);
        tdCreate.style.height="30px";
        var inputCell=document.createElement("INPUT");
        tdCreate.appendChild(inputCell);
        tdCreate.id=(i+1)+"-"+(j+1);
        tdCreate.innerHTML=(i+1)+" , "+(j+1);
        tdCreate.style.textAlign="center";     
        }
    }

}
function getInputs()
{
    var rowInput=document.getElementById("tableRowInput").value;
    var colInput=document.getElementById("tableColInput").value;
    var i=Number(rowInput);
    var j=Number(colInput);
    var tablearray=[i,j];
    return tablearray;
}

//#region addEventListener
if (window.addEventListener)
{
    document.getElementById("clickDiv").addEventListener("click",display);
    document.getElementById("ChangeDiv").addEventListener("click",insertValue);
}
else if(window.addEvent)
{
    document.getElementById("clickDiv").addEvent("click",display);
    document.getElementById("ChangeDiv").addEvent("click",insertValue);
}
//#endregion

