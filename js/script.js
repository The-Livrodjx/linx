// Busca os produtos na página


const getProductUrl = id => `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${id}`;

// Array de Produtos
const productsPromise = fetch(getProductUrl(1)).then(response => response.json());

// Gerando HTML com os dados dos produtos
function generateHTML(products) {
    let accumulator = "";

    for (product of products) {
        accumulator += `<li class="card">
                    <img class="card-image" alt="${product.name}" src="${product.image}"/>
                    <h2 class="card-title">${product.name}</h2>
                    <p class="card-subtitle">${product.description}</p>

                    <span>De: R$${product.oldPrice}</span>
                    <span class="newPrice">Por: R$${product.price}</span>

                    <button class="buy-btn">Comprar</button>
                </li>`
    };

    return accumulator
};

// Inserindo HTML dos produtos na página
function insertProductsIntoPage(productsHTML) {
    if (productsHTML !== undefined) {
        const ul = document.querySelector('[data-js="productsContent"]');

        ul.innerHTML = productsHTML;
    };
};

Promise.resolve(productsPromise).then(response => {
    // const products = response.products
    const products = response.products.slice(0, 6)


    console.log(products.length)
    const productsHTML = generateHTML(products);
    insertProductsIntoPage(productsHTML);
});
