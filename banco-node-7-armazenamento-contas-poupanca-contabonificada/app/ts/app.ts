let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const pe1 = new Pessoa('Leonardo', 24, new Date("20/10/1999"));
const p2 = new PessoaFisica('Marta', 24, new Date("20/10/1999"), '111-111');
const p3 = new PessoaJuridica('Verenissa', 24, new Date("20/10/1999"), '11/222');

console.log(pe1);
console.log(p2);
console.log(p3);
