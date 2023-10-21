
const palos = ['♠️', '♣️', '♥️', '♦️'];
const colorRojo = "red"
const colorNegro = "black"
const numeros = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let cartaGenerada = { palo: palos[0], numeroCarta: numeros[0] };

document.generarCarta = () => {
  const palo = obtenerPaloAleatorio();
  const numeroCarta = obtenerNumeroAleatorio();
  const color = obtenerColor(palo);
  const juntarCarta = { palo, numeroCarta, color };
  renderizar(juntarCarta);
};

const obtenerPaloAleatorio = () => {
  const paloAleatorio = Math.floor(Math.random() * palos.length);
  return palos[paloAleatorio];
};

const obtenerNumeroAleatorio = () => {
  const numeroAleatorio = Math.floor(Math.random() * numeros.length);
  return numeros[numeroAleatorio];
};

const obtenerColor = (palo) => {
  if (palo === '♥️' || palo === '♦️') {
    return colorRojo;
  } else {
    return colorNegro;
}
  }

  const renderizar = (cartaGenerada) => {
    const figuraPaloIzq = document.querySelector('.top-left');
    const numero = document.querySelector('.numero');
    const figuraPaloDcha = document.querySelector('.bottom-right');
    numero.innerHTML = cartaGenerada.numeroCarta;
    numero.setAttribute('style', `color: ${cartaGenerada.color}`);
    figuraPaloIzq.innerHTML = cartaGenerada.palo;
    figuraPaloIzq.setAttribute('style', `color: ${cartaGenerada.color}`);
    figuraPaloDcha.innerHTML = cartaGenerada.palo;
    figuraPaloDcha.setAttribute('style', `color: ${cartaGenerada.color}`);
};