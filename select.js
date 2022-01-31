
let escolhas = 0;
let produto1 = "";
let produto2 = "";
let produto3 = "";
let preco1 = 0;
let preco2 = 0;
let preco3 = 0;

function selecionar(tipo, produto, preco) {

   if (tipo == "pratos") {
      produto1 = produto
      preco1 = preco
   }
   if (tipo == "bebidas") {
      produto2 = produto
      preco2 = preco
   }
   if (tipo == "sobremesas") {
      produto3 = produto
      preco3 = preco
   }
   const selecionado = document.querySelector("." + tipo + ".border");
   if (selecionado !== null) {
      const repetiu = selecionado.classList.contains(produto);
      if (repetiu) {
         const icone = document.querySelector(".ionicon" + "." + tipo + ".aparecendo");
         icone.classList.remove("aparecendo");
         icone.classList.add("some");
         selecionado.classList.remove("border");
         if (escolhas == 3) {
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
   }
}

function enviarMensagem() {
   if (escolhas == 3) {
      let total = preco1 + preco2 + preco3;
      let produto11 = "";
      let produto22 = "";
      let produto33 = "";
      if (produto1 == "frango"|| produto1 == "frango2"||produto1 == "frango3"||produto1 == "frango4"){
         produto11 = "Frango Yin Yang";
      }
      if (produto2 == "coca"|| produto1 == "coca2"||produto1 == "coca3"||produto1 == "coca4"){
         produto22 = "Coquinha gelada";
      }
      if (produto1 == "pudim"|| produto1 == "pudim2"||produto1 == "pudim3"||produto1 == "pudim4"){
         produto33 = "Pudim";
      }
      var celular = "5548996546409";
      var texto = "Olá, gostaria de fazer o pedido: \n" + "- Prato: " + produto11 + " \n" + "- Bebida:" + produto22 + " \n" + "- Sobremesa: " + produto33 + " \n" + "Total: R$ " + total.toFixed(2);

      texto = window.encodeURIComponent(texto);

      window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
   }
}