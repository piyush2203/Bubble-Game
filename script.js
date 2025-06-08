var cluster = "";

for(var i =0; i<=104 ; i++){
    
    cluster += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}

document.querySelector('.pbtm').innerHTML= cluster;


