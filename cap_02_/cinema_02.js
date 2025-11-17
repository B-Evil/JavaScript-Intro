//reference of document html ->
const frm = document.querySelector("form");
const respName =  document.querySelector('h3');
const respTime = document.querySelector('h4');

//Listener -> 
frm.addEventListener('submit', (e) =>{ 
    e.preventDefault();

    const tempUser = Number(frm.inTime.value);
    const movieName = frm.inName.value; 

    const hours = Math.floor(tempUser / 60); 
    const minutes = tempUser % 60;

    respName.innerText = movieName; 
    respTime.innerText = `0${hours}:${minutes}`

});