import express from 'express'
import { Router } from 'express'
import cors from 'cors'

const app = express()

const route = Router()

route.get('/', cors({ origin: "*",}), (req, res) => {
    return res.json(
        {
            "TESTANDO-GUI": [{
                    "receita": "Barrinhas de cereal",
                    "ingredientes": "1 xícara de nozes, 1 xícara de frutas secas, 1 xícara de tâmaras secas sem caroço",
                    "ingredientesBase": {
                        "0": "3",
                        "1": "Nozes",
                        "2": "Frutas secas",
                        "3": "Tamaras"
                    },
                    "modoPreparo": "Bata todos os ingredientes em um processador por cerca de dois minutos, até que formem uma massa. Embrulhe a mistura em um papel filme e leve à geladeira por algumas horas até sentir que a massa está dura. Corte em formato de barras e conserve na geladeira.",
                    "link_imagem": "http://data.whicdn.com/images/25686711/large.jpg"
                },
        
                {
                    "receita": "Mousse de limão",
                    "ingredientes": "1 lata de leite condensado, 1 lata de creme de leite, 1/2 xícara de limão espremido",
                    "ingredientesBase": {
                        "0": "3",
                        "1": "Leite condensado",
                        "2": "Creme de leite",
                        "3": "Limao"
                    },
                    "modoPreparo": "Coloque o creme de leite e o leite condensado no liquidificador, bata um pouco e acrescente o suco de limão aos poucos. Quando a massa ficar consistente, coloque em um recipiente de vidro e leva à geladeira.",
                    "link_imagem": "http://data.whicdn.com/images/78859362/large.jpg"
                }
            ]
    })
})

app.use(route)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server running in ' + port)
})
