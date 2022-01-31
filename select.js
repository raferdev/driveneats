
function selecionar(tipo, produto, preco) {
   const selecionado = document.querySelector("." + tipo + ".border");
   if (selecionado !== null) {
      const repetiu = selecionado.classList.contains(produto);
      if (repetiu) {
         const icone = document.querySelector(".ionicon" + "." + tipo + ".aparecendo");
         icone.classList.remove("aparecendo");
         icone.classList.add("some");
         selecionado.classList.remove("border");
         return;
      } else {
         const icone = document.querySelector(".ionicon" + "." + tipo + ".aparecendo");
         selecionado.classList.remove("border");
         icone.classList.remove("aparecendo");
         icone.classList.add("some");
      }
   }
   const click = document.querySelector("." + produto);
   const icone = document.querySelector(".ionicon" + "." + produto);
   click.classList.add("border");
   icone.classList.add("aparecendo");
   icone.classList.remove("some");
}