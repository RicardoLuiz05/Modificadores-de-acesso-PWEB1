class PessoaJuridica extends Pessoa{
    private cnpj:string;

    constructor (nome:string, idade:number, dataNascimento:Date, cnpj:string){
        super(nome +"- Juridica", idade, dataNascimento);
        this.cnpj = cnpj;
    }

    get _cnpj(){
        return this.cnpj;
    }
}