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
    console.log(modalWindow)
    const btnOpen = document.getElementById('OpenModal')
    console.log(btnOpen)

    btnOpen.onclick = function() {
        modalWindow.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modalWindow) {
            modalWindow.style.display = "none";
        }
      }



}
  
  runWildberriesApplication()