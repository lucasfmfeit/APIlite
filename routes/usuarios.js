const Usuario = require("../models/usuario")

const express = require("express")
const usuariosRouter = express.Router()

usuariosRouter.put("/usuarios/:id",async(request, response)=>{
    const [usuarioAtualizado, linhasAtualizadas] = await Usuario.update(request.body, {
        where:{
            id:request.params.id
        }
    })
    return response.json(usuarioAtualizado)
})

usuariosRouter.delete("/usuarios/:id", async(request, response) => {
    const resultado = await Usuario.destroy({ 
        where:{
            id:request.params.id
        }
    })
    return response.json(resultado)
})

usuariosRouter.get("/usuarios", async(request, response)=>{
    const resultado = await Usuario.findAll()
    return response.json(resultado)
})

usuariosRouter.post("/usuarios", async(request, response)=>{
    const resultado = await Usuario.create(request.body)
    return response.json(resultado) 
})
usuariosRouter.get("/usuarios/:id", async(request, response)=>{
    const resultado = await Usuario.findOne({
        where:{
            id:request.params.id
        }
    })
    return response.json(resultado)
}) 
module.exports=usuariosRouter