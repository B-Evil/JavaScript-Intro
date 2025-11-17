//obtém elementos do html
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (s) =>{
    s.preventDefault(); 
    const userName = frm.inName.value; 
    const userAltura = parseFloat(frm.inAltura.value);
    const masculino = frm.inMasculino.checked;
    const peso = masculino ? 22 * Math.pow(userAltura, 2) : 21 * Math.pow(userAltura, 2);
    resp.innerText = `${userName} seu peso ideal é:  ${peso.toFixed(2)}`;
});
frm.addEventListener("reset", () =>{
    resp.innerText = ``;
});