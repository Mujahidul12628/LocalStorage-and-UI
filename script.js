const getValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = "";
    return inputValue;
}

const addproduct = () => {
    const productName = getValue('pName');
    const productQuantity = getValue('pQuantity');
    console.log(productName, productQuantity);


    displayProduct(productName, productQuantity);
    //localStorage.setItem(productName, productQuantity)
    saveItemLocalStorage(productName, productQuantity)
}
const getShoppingCartFromLocalStorage = () => {

    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart
}

const saveItemLocalStorage = (productName, productQuantity) => {

    const cart = getShoppingCartFromLocalStorage();
    //add product to the Local Storage
    cart[productName] = productQuantity;
    const cartStringified = JSON.stringify(cart)

    //Save item in Local storage 
    localStorage.setItem('cart', cartStringified)

}

const displayProduct = (productName, productQuantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${productQuantity} `;
    productContainer.appendChild(li)

}

const displayStoredProduct = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const productName in cart) {
        const productQuantity = cart[productName];
        console.log(productName, productQuantity);
        displayProduct(productName, productQuantity)
    }
}
displayStoredProduct();