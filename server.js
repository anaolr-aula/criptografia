const app =require('../controller/controller')

const PORT = 3027

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta`,PORT)
})