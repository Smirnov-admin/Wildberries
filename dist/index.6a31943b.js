const getWildberriesData = async ()=>{
    const products = await fetch("https://fakestoreapi.com/products").then((response)=>response.json());
    const users = await fetch("https://fakestoreapi.com/users").then((response)=>response.json());
    return {
        products,
        users
    };
};
const runWildberriesApplication = async ()=>{
    const { users, products } = await getWildberriesData();
    console.log(users, products);
    const cardProductsList = document.querySelector(".card-products_list");
    function addCard(idProductCard, ProductFoto, titleCard, priceProduct) {
        const cardProductItem = document.createElement("div");
        cardProductItem.classList.add("card-product_item");
        cardProductItem.id = idProductCard;
        cardProductsList.append(cardProductItem);
        const cardProductPopUp = document.createElement("a");
        cardProductPopUp.classList.add("card-product_pop-up");
        cardProductItem.append(cardProductPopUp);
        const cardProductImage = document.createElement("div");
        cardProductImage.classList.add("card-product_image");
        cardProductPopUp.append(cardProductImage);
        const ProductImage = document.createElement("img");
        ProductImage.src = ProductFoto;
        ProductImage.alt = "asdsad";
        cardProductImage.append(ProductImage);
        const scaleProduct = document.createElement("div");
        scaleProduct.classList.add("scale-product");
        cardProductPopUp.append(scaleProduct);
        const textScaleProduct = document.createElement("p");
        textScaleProduct.classList.add("text-scale_product");
        textScaleProduct.textContent = "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443";
        scaleProduct.append(textScaleProduct);
        const cardProductInformation = document.createElement("div");
        cardProductInformation.classList.add("card-product_information");
        cardProductItem.append(cardProductInformation);
        const cardProductTitle = document.createElement("h3");
        cardProductTitle.classList.add("card-product_title");
        cardProductTitle.textContent = titleCard;
        cardProductInformation.append(cardProductTitle);
        const cardProductDescription = document.createElement("p");
        cardProductDescription.classList.add("card-product_description");
        cardProductDescription.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, in itaque molestias consequatur amet soluta eos excepturi vel velit ipsum ";
        cardProductInformation.append(cardProductDescription);
        const cardroductPrice = document.createElement("p");
        cardroductPrice.classList.add("card-product_price");
        cardroductPrice.textContent = priceProduct;
        cardProductInformation.append(cardroductPrice);
        const btnAddBasket = document.createElement("button");
        btnAddBasket.classList.add("btn-add_basket");
        btnAddBasket.textContent = "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443";
        cardProductInformation.append(btnAddBasket);
    }
    function renderProducts(products) {
        products.forEach((product)=>{
            const { image, price, title, id } = product;
            addCard(image, price, title, id);
        });
    }
    renderProducts(products);
};
runWildberriesApplication();

//# sourceMappingURL=index.6a31943b.js.map
