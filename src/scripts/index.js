import * as elementsCard from './modules/elementsCard'

const getWildberriesData = async () => {
    const products = await fetch('https://fakestoreapi.com/products').then((response) => response.json());
    const users = await fetch('https://fakestoreapi.com/users').then((response) => response.json());
  
    return {
      products,
      users
    }
  }
  
  const runWildberriesApplication = async () => {
    const { users, products } = await getWildberriesData();
    console.log(users,products)

    const cardProductsList = document.querySelector('.card-products_list');

    function createCardsProduct(idProductCard, ProductFoto, titleCard, categoryCard, descriptionCard, priceProduct) {

        const cardProductItem = elementsCard.createDivId('card-product_item', idProductCard);
        const cardProductPopUp = elementsCard.createA('card-product_pop-up');
        const cardProductImage = elementsCard.createDiv('card-product_image');
        const ProductImage = elementsCard.creatImg('img', ProductFoto, 'Image');
        const scaleProduct = elementsCard.createDiv('scale-product');
        const textScaleProduct = elementsCard.createP('text-scale_product', 'Увеличить картинку');
        const cardProductInformation = elementsCard.createDiv('card-product_information');
        const cardProductTitle = elementsCard.createH3('card-product_title', titleCard);
        const cardProductCategory = elementsCard.createH3('card-product_category', `Категория: ${categoryCard}`);
        const cardProductDescription = elementsCard.createP('card-product_description', descriptionCard)
        const cardroductPrice = elementsCard.createP('card-product_price', `${priceProduct} р.`);
        const btnAddBasket = elementsCard.createButtons('btn-add_basket', 'В корзину')

        cardProductsList.append(cardProductItem);
        cardProductItem.append(cardProductPopUp, cardProductInformation);
        cardProductPopUp.append(cardProductImage, scaleProduct);
        cardProductImage.append(ProductImage);
        scaleProduct.append(textScaleProduct);
        cardProductInformation.append(cardProductTitle, cardProductCategory, cardProductDescription, cardroductPrice, btnAddBasket);
    }
    
    function renderProducts(products) {
        products.forEach((product) => {
          const { id, image, title, category, description, price} = product;
          createCardsProduct(id, image, title, category, description, price);
        });
    }

    renderProducts(products)
  
    const modalWindow = document.getElementById('modalBasket')
    const btnOpen = document.getElementById('OpenModal')


    const findImageZoom = document.querySelector('.zoom-element_image img')
    const zoomImage = document.querySelector('.modal-element_image')

    btnOpen.onclick = function() {
        modalWindow.style.display = "block";
    }

    cardProductsList.addEventListener('click', (event) => {
        if(event.target.classList.contains('scale-product')) {
            const findCard = event.target.closest('.card-product_item')
            const findImage = findCard.querySelector('.card-product_image img')
            zoomImage.style.display = 'block'
            findImageZoom.src = findImage.src
        }
    })

    zoomImage.onclick = function() {
        zoomImage.style.display = 'none';
    }

    const searchProduct = (() => {
        const textProduct = document.getElementById("searchProduct");
        console.log(searchProduct)
        textProduct.addEventListener("input", () => {

            const searchProduct = textProduct.value.toLowerCase().trim();
    
            const filterProduct = products.filter((product) =>
              product.title.toLowerCase().includes(searchProduct)
            );
    
            cardProductsList.innerHTML = "";
    
            filterProduct.forEach((product) => {
                const { id, image, title, category, description, price} = product;
            createCardsProduct(id, image, title, category, description, price);
            });
        });
    })

    searchProduct()

}
  runWildberriesApplication()