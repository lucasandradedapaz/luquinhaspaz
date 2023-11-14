export default interface filmeReposotorioInterface{
    salvar(filme: filmeDTO): Promise<boolean>;
    listar(): Promise<boolean[]>;

}
type filmeDTO = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string

}