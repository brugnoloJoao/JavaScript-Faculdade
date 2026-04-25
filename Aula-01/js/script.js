function exibirSaudacao(){
    let campoNome = document.getElementById('inputNome');
    let areaMensagem = document.getElementById('mensagemSaudacao');

    if(campoNome.value == ""){
        alert("Erro: O campo de nome está vazio!");
    } else{
        areaMensagem.innerHTML = "Bem vindo, <strong>" +campoNome.value + "</strong> a disciplina de Desenvolvimento de Web Frontend";
    
        console.log("Interação realizada com sucesso para o usuário: " + campoNome.value);
    }
}

function calcularSoma() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;

    let somaReal = Number(valor1) + Number(valor2);

    document.getElementById("resultadoSoma").innerHTML = "Resultado: " + somaReal;

    console.log("Cálculo realizado: " + valor1 + " + " + valor2 + " = " + somaReal)
}