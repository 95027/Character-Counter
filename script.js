let char= document.getElementById('textarea');

let count=document.getElementById('total');

let remainingCount=document.getElementById('remaining');

char.addEventListener('keyup',()=>{
    updateCount();
})

updateCount();

function updateCount(){
    count.innerHTML=char.value.length;

    remainingCount.innerHTML=char.getAttribute('maxLength')-char.value.length;

}