//método SetInterval()
setInterval(() => {
    const data = new Date(); 
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
}, 5000);