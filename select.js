 function selecionar (produto,preco) {
     if (produto == "prato") {
        const selecionado = document.querySelector("." + produto, ".border");
        if (selecionado !== null) {
            selecionado.classList.remove("border");
            selecionado.classList.add("some")
         }
       } 
    }
 