const btndec=document.getElementById("btndec");

const btninc=document.getElementById("btninc");

const btnres=document.getElementById("btnres");

const countlabel=document.getElementById("countlabel");
let count=0;
btninc.onclick=function(){
    count ++;
    countlabel.textContent=count;
}
btndec.onclick=function(){
    count --;
    countlabel.textContent=count;
}
btnres.onclick=function(){
    count =0;
    countlabel.textContent=count;
}
