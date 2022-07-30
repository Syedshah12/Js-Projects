const inp=document.getElementById('inp');
const buttons=document.querySelectorAll('button');
let inpValue="";
for(item of buttons){
item.addEventListener('click',(e)=>{
let btnText=e.target.innerText;
if(btnText=='='){
inp.value=eval(inpValue);
}

else if(btnText=='C'){
inpValue='';
inp.value=inpValue;
}
else if(btnText=="X"){
    btnText='*';
    inpValue+=btnText;
    inp.value=inpValue;

}
else{
inpValue+=btnText;
inp.value=inpValue;
}







})
}