// Função para calcular o nível com base no saldo de vitórias
function calcularNivel(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel;

    // Usando switch para determinar o nível, if else funcionaria mas não ficaria tão bem organizado.
    switch (true) {
        case (saldo <= 10): //originalmente o exercício cria um gap entre 11 e 10 que resultaria no coitado de rank 10 sendo colocado contra imortais.
            nivel = "Ferro";
            break;
        case (saldo >= 11 && saldo <= 20):
            nivel = "Bronze";
            break;
        case (saldo >= 21 && saldo <= 50):
            nivel = "Prata";
            break;
        case (saldo >= 51 && saldo <= 80):
            nivel = "Ouro";
            break;
        case (saldo >= 81 && saldo <= 90):
            nivel = "Diamante";
            break;
        case (saldo >= 91 && saldo <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return nivel;
}

//Exemplo de uso da função.
const vitorias = 94;
const derrotas = 31;
//Poderíamos dar o saldo aqui de cara, mas o exercício requer que o cálculo seja feito na função também. Perdeu na otimização.
const saldoVitorias = vitorias - derrotas;
const nivel = calcularNivel(vitorias, derrotas);

let stringResultadoTotal = (`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`)
console.log(stringResultadoTotal)