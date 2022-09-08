const getValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

const addproduct = () => {
    const productName = getValue('pName');
    const productQuantity = getValue('pQuantity');
    console.log(productName, productQuantity);


    displayProduct(productName, productQuantity);
    localStorage.setItem(productName, productQuantity)
}

const displayProduct = (productName, productQuantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${productQuantity} `;
    productContainer.appendChild(li)

}