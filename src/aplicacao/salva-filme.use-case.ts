class salvaFilme{
    private branco = new BancoEmMemoria()
    constructor(){}
    public execute(input:Input):Output|undefined{
        const {id,titulo,descricao,foto} = input
        //salvar no banco 
       const resultado = this.branco.salvar({id,titulo,descricao,foto})
        if(resultado)return{id,titulo,descricao,foto}
        //retornar

    }


}

export default salvaFilme

type Input={
    id:number,
    titulo:string
    descricao:string
    foto:string
}

type Output = {
    id:number,
    titulo:string
    descricao:string
    foto:string
}