function extrairPresentes(transcricao) {
    const linhas = transcricao.split('\n');
    const nomes = new Set();

    linhas.forEach(linha => {
        const match = linha.match(/^(.+?)\sdisse:/i);
        if (match) nomes.add(match[1].trim());
    });

    return Array.from(nomes);
}

module.exports = { extrairPresentes };
