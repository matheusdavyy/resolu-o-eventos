const diaevento = 30;
const mesevento = 10;
const anoevento = 2021;
const diahoje = 28;
const meshoje = 09;
const anohoje= 2021;
const idade = 19;
var index = 10;

if (meshoje <= mesevento) {
    if (diahoje <= diaevento){
        console.log ('Data do evento: '+ diaevento + mesevento + anoevento);
    } else{
        console.log ('Cadastro não permitido');
    }
}
if (idade >=18){
    console.log ('Você tem permissão');
    console.log ('Idade do participante é ' +idade);
} else {
    console.log ('Cadastro não permitido pela idade');
}

console.log ('Participante numero ' +index);
index = index++;



