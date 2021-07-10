const relogio = document.querySelector('.relogio');
const iniciarBtn = document.querySelector('.iniciar');
const pauseBtn = document.querySelector('.pausar');
const zerarBtn = document.querySelector('.zerar');

let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;
let tempo = 1000;

iniciarBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
zerarBtn.addEventListener('click', zerarTimer);

function start() {
   cronometro = setInterval(() => {
      timer();
   }, tempo)
};

function pause() {
   clearInterval(cronometro);
};

function zerarTimer() {
   clearInterval(cronometro);
   segundos = 0;
   minutos = 0;
   horas = 0;

   relogio.innerHTML = `
   <span>00</span>:
   <span>00</span>:
   <span>00</span>`
};

function timer() {
   segundos++;
   if (segundos == 59) {
      segundos = 0
      minutos++
   };

   if (minutos == 59) {
      minutos = 0
      horas++
   };

   let formatSegundos = segundos < 10 ? `0${segundos}` : segundos;
   let formatMinutos = minutos < 10 ? `0${minutos}` : minutos;
   let formatHoras = horas < 10 ? `0${horas}` : horas;

   relogio.innerHTML = `
    <span>${formatHoras}</span>:
   <span>${formatMinutos}</span>:
   <span>${formatSegundos}</span>`
}