import { describe, test, expect } from "vitest"
import SalvaFilme from "./salva-filme.use-case"
describe("Testando usecase de salvar filme",()=>{
    test("Deve salvar um filme ",()=>{

        //entrada

        const filme = {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",

        }

        //processamento 
        const salvarFilme = new SalvaFilme()
        const{id,titulo,descricao,foto}= filme
        const resultado = salvarFilme.excute(id,titulo,descricao,foto)

        //resultado 
        expect(resultado).toEqual(filme)

    })
})