import './Relogio.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function ContaHora(){
    let objeto_data_tempo_real = new Date();
    let hora_atual = objeto_data_tempo_real.getHours();
    let minuto_atual = objeto_data_tempo_real.getMinutes();
    let segundo_atual = objeto_data_tempo_real.getSeconds();
    let tempo_atual = hora_atual + ":" + minuto_atual + ":" + segundo_atual;
    return <h1>{tempo_atual}</h1>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Compasso() {
    root.render(<ContaHora />)
}
setInterval(Compasso, 1000);

export default Compasso;
