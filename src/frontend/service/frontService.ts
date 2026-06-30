export async function listarCartas() {

    try {

        const response = await fetch(
            "http://localhost:3000/cartas"
        );

        if (!response.ok) {
            throw new Error(
                "Erro ao buscar cartas."
            );
        }

        return await response.json();

    } catch (erro) {

        console.error(erro);

        return [];

    }
}

export async function buscarCarta(id: number) {

    try {

        const response = await fetch(
            `http://localhost:3000/cartas/${id}`
        );

        if (!response.ok) {
            throw new Error(
                "Erro ao buscar carta."
            );
        }

        return await response.json();

    } catch (erro) {

        console.error(erro);

        return null;

    }
}