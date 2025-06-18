function contarFrequencia(text) {
    const palavras = text.toLowerCase().split(" ");
    const cont = {};

    for (const p of palavras) {
        if (cont[p]) {
            cont[p] += 1;
        } else {
            cont[p] = 1;
        }
    }

    const itens = Object.keys(cont).map((palavra) => {
        return { palavra, quant: cont[palavra] };
    });

    console.log(itens);

    itens.sort((a, b) => b.quant - a.quant);

    const resultado = {};
    for (const item of itens) {
        resultado[item.palavra] = item.quant;
    }

    return resultado;
}

console.log(
    contarFrequencia(
        "Hello world hello hello world world world"
    )
);
