let x=1;
let y=4;
let z=-1;

let para1 =document.getElementById('para1');
if (x<2){
    para1.innerHTML=(x<2).toString();
}

let para2 =document.getElementById('para2');
if (y>3){
    para2.innerHTML=(y>3).toString();
}

let para3 =document.getElementById('para3');
if (z<=0){
    para3.innerHTML=(z<=0).toString();
}

let para4 =document.getElementById('para4');
if ((x<2)&&(y>3)&&(z<=0)){
    para4.innerHTML=((x<2)&&(y>3)&&(z<=0)).toString();
}


let para5 =document.getElementById('para5');
if ((x<2)&&(y>3)||(z===-1)){
    para5.innerHTML=((x<2)&&(y>3)||(z===-1)).toString();
}