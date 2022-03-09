async function fetchapiprodutos(){
     await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
    .then(response => response.json())
    .then(data => {
        const produtos = data.products
        produtos.map((item) => {
            const sectionProdutos = document.getElementById('produtos')
           let produto = document.createElement('div')
           produto.setAttribute('id','produto')
           produto.setAttribute('class', 'produto')
           produto.innerHTML = `<div class="imagem">
           <img src="${item.image}" alt="produto" id="image">
         </div>
         <div class="informacoes_produtos">
            <h3 id="nome">${item.name}</h3>
            <p id="description">${item.description}</p>
             <span class="valor">De R$${item.oldPrice}</span>
            <span class="valor_promocional">Por: R$${item.price}</span>
            <span class="valor_parcelado">ou ${item.installments.count}x de R$${item.installments.value}</span>
            <button class="btn_comprar">Comprar</button
        </div>`
            sectionProdutos.appendChild(produto)
        }) 
    },)
}

fetchapiprodutos()

const btnMaisProdutos =  document.querySelector('#btn_mais_produtos') 

btnMaisProdutos.onclick = async function fetchApiProdutosPage2(){
    await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2')
   .then(response => response.json())
   .then(data => {
       const produtos = data.products
       produtos.map((item) => {
           const sectionProdutos = document.getElementById('produtos')
          let produto = document.createElement('div')
          produto.setAttribute('id','produto')
          produto.setAttribute('class', 'produto')
          produto.innerHTML = `<div class="imagem">
          <img src="${item.image}" alt="produto" id="image">
        </div>
        <div class="informacoes_produtos">
           <h3 id="nome">${item.name}</h3>
           <p id="description">${item.description}</p>
            <span class="valor">De R$${item.oldPrice}</span>
           <span class="valor_promocional">Por: R$${item.price}</span>
           <span class="valor_parcelado">ou ${item.installments.count}x de R$${item.installments.value}</span>
           <button class="btn_comprar">Comprar</button
        </div>`
           sectionProdutos.appendChild(produto)
 
           const answer = produtos.length == 8
           ? btnMaisProdutos.classList.add('btn_display_none')
            : ''
            

       }) 
   },)
}

