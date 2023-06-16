$(document).ready(() => {
    $('#product-price').mask('000.000.000.000.000,00', {reverse: true})
})

const saveProduct = (event) => {
    event.preventDefault()

    const name = document.getElementById('product-name').value
    const price = document.getElementById('product-price').value
    const stock = document.getElementById('product-stock').value

    const product = { name, price, stock }
    products.push(product)
    storeProducts()
    printProduct(product)
    clearForm()
}

const clearForm = () => {
    const productForm = document.getElementById('product-form')
    productForm.reset()
}

const printProduct = (product) => {
    const { name, price, stock } = product

    const productCardValue = `
    <div class='product-card'>
        <div class='product-row'>
            <span class='product-name'>
                ${name.charAt(0).toUpperCase()}${name.substring(1)}
            </span>
        </div>

        <div class='product-row'>
            <span class='product-metadata'>
               R$ ${price}
            </span>
        </div>

        <div class='product-row'>
            <span class='product-metadata'>
                ${stock} unidades
            </span>
        </div>
    </div>
  `

    const productsArea = document.getElementById('products-area')
    productsArea.insertAdjacentHTML('afterbegin', productCardValue)
}

    const storeProducts = () => {
        const productsJson = JSON.stringify(products)
        localStorage.setItem('products', productsJson)
}

const productsJson = localStorage.getItem('products')
const products = productsJson ? JSON.parse(productsJson) : []

products.forEach((p) => printProduct(p))