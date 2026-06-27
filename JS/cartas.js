const listaCartas = document.getElementById('listaCartas');
const inPesquisar = document.getElementById('inPesquisar');
let bancoCartas = [];

async function carregarCartas() {
    try {
        const response = await fetch('../JS/yu_gi_oh_500_cartas.json');
        const data = await response.json();
        bancoCartas = data.cartas;
        renderizarCartas(bancoCartas);
    } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
        listaCartas.innerHTML = '<p style="color:white;">Erro ao carregar as cartas.</p>';
    }
}

function renderizarCartas(cartas) {
    listaCartas.innerHTML = '';
    
    const cartasParaMostrar = cartas.slice(0, 50); 

    cartasParaMostrar.forEach(carta => {
        const div = document.createElement('div');
        div.className = 'carta-item';
        
        const status = carta.ataque !== null ? `ATK: ${carta.ataque} | DEF: ${carta.defesa}` : `Tipo: ${carta.tipoFeitico || carta.tipoArmadilha}`;
        
        div.innerHTML = `
            <img src="${carta.img}" alt="${carta.nome}" loading="lazy">
            <h3>${carta.nome}</h3>
            <p>${carta.categoria}</p>
            <p><small>${status}</small></p>
        `;
        listaCartas.appendChild(div);
    });
}

inPesquisar.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const cartasFiltradas = bancoCartas.filter(carta => 
        carta.nome.toLowerCase().includes(termo)
    );
    renderizarCartas(cartasFiltradas);
});

carregarCartas();