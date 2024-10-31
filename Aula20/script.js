

function verificaDados() {

    const nome = document.querySelector("#nome").value
    const sobrenome = document.querySelector("#sobrenome").value
    const senha = document.querySelector("#senha").value
    const resultado = document.querySelector(".resultado")

    if(nome === ""){
        window.alert("O campo não pode estar vazio!")
        document.querySelector("#nome").style.borderColor = "red"

        return
    }
    if(sobrenome === ""){
        window.alert("O campo não pode estar vazio!")
        document.querySelector("#sobrenome").style.borderColor = "red"

        return
    }
    if(senha === ""){
        window.alert("O campo não pode estar vazio!")
        document.querySelector("#senha").style.borderColor = "red"

        return
    }
  
    resultado.innerHTML =  `<p>Nome: ${nome} </p>
                            <p>Sobrenome: ${sobrenome} </p>
                            <p>Senha: ${senha} </p>`
}