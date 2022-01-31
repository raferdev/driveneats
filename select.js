let total = 0
let escolhas = 0
function selecionar(tipo, produto, preco) {
   const selecionado = document.querySelector("." + tipo + ".border");
   if (selecionado !== null) {
      const repetiu = selecionado.classList.contains(produto);
      if (repetiu) {
         const icone = document.querySelector(".ionicon" + "." + tipo + ".aparecendo");
         icone.classList.remove("aparecendo");
         icone.classList.add("some");
         selecionado.classList.remove("border");
         if (escolhas == 3){
            const fecharPedido = document.querySelector(".fechar_pedido");
            fecharPedido.classList.remove("verde");
            fecharPedido.innerHTML = "<p>Selecione os 3 itens</p><p>para fechar o pedido</p>";
            fecharPedido.href.remove;
            escolhas -= 1;
            return;
         }
         escolhas -= 1;
         return;
      } else {
         const icone = document.querySelector(".ionicon" + "." + tipo + ".aparecendo");
         selecionado.classList.remove("border");
         icone.classList.remove("aparecendo");
         icone.classList.add("some");
         escolhas -= 1;
      }
   }
   const click = document.querySelector("." + produto);
   const icone = document.querySelector(".ionicon" + "." + produto);
   click.classList.add("border");
   icone.classList.add("aparecendo");
   icone.classList.remove("some");
   escolhas += 1;
   if (escolhas == 3) {
      const fecharPedido = document.querySelector(".fechar_pedido");
      fecharPedido.classList.add("verde");
      fecharPedido.innerHTML = "Fechar pedido";
      fecharPedido.href.remove = "";
   }
}
