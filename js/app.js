document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Nike Air Max',
            price: 349.99,
            img: 'img/nike-air-max.jpg'
        },
        {
            id: 2,
            name: 'Adidas Ultraboost',
            price: 399.99,
            img: 'img/adidas-ultraboost.jpg'
        },
        {
            id: 3,
            name: 'Puma RS',
            price: 299.99,
            img: 'img/puma-rs.jpg'
        },
        {
            id: 4,
            name: 'New Balance 574',
            price: 279.99,
            img: 'img/new-balance-574.jpg'
        },
        {
            id: 5,
            name: 'Reebok Classic',
            price: 259.99,
            img: 'img/reebok-classic.jpg'
        },
/*        {
            id: 6,
            name: 'Asics Gel',
            price: 319.99,
            img: 'img/asics-gel.jpg'
        },
        {
            id: 7,
            name: 'Converse Chuck Taylor',
            price: 219.99,
            img: 'img/converse-chuck-taylor.jpg'
        },
        {
            id: 8,
            name: 'Vans Old Skool',
            price: 239.99,
            img: 'img/vans-old-skool.jpg'
        }*/
    ];
    // Generowanie produktów
    const featuredContainer = document.getElementById('featured-products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
      <img src="${product.img}"/>
      <h3>${product.name}</h3>
      <p>${product.price} zł</p>
      <button class="add-to-cart-btn" data-name="${product.name}">Dodaj do koszyka</button>`;
        featuredContainer.appendChild(productDiv);
    });

    // Dodawanie do koszyka
    featuredContainer.addEventListener('click', (mouseClick) => {
        if (mouseClick.target.tagName === 'BUTTON') {
            const productName = mouseClick.target.getAttribute('data-name');

            //Miejsce na zaimplementowanie logiki dodawania produktów do koszyka

            alert(`Dodano produkt ${productName} do koszyka!`);
        }
    });
});
