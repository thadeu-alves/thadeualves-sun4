function removerDuplicados(nums) {
    const resultado = [];

    for (const num of nums) {
        if (!resultado.includes(num)) {
            resultado.push(num);
        }
    }

    return resultado;
}

console.log(
    removerDuplicados([1, 2, 2, 3, 4, 4, 5, 6, 6, 6])
);
