const fs = require('fs');
const { extrairPresentes } = require('./parser');

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log('Uso: node cli.js <arquivo-transcricao> <arquivo-saida>');
    process.exit(1);
}

const [entrada, saida] = args;
const conteudo = fs.readFileSync(entrada, 'utf8');
const presentes = extrairPresentes(conteudo);

fs.writeFileSync(saida, presentes.join('\n'));
console.log('Lista de presença gerada com sucesso!');
