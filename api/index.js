import express from 'express'
import { Router } from 'express'
import cors from 'cors'

const app = express()

const route = Router()

route.get('/', cors({ origin: "*",}), (req, res) => {
    return res.json({
        success: true,
        message: "Sucesso - Hello World!"
    })
})

app.use(route)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server running in ' + port)
})
