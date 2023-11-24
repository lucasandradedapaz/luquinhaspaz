import express, {Request} from 'express';
import BancoMongoDB from './infra/banco/banco-mongodb';
import ListarFilme from './aplicacao/listar-filme.use-case'
import cors from 'cors'
const bancoMongoDB = new BancoMongoDB()
const app = express();
app.use(express.json())


app.get('/filmes', async (req, res) => {
    const listarFilme = new ListarFilme(bancoMongoDB)
    const filmes = await listarFilme.executar()
    console.log(filmes)
    res.status(200).send(filmes)        
});

app.post('/filmes', (req:Request, res) => {
    const {id, titulo, descricao, imagem} = req.body
    const filme:Filme = {
        id,
        titulo,
        descricao,
        imagem,
    }
    filmes_repositorio.push(filme)
    res.status(201).send(filme)
});

app.delete('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const filme = filmes_repositorio.find(filme => filme.id === id)
    if (!filme) return res.status(404).send(filme)
    const filterFilme = filmes_repositorio.filter(filme => filme.id !== id)
    filmes_repositorio = filterFilme
    res.status(200).send(filme)
});


// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});


type Filme = {
    id: number,
    titulo: string,
    descricao: string,
    imagem: string,
}
let filmes_repositorio:Filme[] = []