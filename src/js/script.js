const body = document.querySelector("body")
const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const imagemBotao = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () =>{
    body.classList.toggle("modo-escuro")
    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    
    if(modoEscuroEstaAtivo){
        imagemBotao.setAttribute("src", "./src/imagens/moon.png")
    }
    else{
        imagemBotao.setAttribute("src", "./src/imagens/sun.png")
    }
})