// Listener dla guzika dodawania do koszyka
const productsGrid = document.getElementById('products-grid');

productsGrid.addEventListener('click', (mouseClick) => {
    if (mouseClick.target.classList.contains('add-to-cart-btn')) {
        const productName = mouseClick.target.dataset.name;

        //Miejsce na dodwanie przedmiotów do koszyka

        alert(`Dodano produkt ${productName} do koszyka!`);
    }
});