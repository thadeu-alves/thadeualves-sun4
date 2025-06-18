function tratarDatas(data) {
    const meses = {
        jan: "01",
        fev: "02",
        mar: "03",
        abr: "04",
        mai: "05",
        jun: "06",
        jul: "07",
        ago: "08",
        set: "09",
        out: "10",
        nov: "11",
        dez: "12",
    };

    if (data.includes("/")) {
        const [dia, mes, ano] = data.split("/");

        return `${ano}-${mes}-${dia}`;
    }

    if (data.split(" ").length === 3) {
        const [dia, mes, ano] = data.split(" ");
        const mesNum =
            meses[mes.toLowerCase().substring(0, 3)];

        return `${ano}-${mesNum}-${dia.padStart(2, "0")}`;
    }

    if (data.includes(" de ")) {
        const partes = data.split(" de ");
        const dia = partes[0];
        const mes = partes[1];
        const ano = partes[2];
        const mesNum =
            meses[mes.toLowerCase().substring(0, 3)];

        return `${ano}-${mesNum}-${dia.padStart(2, "0")}`;
    }

    return data;
}

const datasParaTratar = [
    "30/11/2022",
    "01 dez 2022",
    "25/12/2022",
    "31 de dezembro de 2022",
    "20 fevereiro 2006",
];

datasParaTratar.forEach((data) => {
    console.log(tratarDatas(data));
});
