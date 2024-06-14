const cors = require("cors")
const express = require("express")
const app = express()
const usuariosRouter = require("./routes/usuarios")


app.use(express.json())
app.use(cors())
app.use(usuariosRouter)

app.listen(3000,()=>{
    console.log("O servidor está funcionando.")
})
