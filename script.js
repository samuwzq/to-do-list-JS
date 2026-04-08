const inputTarefa = document.getElementById("lista");
const botaoAdicionar = document.getElementById("btnList");
const listaUl = document.getElementById("list")

botaoAdicionar.addEventListener("click", () =>{
    const valorInput = inputTarefa.value;
    if(valorInput === ""){
        alert("Digite uma tarefa!");
        return
    }
    const itemLista = document.createElement("li");
    const span = document.createElement("span");
    const btnRemover = document.createElement("button");
    span.textContent = valorInput;
    btnRemover.textContent = "Remover";

    itemLista.appendChild(span)
    itemLista.appendChild(btnRemover)
    listaUl.appendChild(itemLista);

    btnRemover.addEventListener("click", () =>{
        itemLista.remove()
    })
    span.addEventListener("click", () =>{
        span.style.textDecoration = "line-through"
    })

    inputTarefa.value = "";

})


