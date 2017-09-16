/**
 * Created by SL_WOLF on 9/11/2017.
 */

var enemyList=new Array();
var highlightedList=new Array();
var clickedDiv;

function searchIsEnemy(parentId){
    for(var i in enemyList){
        if(enemyList[i]=="#"+parentId){
            return true;
        }
    }
}
function seachIsHighlighted(parentId){
    for(var i in highlightedList){
        if(highlightedList[i]=="#"+parentId){
            return true;
        }
    }
}
function cellClickEvent(parentId){
    if(seachIsHighlighted($(parentId).attr("id"))){
        var pId=parentId;
        var cId="#"+clickedDiv;
//        $(pId).html($(cId).html());
//        $(cId).empty();
//        setInitialColour();
        //$(cId).appendTo(pId);
        $(pId).html("<p>");
        $($(pId).contents()).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }
}

function imgClickEventWitePawn(parentID){
    if(searchIsEnemy($(parentID).parent().attr("id"))){
        $(parentID).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        whitePawnPath($(parentID).parent().attr("id"));
        //clickedDiv=parentID
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
}

function imgClickEventBlackPawn(parentID){
    if(searchIsEnemy($(parentID).parent().attr("id"))){
        $(parentID).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        blackPawnPath($(parentID).parent().attr("id"));
        //clickedDiv=parentID;
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
}

$("#wp1").click(function (){
    imgClickEventWitePawn("#wp1");
});
$("#wp2").click(function (){
    imgClickEventWitePawn("#wp2");
});
$("#wp3").click(function (){
    imgClickEventWitePawn("#wp3");
});
$("#wp4").click(function (){
    imgClickEventWitePawn("#wp4");
});
$("#wp5").click(function (){
    imgClickEventWitePawn("#wp5");
});
$("#wp6").click(function (){
    imgClickEventWitePawn("#wp6");
});
$("#wp7").click(function (){
    imgClickEventWitePawn("#wp7");
});
$("#wp8").click(function (){
    imgClickEventWitePawn("#wp8");
});
//////////////////////////////////////////////////////////

$("#bp1").click(function (){
    imgClickEventBlackPawn("#bp1");
});
$("#bp2").click(function (){
    imgClickEventBlackPawn("#bp2");
});
$("#bp3").click(function (){
    imgClickEventBlackPawn("#bp3");
});
$("#bp4").click(function (){
    imgClickEventBlackPawn("#bp4");
});
$("#bp5").click(function (){
    imgClickEventBlackPawn("#bp5");
});
$("#bp6").click(function (){
    imgClickEventBlackPawn("#bp6");
});
$("#bp7").click(function (){
    imgClickEventBlackPawn("#bp7");
});
$("#bp8").click(function (){
    imgClickEventBlackPawn("#bp8");
});
function setInitialColour(){
    var divBoxes = $(".higlightedBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("higlightedBoxes");
    }
    divBoxes = $(".enemyBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("enemyBoxes");
    }
    for(var l in enemyList){
        enemyList.pop();
    }
    for(var k in highlightedList){
        highlightedList.pop();
    }
    clickedDiv="null";
}

function whitePawnPath(parentID){
    clickedDiv=parentID;
    var res=parentID.split("j");
    if(res[0]>=2){
        if(res[1]==1){
            var en1="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+1);
            if($(en1).contents().attr("class")=="teamBlack"){
                $(en1).addClass("enemyBoxes");
                enemyList.push(en1);
            }
        }else if(res[1]==8){
            var en2="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-1);
            if($(en2).contents().attr("class")=="teamBlack"){
                $(en2).addClass("enemyBoxes");
                enemyList.push(en2);
            }
        }else{
            var en3="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+1);
            if($(en3).contents().attr("class")=="teamBlack"){
                $(en3).addClass("enemyBoxes");
                enemyList.push(en3);
            }
            var en4="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-1);
            if($(en4).contents().attr("class")=="teamBlack"){
                $(en4).addClass("enemyBoxes");
                enemyList.push(en4);
            }
        }

        if(res[0]==7){
            var en5="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1]));
            if($(en5).html()==""){
                $(en5).addClass("higlightedBoxes");
                highlightedList.push(en5);
                var en6="#"+(parseInt(res[0])-2)+"j"+(parseInt(res[1]));
                if($(en6).html()==""){
                    $(en6).addClass("higlightedBoxes");
                    highlightedList.push(en6);
                }
            }
        }else{
            var en7="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1]));
            if($(en7).html()==""){
                $(en7).addClass("higlightedBoxes");
                highlightedList.push(en7);
            }
        }
    }
}
function blackPawnPath(parentID){
    clickedDiv=parentID;
    var res=parentID.split("j");
    if(res[0]<=7){
        if(res[1]==1){
            var en1="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+1);
            if($(en1).contents().attr("class")=="teamWhite"){
                $(en1).addClass("enemyBoxes");
                enemyList.push(en1);
            }
        }else if(res[1]==8){
            var en2="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])-1);
            if($(en2).contents().attr("class")=="teamWhite"){
                $(en2).addClass("enemyBoxes");
                enemyList.push(en2);
            }
        }else{
            var en3="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+1);
            if($(en3).contents().attr("class")=="teamWhite"){
                $(en3).addClass("enemyBoxes");
                enemyList.push(en3);
            }
            var en4="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])-1);
            if($(en4).contents().attr("class")=="teamWhite"){
                $(en4).addClass("enemyBoxes");
                enemyList.push(en4);
            }
        }

        if(res[0]==2){
            var en5="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1]));
            if($(en5).html()==""){
                $(en5).addClass("higlightedBoxes");
                highlightedList.push(en5);
                var en6="#"+(parseInt(res[0])+2)+"j"+(parseInt(res[1]));
                if($(en6).html()==""){
                    $(en6).addClass("higlightedBoxes");
                    highlightedList.push(en6);
                }
            }
        }else{
            var en7="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1]));
            if($(en7).html()==""){
                $(en7).addClass("higlightedBoxes");
                highlightedList.push(en7);
            }
        }
    }
}
function colourPathFiller(cellId,team){
    if((team=="black")&&($(cellId).contents().attr("class")=="teamWhite")){
        $(cellId).addClass("enemyBoxes");
        enemyList.push(cellId);
    }else if((team=="white")&&($(cellId).contents().attr("class")=="teamBlack")){
        $(cellId).addClass("enemyBoxes");
        enemyList.push(cellId);
    }
}


$("#wrook1").click(function (){
    if(searchIsEnemy($("#wrook1").parent().attr("id"))){
        $("#wrook1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        rookPath($("#wrook1").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#wrook2").click(function (){
    if(searchIsEnemy($("#wrook2").parent().attr("id"))){
        $("#wrook2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        rookPath($("#wrook2").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#brook1").click(function (){
    if(searchIsEnemy($("#brook1").parent().attr("id"))){
        $("#brook1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        rookPath($("#brook1").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#brook2").click(function (){
    if(searchIsEnemy($("#brook2").parent().attr("id"))){
        $("#brook2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        rookPath($("#brook2").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#wqueen").click(function (){
    if(searchIsEnemy($("#wqueen").parent().attr("id"))){
        $("#wqueen").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        rookPath($("#wqueen").parent().attr("id"),"white");
        bishopPath($("#wqueen").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#bqueen").click(function (){
    if(searchIsEnemy($("#bqueen").parent().attr("id"))){
        $("#bqueen").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        rookPath($("#bqueen").parent().attr("id"),"black");
        bishopPath($("#bqueen").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});

function rookPath(parentID,team){
    clickedDiv=parentID;
    var res=parentID.split("j");
    for(var i=(res[1]-1);i>=1;i--){// right to left
        var en1="#"+res[0]+"j"+i;
        if($(en1).html()==""){
            $(en1).addClass("higlightedBoxes");
            highlightedList.push(en1);
        }else{
            colourPathFiller(en1,team);
            break;
        }
    }
    for(var j=(parseInt(res[1])+1);j<=8;j++){
        var en2="#"+res[0]+"j"+j;
        if($(en2).html()==""){
            $(en2).addClass("higlightedBoxes");
            highlightedList.push(en2);
        }else{
            colourPathFiller(en2,team);
            break;
        }
    }
    for(var k=(res[0]-1);k>=1;k--){
        var en3="#"+k+"j"+res[1];
        if($(en3).html()==""){
            $(en3).addClass("higlightedBoxes");
            highlightedList.push(en3);
        }else{
            colourPathFiller(en3,team);
            break;
        }
    }
    for(var l=(parseInt(res[0])+1);l<=8;l++){
        var en4="#"+l+"j"+res[1];
        if($(en4).html()==""){
            $(en4).addClass("higlightedBoxes");
            highlightedList.push(en4);
        }else{
            colourPathFiller(en4,team);
            break;
        }
    }
}
$("#wbishop1").click(function (){
    if(searchIsEnemy($("#wbishop1").parent().attr("id"))){
        $("#wbishop1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        bishopPath($("#wbishop1").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#bbishop1").click(function (){
    if(searchIsEnemy($("#bbishop1").parent().attr("id"))){
        $("#bbishop1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        bishopPath($("#bbishop1").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#wbishop2").click(function (){
    if(searchIsEnemy($("#wbishop2").parent().attr("id"))){
        $("#wbishop2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        bishopPath($("#wbishop2").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#bbishop2").click(function (){
    if(searchIsEnemy($("#bbishop2").parent().attr("id"))){
        $("#bbishop2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        bishopPath($("#bbishop2").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});

function bishopPath(parentID,team){
    clickedDiv=parentID;
    var res=parentID.split("j");
    var b=parseInt(res[0]);
    for(var a=(res[1]-1);a>=1;a--){
        var en1="#"+(b-1)+"j"+a;
        b--;
        if($(en1).html()==""){
            $(en1).addClass("higlightedBoxes");
            highlightedList.push(en1);
        }else{
            colourPathFiller(en1,team);
            break;
        }
    }

    b=parseInt(res[0]);
    for(var x=(parseInt(res[1])+1);x<=8;x++){
        var en2="#"+(b-1)+"j"+x;
        b--;
        if($(en2).html()==""){
            $(en2).addClass("higlightedBoxes");
            highlightedList.push(en2);
        }else{
            colourPathFiller(en2,team);
            break;
        }
    }
    b=parseInt(res[1]);
    for(var y=(parseInt(res[0])+1);y<=8;y++){
        var en3="#"+y+"j"+(b-1);
        b--;
        if($(en3).html()==""){
            $(en3).addClass("higlightedBoxes");
            highlightedList.push(en3);
        }else{
            colourPathFiller(en3,team);
            break;
        }
    }
    b=parseInt(res[1]);
    for(var z=(parseInt(res[0])+1);z<=8;z++){
        var en4="#"+z+"j"+(b+1);
        b++;
        if($(en4).html()==""){
            $(en4).addClass("higlightedBoxes");
            highlightedList.push(en4);
        }else{
            colourPathFiller(en4,team);
            break;
        }
    }
}

$("#bknight1").click(function (){
    if(searchIsEnemy($("#bknight1").parent().attr("id"))){
        $("#bknight1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        knightPath($("#bknight1").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#bknight2").click(function (){
    if(searchIsEnemy($("#bknight2").parent().attr("id"))){
        $("#bknight2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        knightPath($("#bknight2").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#wknight1").click(function (){
    if(searchIsEnemy($("#wknight1").parent().attr("id"))){
        $("#wknight1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        knightPath($("#wknight1").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#wknight2").click(function (){
    if(searchIsEnemy($("#wknight2").parent().attr("id"))){
        $("#wknight2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        knightPath($("#wknight2").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
function knightPath(parentID,team){
    clickedDiv=parentID;
    var res=parentID.split("j");
    var en1="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-2);
    if($(en1).html()==""){
        $(en1).addClass("higlightedBoxes");
        highlightedList.push(en1);
    }else{
        colourPathFiller(en1,team);
    }

    var en2="#"+(parseInt(res[0])-2)+"j"+(parseInt(res[1])-1);
    if($(en2).html()==""){
        $(en2).addClass("higlightedBoxes");
        highlightedList.push(en2);
    }else{
        colourPathFiller(en2,team);
    }

    var en3="#"+(parseInt(res[0])-2)+"j"+(parseInt(res[1])+1);
    if($(en3).html()==""){
        $(en3).addClass("higlightedBoxes");
        highlightedList.push(en3);
    }else{
        colourPathFiller(en3,team);
    }

    var en4="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+2);
    if($(en4).html()==""){
        $(en4).addClass("higlightedBoxes");
        highlightedList.push(en4);
    }else{
        colourPathFiller(en4,team);
    }

    var en5="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])-2);
    if($(en5).html()==""){
        $(en5).addClass("higlightedBoxes");
        highlightedList.push(en5);
    }else{
        colourPathFiller(en5,team);
    }

    var en6="#"+(parseInt(res[0])+2)+"j"+(parseInt(res[1])-1);
    if($(en6).html()==""){
        $(en6).addClass("higlightedBoxes");
        highlightedList.push(en6);
    }else{
        colourPathFiller(en6,team);
    }

    var en7="#"+(parseInt(res[0])+2)+"j"+(parseInt(res[1])+1);
    if($(en7).html()==""){
        $(en7).addClass("higlightedBoxes");
        highlightedList.push(en7);
    }else{
        colourPathFiller(en7,team);
    }

    var en8="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+2);
    if($(en8).html()==""){
        $(en8).addClass("higlightedBoxes");
        highlightedList.push(en8);
    }else{
        colourPathFiller(en8,team);
    }
}

$("#wking").click(function (){
    if(searchIsEnemy($("#wking").parent().attr("id"))){
        $("#wking").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        kingPath($("#wking").parent().attr("id"),"white");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
$("#bking").click(function (){
    if(searchIsEnemy($("#bking").parent().attr("id"))){
        $("#bking").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        kingPath($("#bking").parent().attr("id"),"black");
        //alert("not a enemy"+enemyList.toString()+"  "+highlightedList.toString());
    }
});
function kingPath(parentID,team){
    clickedDiv=parentID;
    var res=parentID.split("j");
    var en1="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-1);
    if($(en1).html()==""){
        $(en1).addClass("higlightedBoxes");
        highlightedList.push(en1);
    }else{
        colourPathFiller(en1,team);
    }

    var en2="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1]));
    if($(en2).html()==""){
        $(en2).addClass("higlightedBoxes");
        highlightedList.push(en2);
    }else{
        colourPathFiller(en2,team);
    }

    var en3="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+1);
    if($(en3).html()==""){
        $(en3).addClass("higlightedBoxes");
        highlightedList.push(en3);
    }else{
        colourPathFiller(en3,team);
    }

    var en4="#"+(parseInt(res[0]))+"j"+(parseInt(res[1])-1);
    if($(en4).html()==""){
        $(en4).addClass("higlightedBoxes");
        highlightedList.push(en4);
    }else{
        colourPathFiller(en4,team);
    }

    var en5="#"+(parseInt(res[0]))+"j"+(parseInt(res[1])+1);
    if($(en5).html()==""){
        $(en5).addClass("higlightedBoxes");
        highlightedList.push(en5);
    }else{
        colourPathFiller(en5,team);
    }

    var en6="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])-1);
    if($(en6).html()==""){
        $(en6).addClass("higlightedBoxes");
        highlightedList.push(en6);
    }else{
        colourPathFiller(en6,team);
    }

    var en7="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1]));
    if($(en7).html()==""){
        $(en7).addClass("higlightedBoxes");
        highlightedList.push(en7);
    }else{
        colourPathFiller(en7,team);
    }

    var en8="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+1);
    if($(en8).html()==""){
        $(en8).addClass("higlightedBoxes");
        highlightedList.push(en8);
    }else{
        colourPathFiller(en8,team);
    }
}
$("#1j1").click(function (){
    cellClickEvent("#1j1");
});
$("#1j2").click(function (){
    cellClickEvent("#1j2");
});
$("#1j3").click(function (){
    cellClickEvent("#1j3");
});
$("#1j4").click(function (){
    cellClickEvent("#1j4");
});
$("#1j5").click(function (){
    cellClickEvent("#1j5");
});
$("#1j6").click(function (){
    cellClickEvent("#1j6");
});
$("#1j7").click(function (){
    cellClickEvent("#1j7");
});
$("#1j8").click(function (){
    cellClickEvent("#1j8");
});
$("#2j1").click(function (){
    cellClickEvent("#2j1");
});
$("#2j2").click(function (){
    cellClickEvent("#2j2");
});
$("#2j3").click(function (){
    cellClickEvent("#2j3");
});
$("#2j4").click(function (){
    cellClickEvent("#2j4");
});
$("#2j5").click(function (){
    cellClickEvent("#2j5");
});
$("#2j6").click(function (){
    cellClickEvent("#2j6");
});
$("#2j7").click(function (){
    cellClickEvent("#2j7");
});
$("#2j8").click(function (){
    cellClickEvent("#2j8");
});
$("#3j1").click(function (){
    cellClickEvent("#3j1");
});
$("#3j2").click(function (){
    cellClickEvent("#3j2");
});
$("#3j3").click(function (){
    cellClickEvent("#3j3");
});
$("#3j4").click(function (){
    cellClickEvent("#3j4");
});
$("#3j5").click(function (){
    cellClickEvent("#3j5");
});
$("#3j6").click(function (){
    cellClickEvent("#3j6");
});
$("#3j7").click(function (){
    cellClickEvent("#3j7");
});
$("#3j8").click(function (){
    cellClickEvent("#3j8");
});
$("#4j1").click(function (){
    cellClickEvent("#4j1");
});
$("#4j2").click(function (){
    cellClickEvent("#4j2");
});
$("#4j3").click(function (){
    cellClickEvent("#4j3");
});
$("#4j4").click(function (){
    cellClickEvent("#4j4");
});
$("#4j5").click(function (){
    cellClickEvent("#4j5");
});
$("#4j6").click(function (){
    cellClickEvent("#4j6");
});
$("#4j7").click(function (){
    cellClickEvent("#4j7");
});
$("#4j8").click(function (){
    cellClickEvent("#4j8");
});
$("#5j1").click(function (){
    cellClickEvent("#5j1");
});
$("#5j2").click(function (){
    cellClickEvent("#5j2");
});
$("#5j3").click(function (){
    cellClickEvent("#5j3");
});
$("#5j4").click(function (){
    cellClickEvent("#5j4");
});
$("#5j5").click(function (){
    cellClickEvent("#5j5");
});
$("#5j6").click(function (){
    cellClickEvent("#5j6");
});
$("#5j7").click(function (){
    cellClickEvent("#5j7");
});
$("#5j8").click(function (){
    cellClickEvent("#5j8");
});
$("#6j1").click(function (){
    cellClickEvent("#6j1");
});
$("#6j2").click(function (){
    cellClickEvent("#6j2");
});
$("#6j3").click(function (){
    cellClickEvent("#6j3");
});
$("#6j4").click(function (){
    cellClickEvent("#6j4");
});
$("#6j5").click(function (){
    cellClickEvent("#6j5");
});
$("#6j6").click(function (){
    cellClickEvent("#6j6");
});
$("#6j7").click(function (){
    cellClickEvent("#6j7");
});
$("#6j8").click(function (){
    cellClickEvent("#6j8");
});
$("#7j1").click(function (){
    cellClickEvent("#7j1");
});
$("#7j2").click(function (){
    cellClickEvent("#7j2");
});
$("#7j3").click(function (){
    cellClickEvent("#7j3");
});
$("#7j4").click(function (){
    cellClickEvent("#7j4");
});
$("#7j5").click(function (){
    cellClickEvent("#7j5");
});
$("#7j6").click(function (){
    cellClickEvent("#7j6");
});
$("#7j7").click(function (){
    cellClickEvent("#7j7");
});
$("#7j8").click(function (){
    cellClickEvent("#7j8");
});
$("#8j1").click(function (){
    cellClickEvent("#8j1");
});
$("#8j2").click(function (){
    cellClickEvent("#8j2");
});
$("#8j3").click(function (){
    cellClickEvent("#8j3");
});
$("#8j4").click(function (){
    cellClickEvent("#8j4");
});
$("#8j5").click(function (){
    cellClickEvent("#8j5");
});
$("#8j6").click(function (){
    cellClickEvent("#8j6");
});
$("#8j7").click(function (){
    cellClickEvent("#8j7");
});
$("#8j8").click(function (){
    cellClickEvent("#8j8");
});
