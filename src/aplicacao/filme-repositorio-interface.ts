export default interface filmeReposotorioInterface{
    salvar(filme: filmeDTO): Promise<boolean>;

}
type filmeDTO = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string

}