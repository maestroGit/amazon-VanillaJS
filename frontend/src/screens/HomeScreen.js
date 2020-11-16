import data from "../data.js";
// import data.js  subir a src y acceder al archivo
// export HomeScreen as an object with render() method
// implement render()
// return products mapped to lis inside an ul

const HomeScreen = {
  render: () => {
    // Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
    const { products } = data;
    return `
        <ul class ="products-list">
        ${products.map(
          (product) => `
                                <li>
                                <div class="product">
                                    <div class="product-image">
                                        <a ref="/#/product/1">
                                          <img src="${product.image}" alt="${product.image}"></a>
                                    </div>
                                    <div class="product-name">
                                        <a href="/#/product/${product._id}">${product.name}</a>
                                    </div>
                                    <div class="product-brand">
                                        <a href="/#/product/1">Puma</a>
                                    </div>
                                    <div class="product-price">${product.price}</div>
                                </div>
                            </li>
                        `
         ).join('\n')}
        `
  },
};

export default HomeScreen;
