// Busca os produtos na página

const getProductUrl = id => `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${id}`

// Array de Produtos



const generateProductPromises = () => Array(6).fill().map( _ => fetch(getProductUrl(1)).then(response => response.json()))

const arrayPromises = generateProductPromises()

let accumulator = ``;

const generateHTML = tproducts => tproducts.map((product, index)=> {
    
    console.log(tproducts[index].products[index].name)
    console.log(index)
    accumulator += `
        <li class="card">
            <img class="card-image" alt="${tproducts[index].products[index].name}" src="${tproducts[index].products[index].image}"/>
            <h2 class="card-title">${tproducts[index].products[index].name}</h2>
            <p class="card-subtitle">${tproducts[index].products[index].description}</p>

            <span>De: ${tproducts[index].products[index].oldPrice}</span>
            <span class="newPrice">Por: ${tproducts[index].products[index].price}</span>

            

            <button class="buy-btn">Comprar</button>
        </li>
    `

    if(index == 5) {
        return accumulator
    }
}, "")

// Gerando HTML com os dados dos produtos
// const generateHTML = products => products.reduce((accumulator, {name, image, description}) => {

//     // console.log({name, image, description})

//     accumulator += `
//             <li class="card">
//                 <img class="card-image" alt="${name}" src="${name}"/>
//                 <h2 class="card-title">${name}</h2>
//                 <p class="card-subtitle">${name}</p>

//                 <span>De: ${name}</span>
//                 <span class="newPrice">De: ${name}</span>

                

//                 <button class="buy-btn">Comprar</button>
//             </li>
//         `

//     return accumulator
// }, '')

const insertProductsIntoPage = products => {
    const ul = document.querySelector('[data-js="productsContent"]')

    ul.innerHTML = products;
}

const productPromises = generateProductPromises()

Promise.all(arrayPromises).then(generateHTML).then(insertProductsIntoPage);