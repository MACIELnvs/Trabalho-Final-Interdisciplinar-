const listaCartas = document.getElementById('listaCartas');
const inPesquisar = document.getElementById('inPesquisar');
const formAtualizar = document.getElementById('formAtualizar');
let bancoCartas = [];

async function carregarCartas() {
    try {
        const response = await fetch('../JS/yu_gi_oh_500_cartas.json');
        const data = await response.json();
        bancoCartas = data.cartas;
        renderizarCartas(bancoCartas);
    } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
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
            <p id="status-${carta.id}"><small>${status}</small></p>
            <button class="btn-editar" onclick="abrirEdicao(${carta.id})">EDITAR</button>
        `;
        listaCartas.appendChild(div);
    });
}

// Filtro
inPesquisar.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    renderizarCartas(bancoCartas.filter(c => c.nome.toLowerCase().includes(termo)));
});

// Lógica de Edição Simples
function abrirEdicao(id) {
    const carta = bancoCartas.find(c => c.id === id);
    if(carta) {
        document.getElementById('editId').value = carta.id;
        document.getElementById('editNome').value = carta.nome;
        document.getElementById('editAtk').value = carta.ataque || '';
        document.getElementById('editDef').value = carta.defesa || '';
        
        formAtualizar.style.display = 'block';
        window.scrollTo(0, 0); // Sobe a página para o formulário
    }
}

document.getElementById('btnCancelar').addEventListener('click', () => {
    formAtualizar.style.display = 'none';
});

document.getElementById('btnSalvar').addEventListener('click', () => {
    const id = parseInt(document.getElementById('editId').value);
    const novoNome = document.getElementById('editNome').value;
    const novoAtk = document.getElementById('editAtk').value;
    const novoDef = document.getElementById('editDef').value;

    const index = bancoCartas.findIndex(c => c.id === id);
    if(index !== -1) {
        bancoCartas[index].nome = novoNome;
        bancoCartas[index].ataque = novoAtk ? parseInt(novoAtk) : null;
        bancoCartas[index].defesa = novoDef ? parseInt(novoDef) : null;
        
        formAtualizar.style.display = 'none';
        
        // Re-renderiza a lista (mantendo o filtro atual se houver)
        const termo = inPesquisar.value.toLowerCase();
        renderizarCartas(bancoCartas.filter(c => c.nome.toLowerCase().includes(termo)));
        alert('Carta atualizada com sucesso na sessão!');
    }
});

carregarCartas();