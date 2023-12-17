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
        const cardProductInformationPrice = elementsCard.createDiv('card-product_informationPrice')
        const cardroductPrice = elementsCard.createP('card-product_price', priceProduct);
        const cardroductCurrency = elementsCard.createP('card-product_currency', ' p.');
        const btnAddBasket = elementsCard.createButtons('btn-add_basket', 'В корзину')

        cardProductsList.append(cardProductItem);
        cardProductItem.append(cardProductPopUp, cardProductInformation);
        cardProductPopUp.append(cardProductImage, scaleProduct);
        cardProductImage.append(ProductImage);
        scaleProduct.append(textScaleProduct);
        cardProductInformationPrice.append(cardroductPrice, cardroductCurrency)
        cardProductInformation.append(cardProductTitle, cardProductCategory, cardProductDescription, cardProductInformationPrice, btnAddBasket);
    
    }
    
    function renderProducts(products) {
        products.forEach((product) => {
          const { id, image, title, category, description, price} = product;
          createCardsProduct(id, image, title, category, description, price);
        });
    }

    renderProducts(products)

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
  
    const modalWindow = document.getElementById('modalBasket');
    const btnOpen = document.getElementById('OpenModal');
    const btnHome = document.getElementById("home");
    console.log(btnHome)



    btnOpen.onclick = function() {
        modalWindow.style.display = "block";
    }

    btnHome.onclick = function() {
        modalWindow.style.display = "none";
        console.log(true)
    }


    const findImageZoom = document.querySelector('.zoom-element_image img')
    const zoomImage = document.querySelector('.modal-element_image')

    cardProductsList.addEventListener('click', (event) => {
        if(event.target.classList.contains('scale-product')) {
            const findCard = event.target.closest('.card-product_item')
            const findImage = findCard.querySelector('.card-product_image img')
            zoomImage.style.display = 'block'
            findImageZoom.src = findImage.src
        }

        if(event.target.classList.contains('btn-add_basket')){
            const findCard = event.target.closest('.card-product_item');
            findCard.classList.add('check');
        }

    })

    const headerBasket = document.querySelector('.header-basket_item');
    headerBasket.addEventListener('click', (event) => {
        if(event.target.classList.contains('header-basket_item')){
            const findAllProductInBasket = document.querySelectorAll('.check')
            const listProductInBasket = document.querySelector('.basket_information_product')
            const totalAmounttext = document.querySelector('.basket_information_totalAmountProduct')
            let totalAmount = 0;
            findAllProductInBasket.forEach((product) => {
                const productClone = product.cloneNode(true);
                productClone.querySelector('.btn-add_basket').remove();
                productClone.querySelector('.scale-product').remove();
                totalAmount += +productClone.querySelector('.card-product_price').textContent
                listProductInBasket.append(productClone)
            })
            totalAmounttext.textContent = totalAmount;
        }
    })

    zoomImage.onclick = function() {
        zoomImage.style.display = 'none';
    }


}
  runWildberriesApplication()